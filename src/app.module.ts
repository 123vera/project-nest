import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './server/user/user.module';
import { NewsModule } from './server/news/news.module';

// 1.控制台启动服务流程：iTerm  
// cd /usr/local
// cd /usr/local/mongodb/bin
// ./mongo

// 2.MongoDB Compass 输入本地数据库地址  mongodb://localhost

// ---------以上---------



//mongodb://localhost/xxx 设置的本地数据库的地址， xxx 是数据库的名字。
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/user'),UserModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
