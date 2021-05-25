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
}

export { CharactersFavoritesController }