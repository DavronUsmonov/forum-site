import React from 'react';
import Post from './Post.js';
import { useSelector } from 'react-redux';

//import './Posts.css';
 
const PostList = () => {
    const posts = useSelector((state) => state.posts);
    return (
        <div className="postList">
            {posts.map((post) => (
                <Post post={post} key={post._id}/>
            ))}
        </div>
    )
}

export default PostList;