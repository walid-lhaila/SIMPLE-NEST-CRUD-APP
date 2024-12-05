import { Controller, Post, Body, Get, Delete, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/createUsers.dto';
import { Users } from './schema/users.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUsers(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.create(createUsersDto);
  }

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Delete('/:userId')
  async deleteUser(@Param('userId') userId: string){
    await this.usersService.deleteUser(userId);
    return { message: 'User Deleted Succesffully'}
  }

  @Put('/:userId')
  async updateUser(@Param('userId') userId: string, @Body() updateData: Partial<Users>) {
    const updatedUser = await this.usersService.updateUser(userId, updateData);
    return { message: "User Updated Successffuly", updatedUser}
  }
}
