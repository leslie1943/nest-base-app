import { Module } from '@nestjs/common';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';
import { CatService } from './cats/cats.service';
import { CatsController } from './cats/un-cats.controller';

@Module({
  imports: [],
  controllers: [HelloController, CatsController],
  /**
    现在我们已经定义了提供者(CatsService)
    并且已经有了该服务的使用者(CatsController)
    我们需要在 Nest 中注册该服务
    以便它可以执行注入. 为此
    我们可以编辑模块文件(app.module.ts)
    然后将服务添加到@Module()装饰器的 providers 数组中.
   */
  providers: [HelloService, CatService],
})
export class AppModule {}
