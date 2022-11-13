import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { Public, GetCurrentUser } from '../common/decorators';
import { RtGuard } from '../common/guards/rt-guard';
import { AuthService } from './auth.service';
import { Login } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('doc/signin')
  docSignin(@Body() login: Login) {
    return this.authService.signinLocal(login, 'doctor');
  }

  @Public()
  @Post('lab/signin')
  labSignin(@Body() login: Login) {
    return this.authService.signinLocal(login, 'lab_technician');
  }

  @Public()
  @Post('user/signin')
  userSignin(@Body() login: Login) {
    return this.authService.signinLocal(login, 'lab_technician');
  }

  @Public()
  @UseGuards(RtGuard)
  @Post('refresh')
  async refreshTokens(@GetCurrentUser('refreshToken') refreshToken: string) {
    return this.authService.refreshTokens(refreshToken);
  }
}
