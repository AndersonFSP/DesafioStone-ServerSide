import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController 
{
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const usersService = new UsersService();
    try {
      const user = await usersService.create(email, password);
      return response.json(user);
    }
    catch(e) {
      return response.sendStatus(409);
    }

  }
}

export { UsersController }