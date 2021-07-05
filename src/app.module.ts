import { /**MiddlewareConsumer, */ Module, NestModule } from '@nestjs/common';

// 💛💛💛 Test Modules
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';

// 💚💚💚 Business Module
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { HeroesGameModule } from './heroes/heroes.module';
import { Sample2PostModule } from './sample-2-post/sample-2-post.module';
import { Sample3PostModule } from './sample-3-post/sample-3-post.module';
import { RelationModule } from './relations/relation.module';

// 🍉🍉🍉 Middleware Plugins
// import { LoggerMiddleware } from './middlewares/looger.middleware';
// import { TimerMiddleware } from './middlewares/timer.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // import modules
  imports: [
    CatsModule, // 依赖注入Cats模块,使内部的路由生效
    UsersModule,
    PhotosModule,
    HeroesGameModule,
    Sample2PostModule,
    Sample3PostModule,
    RelationModule,
    // 开启数据库连接,并将 entity 写入数据库
    TypeOrmModule.forRoot(),
  ],
  // controllers
  controllers: [HelloController],
  // services
  providers: [HelloService],
})
export class AppModule implements NestModule {
  async configure(/** consumer: MiddlewareConsumer */) {
    // consumer.apply(LoggerMiddleware, TimerMiddleware).forRoutes('');
  }
}
