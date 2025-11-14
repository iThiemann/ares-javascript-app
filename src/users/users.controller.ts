import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, ParseIntPipe, HttpException, HttpStatus, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidationPipe } from '@nestjs/common';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // TODO: use better PUT
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // get all
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  
  // get one user
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.findOne(id);
    console.log(user);
    if (user) {      
      return user;
    }
    else throw new HttpException('User not found', HttpStatus.NOT_FOUND);  
  }

  //delete user
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }

  //TODO: need to implement
  /*
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
  */
}
