import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import * as clc from 'cli-color';

@Entity()
export class Hero {
  constructor() {
    console.log(clc.bgBlueBright('[Hero => entity]: HeroEntity constructor'));
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column()
  age: number;

  @Column({ length: 50, nullable: true })
  city: string;
}
