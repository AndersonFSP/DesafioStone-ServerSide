import { getCustomRepository, Repository } from "typeorm"
import { CharacterFavorite } from "../entities/CharacterFavorite"
import { CharactersFavoritesRepository } from "../repositories/CharactersFavoritesRepository";

class CharactersFavoritesService
{
  private charactersFavoritesRepository: Repository<CharacterFavorite> = getCustomRepository(CharactersFavoritesRepository);

  async create(id_character: number, name: string, user_id: number ) {
    const characterFavorite = this.charactersFavoritesRepository.create({
      id_character,
      name,
      user_id
    });
    await this.charactersFavoritesRepository.save(characterFavorite);
    return characterFavorite;
  }

}

export { CharactersFavoritesService }