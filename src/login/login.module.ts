import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/user.schema';
import { UserService } from 'src/user/user.service';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [LoginController],
  providers: [LoginService, UserService]
})
export class LoginModule { }
