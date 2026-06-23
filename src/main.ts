import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

// Configure CORS, validation, Swagger, and listen on PORT
export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT) || 3001;
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

  const swaggerConfig = new DocumentBuilder()
    .setTitle('HisaabAI API')
    .setDescription('Smart banking companion API for Pakistan')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log(`[HisaabAI] API running on port ${port} — /api/v1`);
}

// Direct run: node dist/main.js (dev build / nest start)
if (require.main === module) {
  bootstrap().catch((err) => {
    console.error('[HisaabAI] Failed to start:', err);
    process.exit(1);
  });
}
