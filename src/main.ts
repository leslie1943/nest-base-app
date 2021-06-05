/**
 * 应用程序的入口文件, 它使用核心函数 NestFactory 来创建应用程序的实例
 */

import { NestFactory } from '@nestjs/core';
// import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { logger } from './middlewares/logger.middleware';

// 引导应用程序的启动过程
async function bootstrap() {
  // 要创建一个 Nest 应用程序的实例, 使用 NestFactory 核心类
  // NestFactory 暴露了一些静态方法用于创建应用的实例
  // 其中 create 方法返回一个应用程序的对象, 该对象实现了 INestApplication 接口.该对象还提供了一组方法

  // 默认情况下使用 @nestjs/platform-express 软件包。许多用户对 Express 都很满意，并且无需采取任何操作即可启用它
  // const app = await NestFactory.create<NestExpressApplication>(AppModule); //
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  // 我们仅启动了 HTTP 侦听器, 该侦听器使应用程序可以侦听入栈的 HTTP 请求
  await app.listen(3000);
}
bootstrap();
