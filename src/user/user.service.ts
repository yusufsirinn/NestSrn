import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UserCreateDto, UserUpdate } from "src/tools/dtos/user.dto";
import { UserModel } from "src/tools/models/user.model";
import { IUser } from "./user.interface";
import { AuditModel } from "src/tools/models/audit.model";


const result: UserModel[] = [];

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userMongo: Model<IUser>,
    ) {

    }

    async create(user: UserCreateDto): Promise<UserModel> {
        const audit = new AuditModel();
        audit.active = true;
        audit.createdBy = "Admin";
        audit.createdDate = new Date();
        const createUser = new this.userMongo({ ...user, ...audit });
        return await createUser.save();
    }

    async findAll(): Promise<UserModel[]> {
        return await this.userMongo.find().exec();

    }
    async findOne(id: string): Promise<UserModel> {
        return await this.userMongo.findOne({ _id: id }).exec();

    }
    async delete(id: string): Promise<UserModel> {
        return await this.userMongo.findByIdAndRemove({ _id: id });
    }

    async update(id: string, user: UserUpdate): Promise<UserModel> {
        let newModel = this.userMongo.findOne({ _id: id }).exec();
        newModel = { ...newModel, ...user };
        return await this.userMongo.findByIdAndUpdate(id, newModel, { new: true }).exec();
    }
}