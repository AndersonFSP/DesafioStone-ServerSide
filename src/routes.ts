import { Router } from 'express';
import authMiddlewares from './middlewares/AuthMiddleware';
import { AuthControllers } from './controllers/AuthController';
import { UsersController } from './controllers/UsersController';
import { CharactersFavoritesController } from './controllers/CharactersFavoritesController';
import { ComicsFavoritesController } from './controllers/ComicsFavoritesController';

const router = Router();
const usersController = new UsersController();
const authenticateController = new AuthControllers();
const charactersFavoritesController = new CharactersFavoritesController();
const comicsFavoritesController =  new ComicsFavoritesController();

// Rotas de usuário
router.post("/users", usersController.create);
router.get("/user/:id", authMiddlewares, usersController.findUser);
router.put("/user/:id", authMiddlewares, usersController.update);

//Rota de autenticação
router.post("/auth/login", authenticateController.authenticate);

// Rotas da funcionalidade de personagens favoritos
router.get("/user/:user_id/character/favorite", authMiddlewares, charactersFavoritesController.findCharacters);
router.post("/user/:user_id/character/favorite", authMiddlewares, charactersFavoritesController.create);
router.delete("/user/:user_id/character/:id_character", authMiddlewares, charactersFavoritesController.delete);


// Rotas da funcionalidade de hqs favoritas
router.get("/user/:user_id/comic/favorite", authMiddlewares, comicsFavoritesController.findComics);
router.post("/user/:user_id/comic/favorite", authMiddlewares, comicsFavoritesController.create);
router.delete("/user/:user_id/comic/:id_comic", authMiddlewares, comicsFavoritesController.delete);
export { router };