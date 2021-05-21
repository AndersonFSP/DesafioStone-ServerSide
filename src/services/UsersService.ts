import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRespository';


class UsersService 
{
  private usersRepository: Repository<User> = getCustomRepository(UsersRepository);

  async create(email: string, password: string) {
    const userExist = await this.usersRepository.findOne({ email });
    if(userExist) 
      throw new Error("Usuario já cadastrado")

    const user = this.usersRepository.create({
       email, 
       password
    });
    await this.usersRepository.save(user);
    return user;
  }
}

export { UsersService }