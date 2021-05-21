import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController 
{
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password, name } = request.body;
    const usersService = new UsersService();
    try {
      const user = await usersService.create(email, password, name);
      return response.json(user);
    }
    catch(e) {
      return response.sendStatus(409);
    }
  }

  async update(request: Request, response: Response) {
    const { id } = request.params
    const { email, password, name } = request.body;
    const usersService = new UsersService();
    try {
      const user = await usersService.update(parseInt(id), email, password, name);
      return response.json(user);
    }
    catch(e) {
      return response.sendStatus(409);
    }
  }

  list(request: Request, response: Response){
    return response.send({userId: request.userId});
  }
}

export { UsersController }