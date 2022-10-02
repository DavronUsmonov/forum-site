import axios from 'axios';

const url = "https://firstfe-project.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const createComment = (id , com) => axios.patch(`${url}/${id}`, com);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const deleteComment = (postId,comId) => axios.delete(`${url}/${postId}/${comId}`);