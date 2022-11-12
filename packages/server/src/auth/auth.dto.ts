import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  role: string;
}

export class ForgotAuthDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}

export class PasswordDto {
  @IsNotEmpty()
  @IsString()
  password: string;
}
