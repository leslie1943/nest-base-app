import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 *  create the cats table in your database.
 *      -- entity represent your cat object.
 */
@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column()
  age: number;

  @Column({ length: 100, nullable: true })
  breed: string;
}
