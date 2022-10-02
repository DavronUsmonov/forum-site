import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/posts.js';

const Post = ({post}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clickHandler = (e) => {
        e.preventDefault();
        navigate('/' + post._id);
    }

    const deleteHandler = (e) => {
        e.preventDefault();
        dispatch(deletePost(post._id));
    }

    return (
        <div className="fullPost">
            <div className="post" onClick={clickHandler} >
                <h2>{post.title}</h2>
                <p>posted {moment(post.createdAt).fromNow()} by {post.creator}</p>
            </div>
            <FaTrashAlt className="trash" onClick={deleteHandler}/>
        </div>
    )
}

export default Post;