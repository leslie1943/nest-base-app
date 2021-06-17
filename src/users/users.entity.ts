import { Photo } from '../photos/photo.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  photoId: number;

  @OneToMany(() => Photo, (photo) => photo.user)
  photos: Photo[];
}
