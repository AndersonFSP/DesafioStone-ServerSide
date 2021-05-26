import { 
  Column, 
  Entity, 
  JoinColumn, 
  ManyToOne,
  PrimaryColumn, 
} from 'typeorm';
import { User } from './User';

@Entity('comics_favorites')
class ComicFavorite 
{
  @PrimaryColumn()
  id: number;

  @Column()
  id_comic: number;

  @Column()
  title: string;

  @JoinColumn({name: "user_id"})
  @ManyToOne(() => User)
  user: User;

  @Column() 
  user_id: number;
}

export { ComicFavorite }