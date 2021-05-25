import { Router } from 'express';
import authMiddlewares from './middlewares/AuthMiddleware';
import { AuthControllers } from './controllers/AuthController';
import { UsersController } from './controllers/UsersController';
import { CharactersFavoritesController } from './controllers/CharactersFavoritesController';

const router = Router();
const usersController = new UsersController();
const authenticateController = new AuthControllers();
const charactersFavoritesController = new CharactersFavoritesController();

router.post("/users", usersController.create);
router.get("/user/:id", authMiddlewares, usersController.findUser);
router.put("/user/:id", authMiddlewares, usersController.update);
router.post("/auth/login", authenticateController.authenticate);
router.post("/user/:user_id/character/favorite", authMiddlewares, charactersFavoritesController.create);

export { router };