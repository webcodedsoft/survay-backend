import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    password: String,
    email: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    photo: String,
}, { timestamps: true });