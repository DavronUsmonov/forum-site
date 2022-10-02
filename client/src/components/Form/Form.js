import React, { useState } from 'react';
import FileBase from 'react-file-base64';
//import './Form.css';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts.js';

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        selectedFile: ''
    });
    const empty = {
        creator: '',
        title: '',
        message: '',
        selectedFile: ''
    }
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if(postData.creator == "" || postData.title =="" || postData.message =="") alert("Please fill in all text fields.");
        else {
            dispatch(createPost(postData));
            setPostData(empty);
        }
    }

    const fileHandler = (e) => {
        const base64StringLength = e.base64.length - 'data:image/png;base64,'.length;
        const sizeInBytes=Math.ceil(base64StringLength*0.75);
        const sizeInKb = Math.ceil(sizeInBytes/1024);
        if(sizeInKb > 1500 || (e.type != 'image/png' && e.type != 'image/jpeg' && e.type != 'application/pdf')) {
            e.file = null;
            console.log(e);
            if(sizeInKb > 1500) alert("Please attach a file less than 1500KB.");
            else alert("Please attach a .jpg, .png, or .pdf file only");
            setPostData({...postData, selectedFile:''});
        }else {
            setPostData({...postData, selectedFile:e.base64})
        }
    }

    const clearHandler = (e) => {
        e.preventDefault();
        setPostData(empty);
    }

    return (
        <form className="createForm">
            <input type="text" placeholder="Name" value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})} className="shortInput"/>
            <input type="text" placeholder="Title" value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} className="shortInput"/>
            <textarea placeholder="Description" value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} className="descriptionInput"/>
            <FileBase className="fileBtn" type="file" multiple={false} onDone={fileHandler}/>
            <button type="submit" className="btn" onClick={submitHandler}>Submit</button>
            <button type="submit" className="clear" onClick={clearHandler}>Clear</button>
        </form>
    )
}

export default Form;