import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    questions: {
        type: Array,
        required: true,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        required: true,
    },
    permisable_user_ids: {
        type: Array
    },
    photo: String,
}, { timestamps: true });