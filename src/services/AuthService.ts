import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRespository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class AuthService 
{
  private usersRepository: Repository<User> = getCustomRepository(UsersRepository);

  async authenticate(email: string, password: string) {
    const userExist = await this.findUser(email);    

    await this.validadePassword(password, userExist)

    const token = this.generateToken(userExist.id);
    const user = { 
      id: userExist.id, 
      email: userExist.email,
      name: userExist.name
    }

    return  {
      user,
      token
    };
  }

  async findUser(email: string) {
    const userExist = await this.usersRepository.findOne({ email });

    if(!userExist) 
      throw new Error("Usuário não existe");
    
    return userExist;
  }

  async validadePassword(password: string, user: User) {
    const isValidPassword = await bcrypt.compare(password, user.password)
    if(!isValidPassword)
      throw new Error("Senha incorreta");
  }

  generateToken(userId: number) {
    return jwt.sign({ id: userId }, process.env.JWT_KEY as string, { expiresIn: '1d' });
  }
}

export { AuthService }