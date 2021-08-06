import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    question_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    permission: {
        type: String,
        required: true,
    }, //Viewer, Contrinutor, Editors
    status: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
    }
}, { timestamps: true });