import { Router } from 'express';
import authMiddlewares from './middlewares/AuthMiddleware';
import { AuthControllers } from './controllers/AuthController';
import { UsersController } from './controllers/UsersController';

const router = Router();
const usersController = new UsersController();
const authenticateController = new AuthControllers();


router.post("/users", usersController.create);
router.put("/user/:id", authMiddlewares, usersController.update);
router.post("/auth", authenticateController.authenticate);
router.get("/list", authMiddlewares, usersController.list)
export { router };