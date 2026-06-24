import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

// Configure CORS, validation, Swagger, and listen on PORT
export async function bootstrap() {
  const isProd = process.env.NODE_ENV === 'production';

  const app = await NestFactory.create(AppModule, {
    logger: isProd ? ['error', 'warn', 'log'] : undefined,
  });

  // cPanel injects PORT — listen on all interfaces; local dev falls back to 3001
  const host = '0.0.0.0';
  const port = Number(process.env.PORT) || 3001;
  if (!process.env.PORT) {
    console.warn(
      '[HisaabAI] PORT not set — using 3001. For live site use Node.js App → RESTART (not Run JS script → start).',
    );
  }
  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';

  app.enableCors({ origin: frontendUrl, credentials: true });
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Swagger uses extra memory — skip on cPanel production
  if (!isProd || process.env.ENABLE_SWAGGER === 'true') {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('HisaabAI API')
      .setDescription('Smart banking companion API for Pakistan')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(port, host);
  console.log(`[HisaabAI] API running on ${host}:${port} — /api/v1/health`);
}

// Direct run: node dist/main.js (dev build / nest start)
if (require.main === module) {
  bootstrap().catch((err) => {
    console.error('[HisaabAI] Failed to start:', err);
    process.exit(1);
  });
}
