import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  /**
   * Now you can access CatsService after import CatsService,
   * and share same instance of CatsService.
   */
  exports: [CatsService],
})
export class CatsModule {}
