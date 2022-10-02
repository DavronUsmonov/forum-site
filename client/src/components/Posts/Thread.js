import React from 'react';
import { useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Comment from './Comment.js';
import CommentForm from './CommentForm.js';
import moment from 'moment';
import AttachedFile from './AttachedFile.js';

const Thread = () => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    const userId = useParams().userId;
    const post = posts.find(e => e._id == userId);
    return (
        <div className="thread">
            <div className="comment">
                <h2>{post?.title || "This post does not exist"}</h2>
                <p className="creator">{post?.creator || "DNE"}<span className="time"> {moment(post?.createdAt).fromNow()}</span></p>
                <p>{post?.message || "DNE"}</p>
                {post ? <AttachedFile attachedFile={post?.selectedFile}/> : <div></div>}
            </div>
            <div className = "comments">
                {post?.comments.map((com) => (
                    <Comment postId={post._id} com={com} key={com + Math.random()}/>
                )) || ""}
            </div>
            <CommentForm post={post}/>
        </div>
    )
    }

export default Thread;