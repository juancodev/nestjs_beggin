import { Controller, Get, Post, Body } from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {UsersService} from './users.service';
import { CreateUserDto } from './dto/create_user.dto';

@Controller('/users')
export class UsersController {

  constructor(private usersService: UsersService) { };

  @ApiTags('users')
  @Get()
  getAllUsers(){
    return this.usersService.getUsers();
  }

  @ApiTags('users')
  @Post()
  createUser(@Body() user: CreateUserDto){
    return this.usersService.createUser(user)
  }
}
