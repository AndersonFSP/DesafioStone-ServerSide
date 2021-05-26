import { Repository, EntityRepository } from 'typeorm';
import { ComicFavorite } from '../entities/ComicFavorite';

@EntityRepository(ComicFavorite)
class ComicsFavoritesRepository extends Repository<ComicFavorite>{}

export { ComicsFavoritesRepository }