import { User } from '../users/users.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.photos)
  user: User;
}
