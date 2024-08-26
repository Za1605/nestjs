import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('info ')
    .setVersion('1.0')
    //button add
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in:'header'
    })
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document,{
    swaggerOptions: {
      docExpansion:'list',
      defaultModelsExpanDepth:7,
      persistent:true
    }
  });

  const port = 3000;
  const host  = 'localhost';
  await app.listen(port, host, () => {

    Logger.log(`Server running on http://${host}:${port}`);

    Logger.log(`Server running on http://${host}:${port}/docs`);
  });
}
void bootstrap();
