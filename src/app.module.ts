import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

// 💛💛💛 Test Modules
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';

// 💚💚💚 Business Module
import { CatsModule } from './cats/cats.module';

// 🍉🍉🍉 Middleware Plugins
import { LoggerMiddleware } from './middlewares/looger.middleware';
import { TimerMiddleware } from './middlewares/timer.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities for TypeOrm
import { Cat } from './cats/cats.entity';

@Module({
  // import modules
  imports: [
    CatsModule, // 依赖注入Cats模块,使内部的路由生效
    // 开启数据库连接,并将 entity 写入数据库
    TypeOrmModule.forRoot({
      type: 'mysql', // need install dependecy: npm install mysql --save
      host: '47.114.105.120',
      port: 3306,
      username: 'moon',
      password: '1234qwer',
      database: 'blog',
      synchronize: true,
      logging: false,
      // entities: ['dist/**/*.entity{.ts,.js}'],
      entities: [Cat],
      migrations: ['src/migration/**/*.ts'],
      subscribers: ['src/subscriber/**/*.ts'],
      cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migration',
        subscribersDir: 'src/subscriber',
      },
    }),
  ],

  // controllers
  controllers: [HelloController],
  // services
  providers: [HelloService],
})
export class AppModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, TimerMiddleware).forRoutes('');
  }
}
