import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema(
    {
        name: String,
        surname: { type: String, required: [true, 'user name is required'] },
        email: String,
        password: String,
        birtDay: Date,
        audit: Object,
        roles: Array,
        groups: Array,
    }
);