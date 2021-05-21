import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

class AuthControllers 
{
  async authenticate(request: Request, response: Response) {
    const { email, password } = request.body;
    const authService = new AuthService();
    try{
       const userToken = await authService.authenticate(email, password);
       return response.json(userToken);
    }catch(e) {
      return response.sendStatus(401);
    }

  }
}

export { AuthControllers }