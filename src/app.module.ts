import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import e from 'tools/environment/environment';

@Module({
  imports: [UserModule, MongooseModule.forRoot(e.mongoUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
