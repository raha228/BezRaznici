import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {postThunk, removeComments} from "../store/postsSlice";

const PostPage = () => {
    const dispatch= useDispatch()
    const id= useParams()
    const {post, error, loading}=useSelector(state => state.posts)

    useEffect(() => {
        dispatch(postThunk(id))
        console.log(post)
    }, []);

    if(error){
        return <p>Произошла ошибка: {error}</p>
    }

    const handleSubmit=() =>{
        dispatch(removeComments())
    }
    return (
        <>
            {
                loading===false ?
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button onClick={handleSubmit}>Delete</button>
                    </div>
                    :
                    <h2>Загрузка...</h2>
            }
        </>
    );
};

export default PostPage;