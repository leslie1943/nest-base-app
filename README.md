
### main.ts
- 应用程序的入口文件,它使用核心函数 NestFactory 来创建 Nest 应用程序的实例.


### app.module.ts
- T应用程序的根模块（root module）


### controller.ts
- Controllers are responsible for handling incoming requests and returning responses to the client.

### decorators
- For example, a path prefix of customers combined with the decorator @Get('profile') would produce a route mapping for requests like GET /customers/profile.
```ts
// @@filename(cats.controller)
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get() // ====> /cats
  findAll() {
    return 'This action returns all cats';
  }
  @Get('profile')  // ====> /cats/profile
  findProfile() {
    return 'This action returns all cats';
  }
}
```

### DTO
- data transfer object: 数据传输对象


### last step
- 控制器已经准备就绪, 可以使用, 但是 Nest 依然不知道 CatsController 是否存在, 所以它不会创建这个类的一个实例
- 控制器总是属于模块, 这就是为什么我们在 @Module() 装饰器中包含 controllers 数组的原因. 由于除了根模块 AppModule之外, 我们还没有定义其他模块, 所以我们将使用它来介绍 CatsController


### 依赖注入
- 具体某个 `Controller` 的 `构造函数` 会根据传递的`类的类型`去 `app.module.ts` 中的 `providers` 里面 找到对应的 类型 然后初始化 自身的`this`


### dto vs interface
 * 在 contoller 中进行 service 调用的时候
 * 如果涉及到参数的传递, 那么 dto class 和  interface 是可以互通的
 * 但前提是:
 *  controller中 传递的参数的dto类型 要满足
 *  service中方法的参数类型


### module
- 其实就是把 controller 和 server 单独写到一个模块
```ts
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatService } from './cats.service';
@Module({
  controllers: [CatsController],
  providers: [CatService],
})
export class CatsModule {}
```
- 然后在 `app.module.ts`中引入, 然后再加入到 `imports`的数组中
```ts
import { Module } from '@nestjs/common';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';
import { CatsModule } from './cats/cats.module';
@Module({
  imports: [CatsModule],
  controllers: [HelloController /** CatsController */],
  providers: [HelloService /**CatService */],
})
export class AppModule {}
```

### 应用中间件
- 中间件不能在 `@Module()` 装饰器中列出.
- 我们必须使用模块类的 `configure() `方法来设置它们. 包含中间件的模块必须实现 `NestModule` 接口.我们将 `LoggerMiddleware` 设置在 `ApplicationModule` 层上.



### 函数式中间件
```ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.info('Middleware output:', req.url);
    next();
  }
}
```
- 我们使用的 `LoggerMiddleware` 类非常简单.
- 它没有成员, 没有额外的方法, 没有依赖关系.为什么我们不能只使用一个简单的函数？这是一个很好的问题, 因为事实上 - 我们可以做到.这种类型的中间件称为函数式中间件.让我们把 logger 转换成函数.
```ts
export function logger(req, res, next) {
  console.log(`Request...`);
  next();
};
```

### 全局中间件
- 如果我们想一次性将中间件绑定到每个注册路由, 我们可以使用由 `INestApplication` 实例提供的 `use()` 方法
