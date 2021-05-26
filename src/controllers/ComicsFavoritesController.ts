import { Request, Response } from 'express';
import { ComicsFavoritesService } from '../services/ComicsfavoritesService';

class ComicsFavoritesController 
{
  async create(request: Request, response: Response) {
    let { user_id } = request.params;
    const { id_comic, title } = request.body;
    const comicsFavoritesService = new ComicsFavoritesService();
    try {
      const comicFavorite = await comicsFavoritesService.create(id_comic, title, parseInt(user_id));
      return response.json(comicFavorite);
    }catch {
      return response.sendStatus(404);
    }
  }

  async findComics(request: Request, response: Response) {
    const { user_id } = request.params;
    const comicsFavoritesService = new ComicsFavoritesService();
    try {
      const comics = await comicsFavoritesService.findCharacters(parseInt(user_id));
      return response.json(comics);
    }catch{
      return response.sendStatus(404);
    }
  }

  async delete(request: Request, response: Response) {
    const { user_id, id_comic } = request.params;
    const comicsFavoritesService = new ComicsFavoritesService();
    try {
      await comicsFavoritesService.delete(parseInt(user_id), parseInt(id_comic)); 
      return response.sendStatus(200);
    }catch{
      return response.sendStatus(404);
    }
  }
}

export { ComicsFavoritesController }