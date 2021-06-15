import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Cat } from './cats.entity';

@Entity()
export class CatRef {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @OneToOne(() => Cat, (cat) => cat)
  @JoinColumn()
  cat: Cat;
}
