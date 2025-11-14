import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository : Repository<User>,
  ) {}
  
 
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
 
  create(createUserDto: CreateUserDto): CreateUserDto {
    //console.log(createUserDto);    
    this.userRepository.save(createUserDto);
    return createUserDto;
  }

   // Todo: 
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
}
