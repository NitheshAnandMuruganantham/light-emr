import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from 'src/common/guards/at-gaurd';
import { AtStrategy } from './at.statagy';
import { RtStrategy } from './rt.statagy';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    AtStrategy,
    RtStrategy,
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
  imports: [JwtModule.register({})],
})
export class AuthModule {}
