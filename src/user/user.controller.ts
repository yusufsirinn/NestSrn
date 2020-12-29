import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserCreateDto, UserUpdate } from "src/tools/dtos/user.dto";
import { UserModel } from "src/tools/models/user.model";
import { UserService } from "./user.service";


@Controller('user')
export class UserController {
    constructor(private userService: UserService) {

    };

    @Post()
    async createUser(@Body() body: UserCreateDto): Promise<UserModel> {
        return await this.userService.create(body);
    }

    @Get()
    async getAllUsers(): Promise<UserModel[]> {
        return await this.userService.findAll();
    }
    @Get(':id')
    async getUser(@Param() params): Promise<UserModel> {
        return await this.userService.findOne(params.id);
    }
    @Put(':id')
    async updateUser(
        @Param('id') id: string,
        @Body() userUpdateDto: UserUpdate
    ): Promise<UserModel> {
        return await this.userService.update(id, userUpdateDto);
    }

    @Delete(':id')
    async removeUser(@Param('id') id: string): Promise<UserModel> {
        return await this.userService.delete(id);
    }


}