import mongoose from 'mongoose';
import {PostMessage, CommentMessage} from '../models/postMessage.js';



export const getPosts = async (req,res) =>  {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    }catch(error) {
        res.status(404).json( {message: error.message });
    }
}

export const createPost = async (req,res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error) {
         res.status(409).json({message: error.message});
    }
}

export const updatePost = async(req,res) => {
    const { id: _id } = req.params;
    console.log(req.body);
    const newComment = new CommentMessage(req.body);
    try{
        await newComment.save();
    }catch(error) {
        res.status(409).json({message: error.message});
    }
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with this id");
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {$push: {comments: newComment}}, {new: true});
    res.json(updatedPost);
}   

export const deletePost = async(req,res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with this id");
    const post = await PostMessage.findById(id);
    await CommentMessage.deleteMany({_id: {$in: post.comments}});
    await PostMessage.findByIdAndDelete(id);
    res.json({message:"Post deleted"});
}

export const deleteComment = async(req,res) => {
    const postId  = req.params.postId;
    const comId  = req.params.comId;
    if(!mongoose.Types.ObjectId.isValid(postId)) return res.status(404).send("No post with this id");
    if(!mongoose.Types.ObjectId.isValid(comId)) return res.status(404).send("No comment with this id");
    const com = await CommentMessage.findById(comId);
    const updatedPost = await PostMessage.findByIdAndUpdate(postId, {$pull: {comments: com}}, {new: true});
    await CommentMessage.findByIdAndDelete(comId);
    res.json(updatedPost);
    
}

