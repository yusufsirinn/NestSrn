import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserLogin } from 'src/tools/dtos/user.dto';
import { IUser } from 'src/user/user.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LoginService {
    constructor(
        @InjectModel('User') private readonly userMongo: Model<IUser>,
        private userService: UserService
    ) {

    };

    async userLogin(user: UserLogin): Promise<any> {
        try {
            const existUser = await this.userMongo.findOne({
                email: user.email
            }).exec();

            if (existUser) {
                let checkPwd;
                await this.userService.compareHashes(user.password, existUser.password).then(
                    resp => {
                        if (resp) {
                            checkPwd = true;
                        } else {
                            checkPwd = false;
                        }
                    }

                )
                if (checkPwd) {
                    return { success: true, value: existUser }
                } else {
                    return { success: false, response: '* user password is incorrent!' }
                }
            } else {
                return { success: false, response: '* user does not exist!' }
            }
        }
        catch (e) {
            return { success: false, response: 'something wrong while login prosess!' }
        }
    }

}
