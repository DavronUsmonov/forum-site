import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
    creator: String,
    comment: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    comments: [commentSchema]

});

export const PostMessage = mongoose.model('PostMessage', postSchema);
export const CommentMessage = mongoose.model('CommentMessage', commentSchema);

