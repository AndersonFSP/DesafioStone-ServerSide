import { getCustomRepository, Repository } from "typeorm"
import { ComicFavorite } from "../entities/ComicFavorite"
import { ComicsFavoritesRepository } from "../repositories/ComicsFavoritesRepository";

class ComicsFavoritesService
{
  private comicsFavoritesRepository: Repository<ComicFavorite> = getCustomRepository(ComicsFavoritesRepository);

  async create(id_comic: number, title: string, user_id: number ) {
    const comicFavorite = this.comicsFavoritesRepository.create({
      id_comic,
      title,
      user_id,
    });
    await this.comicsFavoritesRepository.save(comicFavorite);
    return comicFavorite;
  }

  async findCharacters(user_id: number) {
    const comics = await this.comicsFavoritesRepository.find({ user_id });
    if(!comics)
      throw new Error("comics does not exist");

    return comics;
  }

  async delete(user_id: number, id_comic: number) {
    const comic = await this.comicsFavoritesRepository.findOne({ user_id, id_comic});
    if(!comic)
      throw new Error("character does not exist");

    await this.comicsFavoritesRepository.remove(comic);
  }
}

export { ComicsFavoritesService }