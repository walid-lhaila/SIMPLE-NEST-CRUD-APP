import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './schema/users.schema';
import { CreateUsersDto } from './dto/createUsers.dto';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private UserModel: Model<UsersDocument>){}

  async create(createUsersDto: CreateUsersDto): Promise<Users> {
    const createUser = new this.UserModel(createUsersDto);
    return createUser.save();
  }

  async getAllUsers(): Promise<Users[]> {
    const users = this.UserModel.find();
    return users;
  }

  async deleteUser(userId: string): Promise<any> {
    const deleteUser = this.UserModel.findByIdAndDelete({ _id: userId });
    return deleteUser;
  }

  async updateUser(userId: string, updateData: Partial<Users>): Promise<Users>{
    const updatedUser = this.UserModel.findByIdAndUpdate(userId, updateData,{ new: true });
    if (!updatedUser) {
      throw new Error('User not found');
    }
    return updatedUser;
  }
}
