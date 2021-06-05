import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middlewares/looger.middleware';
import { TimerMiddleware } from './middlewares/timer.middleware';
// import { logger } from './middlewares/logger.middleware';
@Module({
  imports: [CatsModule],
  controllers: [HelloController /** CatsController */],
  providers: [HelloService /**CatService */],
})
export class AppModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    // logger has been binded in global scope.
    consumer
      .apply(LoggerMiddleware, TimerMiddleware /**logger */)
      .forRoutes('');
    // .forRoutes({ path: 'cats', method: RequestMethod.GET });
    // .forRoutes('cats');
    // .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
    // .apply(LoggerMiddleware).forRoutes(CatsController);
    /**
     * .apply(LoggerMiddleware)
       .exclude(
          { path: 'cats', method: RequestMethod.GET },
          { path: 'cats', method: RequestMethod.POST },
          'cats/(.*)',
        )
        .forRoutes(CatsController);
     */
  }
}
