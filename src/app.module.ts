import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';
import e from 'src/tools/environment/environment';
import { TokenMiddleware } from './middleware/token.middleware';

@Module({
  imports: [UserModule, MongooseModule.forRoot(e.mongoUrl), LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
