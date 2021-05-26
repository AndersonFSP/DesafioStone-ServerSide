import { 
  Column, 
  Entity, 
  JoinColumn, 
  ManyToOne,
  PrimaryColumn, 
} from 'typeorm';
import { User } from './User';

@Entity('characters_favorites')
class CharacterFavorite 
{
  @PrimaryColumn()
  id: number;

  @Column()
  id_character: number;

  @Column()
  name: string;

  @JoinColumn({name: "user_id"})
  @ManyToOne(() => User)
  user: User;

  @Column() 
  user_id: number;

  @Column()
  image: string;
}

export { CharacterFavorite }