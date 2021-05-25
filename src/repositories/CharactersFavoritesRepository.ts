import { Repository, EntityRepository } from 'typeorm';
import { CharacterFavorite } from '../entities/CharacterFavorite';

@EntityRepository(CharacterFavorite)
class CharactersFavoritesRepository extends Repository<CharacterFavorite>{}

export { CharactersFavoritesRepository }