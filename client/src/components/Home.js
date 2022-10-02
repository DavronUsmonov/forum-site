import React from 'react';
import Form from './Form/Form.js';
import PostList from './Posts/PostList.js';

const Home = () => {
    return (
        <div className = "home">
            <Form />
            <PostList />
        </div>
    )
}

export default Home;