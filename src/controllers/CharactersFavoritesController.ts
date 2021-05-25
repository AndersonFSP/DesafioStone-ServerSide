import { Request, Response } from 'express';
import { CharactersFavoritesService } from '../services/CharactersFavoritesService';

class CharactersFavoritesController
{
  async create(request: Request, response: Response) {
    let { user_id } = request.params;
    const { id_character, name } = request.body;
    const charactersFavoritesService = new CharactersFavoritesService();
    try{
      const characterFavorite = await charactersFavoritesService.create(id_character, name, parseInt(user_id));
      return response.json(characterFavorite);
    }catch{
      return response.sendStatus(404);
    }
  }

  async findCharacters(request: Request, response: Response) {
    const { user_id } = request.params;
    const charactersFavoritesService = new CharactersFavoritesService();
    try {
      const characters = await charactersFavoritesService.findCharacters(parseInt(user_id));
      return response.json(characters);
    }catch{
      return response.sendStatus(404);
    }
  }

  async delete(request: Request, response: Response) {
    const { user_id, id_character } = request.params;
    const charactersFavoritesService = new CharactersFavoritesService();
    try {
      await charactersFavoritesService.delete(parseInt(user_id), parseInt(id_character)); 
      return response.sendStatus(200);
    }catch{
      return response.sendStatus(404);
    }
  }
}

export { CharactersFavoritesController }