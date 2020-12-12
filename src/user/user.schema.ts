import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema(
    {
        name: String,
        surname: String,
        email: String,
        password: String,
        birtDay: Date,
        audit: Object,
        roles: Array,
        groups: Array,
    }
);