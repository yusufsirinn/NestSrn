import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { GroupModel } from "src/tools/models/group.model";
import { RoleModel } from "src/tools/models/role.model";

export class UserCreateDto {
    @IsNotEmpty()
    @Length(2, 20)
    name: string;
    surname: string;
    image: string;
    password: string;
    @IsEmail()
    email: string;
    birtdate: Date;
}
export class UserUpdate {
    name: string;
    surname: string;
    image: string;
    password: string;
    email: string;
    birtdate: Date;
    roles: RoleModel[];
    groups: GroupModel[];
}

export class UserLogin {
    email: string;
    password: string;
}