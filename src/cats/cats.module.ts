import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cats.entity';
import { CatRepository } from './cats.repository';
@Module({
  imports: [
    // TypeOrmModule.forFeature: [Entity, Repository] => 让 Entity 和 Repository 关联
    TypeOrmModule.forFeature([Cat, CatRepository]),
  ],
  controllers: [CatsController],
})
export class CatsModule {}
