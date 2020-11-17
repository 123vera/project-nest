import { Controller, Get, Module, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';
//  ---------  Module
//  -------------||
//  Controller -----> Service


// Module 这是 Nest 的模块文件，Nest 用它来组织整个应用程序的结构
// Controller 类似前端的路由，负责处理客户端传入的请求和服务端返回的响应
// provider 就是服务的提供者。

// controller 接收到了一个用户的查询请求，不能直接在 controller 中去查询数据库并返回，
// 而是要将查询请求交给 provider 来处理，

interface UserResponse<T = unknown> {
    code: number;
    data?: T;
    message: string;
  }

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

     // GET /user/users
     @Get('users')
    async findAll(): Promise<UserResponse<User[]>> {
        return {
          code: 200,
          data: await this.userService.findAll(),
          message: 'Success'
        };
      }
    

    // @Get('users')
    // findAll(): string[] {
    //     return ['用户1', '用户2']
    // }

    @Get('users')
    async findAsyncAll():Promise<any>{
        return await ['用户3', '用户4']
    }
}
