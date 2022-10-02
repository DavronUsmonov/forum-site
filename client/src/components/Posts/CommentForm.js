import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../actions/posts.js';

const CommentForm = ({post}) => {
    const [commentData, setCommentData] = useState({
        creator:'',
        comment:''
    });

    const empty = {
        creator:'',
        comment:''
    }
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if(commentData.creator == "" || commentData.comment =="") alert("Please fill in all text fields.");
        else {
            dispatch(createComment(post._id, commentData));
            setCommentData(empty);
        }
    }

    const clearHandler = (e) => {
        e.preventDefault();
        setCommentData(empty);
    }


    return(
        <form id="commentForm" className="createForm">
            <input type="text" placeholder="Name" value={commentData.creator} className="shortInput" onChange={(e) => setCommentData({...commentData,creator: e.target.value})}/>
            <textarea placeholder="Comment" value={commentData.comment} className="descriptionInput" onChange={(e) => setCommentData({...commentData,comment: e.target.value})}/>
            <button type="submit" className="btn" onClick={submitHandler}>Submit</button>
            <button type="submit" className="clear" onClick={clearHandler}>Clear</button>
        </form>
    )
}

export default CommentForm;