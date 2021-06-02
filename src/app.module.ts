import { Module } from '@nestjs/common';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';
import { CatService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [HelloController, CatsController],
  providers: [HelloService, CatService],
})
export class AppModule {}
