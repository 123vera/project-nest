import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel('Users') 
    private readonly userModel: Model<User>) {}

 // 查找所有用户
 async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }
}
