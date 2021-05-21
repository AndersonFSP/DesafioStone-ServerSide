import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRespository';


class UsersService 
{
  private usersRepository: Repository<User> = getCustomRepository(UsersRepository);

  async create(email: string, password: string, name: string) {
    const userExist = await this.usersRepository.findOne({ email });
    if(userExist) 
      throw new Error("Usuario já cadastrado")

    const user = this.usersRepository.create({
       email, 
       password,
       name
    });
    await this.usersRepository.save(user);
    return user;
  }

  async update(id: number, email: string, password: string, name: string) {
    const user = await this.usersRepository.findOne({ id });
    if(!user) 
      throw new Error("Usuario já cadastrado")
    
    user.name = name;
    user.email = email;
    user.password = password;
    
    return await this.usersRepository.save(user)
 
  }
}

export { UsersService }