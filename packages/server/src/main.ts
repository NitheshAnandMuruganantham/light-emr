import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from 'nestjs-prisma';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  app.enableCors({
    origin: [
      configService.getOrThrow<string>('FRONTEND_URL_1'),
      configService.getOrThrow<string>('FRONTEND_URL_2'),
    ],
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);
  await app.listen(parseInt(configService.get('PORT'), 10));
}
bootstrap();
