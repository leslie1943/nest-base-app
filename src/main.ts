import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { logger } from './middlewares/logger.middleware';
import { cyanBright } from 'chalk';
import * as fs from 'fs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { ValidationPipe } from '@nestjs/common';

import { useContainer } from 'class-validator';

// launch app
async function bootstrap() {
  // application object
  const app = await NestFactory.create(AppModule);

  // 🏊‍♀️🏊‍♀️🏊‍♀️🏊‍♀️🏊‍♀️🏊‍♀️🏊‍♀️🏊‍♀️🏊‍♀️ 开启一个全局验证管道 🏊‍♀️🏊‍♀️🏊‍♀️🏊‍♀️🏊‍♀️🏊‍♀️🏊‍♀️🏊‍♀️🏊‍♀️
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // swagger config
  const options = new DocumentBuilder()
    .setTitle('Leslie NestJS API')
    .setDescription('NestJs API Endpoints')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
  SwaggerModule.setup('api', app, document);

  await app.init();

  // middlewares
  // app.use(logger);

  // port
  await app.listen(3000, () => {
    console.info(
      cyanBright(
        `Application has been run at:
        Home    : http://localhost:3000/
        Demos   : http://localhost:3000/cats
        Swagger : http://localhost:3000/api`,
      ),
    );
  });
}
bootstrap();
