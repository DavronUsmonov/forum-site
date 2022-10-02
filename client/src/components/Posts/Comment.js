import React from 'react';
import moment from 'moment';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/posts.js';

const Comment = ({postId, com}) => {
    const dispatch = useDispatch();

    const deleteHandler = (e) => {
        e.preventDefault();
        dispatch(deleteComment(postId, com._id));
    }

    return (
        <div className="fullComment">
            <div className = "comment">
                <p className="creator">{com.creator} <span className="time">{moment(com.createdAt).fromNow()}</span></p>
                <p>{com.comment}</p>
            </div>
            <FaTrashAlt className="trash" onClick={deleteHandler}/>
        </div>
    )
}

export default Comment;