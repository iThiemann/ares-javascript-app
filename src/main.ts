import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';
import * as swaggerStats from 'swagger-stats';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = new DocumentBuilder()
    .setTitle('REST Demo')
    .setDescription('ARES Rest Demo Javascript-App')
    .setVersion('0.1')
    .addTag('demo')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.use(swaggerStats.getMiddleware({ swaggerSpec: document}));
 
  
  app.useStaticAssets(join(__dirname, '..', 'html'));
  app.setViewEngine('hbs');
  app.useGlobalPipes(new ValidationPipe());  
  SwaggerModule.setup('api', app, document);
  await app.listen(parseInt(process.env.APP_PORT));
  console.log("Welcome ARES Consulting");
  console.log(`Application is running on: ${await app.getUrl()}`);  
}
bootstrap();
