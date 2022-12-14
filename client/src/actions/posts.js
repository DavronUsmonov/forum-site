import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data});
    }catch(error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({type:'CREATE', payload: data});
    }catch(error) {
        console.log(error);
    }
}

export const createComment = (id, com) => async (dispatch) => {
    try {
        const { data } = await api.createComment(id, com);
        dispatch({type:'UPDATE', payload: data});
    }catch(error) {
        console.log(error);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type:'DELETE', payload: id});
    }catch(error) {
        console.log(error);
    }
}

export const deleteComment = (postId, comId) => async(dispatch) => {
    try {
        const { data } = await api.deleteComment(postId,comId);
        dispatch({type:'UPDATE', payload: data});
    }catch(error) {
        console.log(error);
    }
}