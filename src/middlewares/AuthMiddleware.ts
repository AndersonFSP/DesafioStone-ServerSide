import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

function authMiddlewares(
  request: Request, 
  response: Response, 
  next: NextFunction
  ) {
   
  const { authorization } = request.headers;
  if(!authorization) {
    return response.sendStatus(401);
  }
  const token = authorization.replace("Bearer", "").trim();
  try {
    const data = jwt.verify(token, process.env.JWT_KEY as string);
    console.log(data);
    const { id } = data as TokenPayload;
    request.userId = id;
    return next();
  }catch(e){
    return response.sendStatus(401)
  }

}

export default authMiddlewares;