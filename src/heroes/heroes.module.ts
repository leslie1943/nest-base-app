// system module
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
// handlers
import { CommandHandlers } from './commands/handlers';
// import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';
// controller
import { HeroesGameController } from './heroes.controller';
// entity
import { Hero } from './entity/heroes.entity';
// repository
import { HeroRepository } from './repository/hero.repository';
// saga
// import { HeroesGameSagas } from './sagas/heroes.sagas';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Hero, HeroRepository])],
  controllers: [HeroesGameController],
  providers: [...CommandHandlers, ...QueryHandlers] /** ...EventHandlers, HeroesGameSagas */,
})
export class HeroesGameModule {}
