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

  async findCharacters(user_id: number) {
    const characters = await this.charactersFavoritesRepository.find({ user_id });
    if(!characters)
      throw new Error("characters does not exist");

    return characters;
  }

  async delete(user_id: number, id_character: number) {
    const character = await this.charactersFavoritesRepository.findOne({ user_id, id_character});
    if(!character)
      throw new Error("character does not exist");

    await this.charactersFavoritesRepository.remove(character);
  }

}

export { CharactersFavoritesService }