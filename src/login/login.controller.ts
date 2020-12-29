import { Body, Controller, Post } from '@nestjs/common';
import { UserLogin } from 'src/tools/dtos/user.dto';
import { UserModel } from 'src/tools/models/user.model';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private loginService: LoginService) {

    };

    @Post()
    async userLogin(@Body() body: UserLogin): Promise<UserModel> {
        return await this.loginService.userLogin(body);
    }

}
