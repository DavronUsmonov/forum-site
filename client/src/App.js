import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter, Routes, Route} from 'react-router-dom';
import { Navigate} from 'react-router-dom';
import { getPosts } from './actions/posts.js';
import Thread from './components/Posts/Thread';
import Home from './components/Home.js';
import './App.css';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        /*<div className="app">
            <Form />
            <PostList />
        </div> */
        <div className="app">
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/:userId' element={<Thread/>} />
                <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
        </HashRouter>
        </div>
    )

}

export default App;