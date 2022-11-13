import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { Login as LoginDto } from './dto/login-auth.dto';
import { PrismaService } from 'nestjs-prisma';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  private readonly StoredApiKey: string = this.config.get<string>('API_KEY');
  validateApiKey(apiKey: string): boolean {
    return apiKey === this.StoredApiKey;
  }

  async signinLocal(dto: LoginDto, role: string) {
    const user = await this.prisma[role].findFirst({
      where: {
        email: dto.email,
      },
    });

    if (!user) throw new ForbiddenException('Access Denied');

    const passwordMatches = await argon.verify(user.password, dto.password);
    if (!passwordMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(user.id, role);
    await this.updateRtHash(user.id, tokens.refresh_token, role);

    return tokens;
  }

  async logout(userId: string, role: string): Promise<boolean> {
    await this.prisma[role].update({
      where: {
        id: userId,
      },
      data: {
        refresh_token_hash: null,
      },
    });

    return true;
  }

  async refreshTokens(rt: string): Promise<{
    access_token: string;
    refresh_token: string;
    user: any;
  }> {
    const rt_data = this.jwtService.decode(rt)['https://hasura.io/jwt/claims'];
    const user = await this.prisma[rt_data['x-hasura-default-role']].findFirst({
      where: {
        id: rt_data['x-hasura-user-id'],
      },
    });
    if (!user || !user.refresh_token_hash)
      throw new ForbiddenException('Access Denied');

    const rtMatches = await argon.verify(user.refresh_token_hash, rt);
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(
      user.id,
      rt_data['x-hasura-default-role'],
    );
    await this.updateRtHash(
      user.id,
      tokens.refresh_token,
      rt_data['x-hasura-default-role'],
    );

    return tokens;
  }

  async updateRtHash(userId: string, rt: string, role: string): Promise<void> {
    const hash = await argon.hash(rt);
    await this.prisma[role].update({
      where: {
        id: userId,
      },
      data: {
        refresh_token_hash: hash,
      },
    });
  }

  async getTokens(
    userId: string,
    role: string,
  ): Promise<{
    access_token: string;
    refresh_token: string;
    user: any;
  }> {
    const user = await this.prisma[role].findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) throw new ForbiddenException('Access Denied');

    // let custom_claims = {};

    const jwtPayload = {
      sub: user.id,
      email: user.email,
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': [role],
        'x-hasura-default-role': role,
        'x-hasura-user-id': user.id,
        'x-hasura-user-email': user.email,
        // ...custom_claims,
      },
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        { ...jwtPayload, type: 'access_token' },
        {
          algorithm: 'RS256',
          privateKey: this.config.get<string>('AT_PRIVATE'),
          expiresIn: '3h',
        },
      ),
      this.jwtService.signAsync(
        { ...jwtPayload, type: 'refresh_token' },
        {
          algorithm: 'RS256',
          privateKey: this.config.get<string>('RT_PRIVATE'),
          expiresIn: '12h',
        },
      ),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
      user: {
        id: user.id,
        email: user.email,
        role: role,
        email_verified: user.email_verified,
        profile: user.profile,
      },
    };
  }
}
