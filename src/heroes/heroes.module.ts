// system module
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
// handlers
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';
// controller
import { HeroesGameController } from './heroes.controller';
// entity
import { Hero as HeroEntity } from './entity/heroes.entity';
// repository
import { HeroRepository } from './repository/hero.repository';
// saga
import { HeroesGameSagas } from './sagas/heroes.sagas';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([HeroEntity, HeroRepository])],
  controllers: [HeroesGameController],
  providers: [...CommandHandlers, ...EventHandlers, ...QueryHandlers, HeroesGameSagas],
})
export class HeroesGameModule {}
