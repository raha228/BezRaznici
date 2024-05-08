import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getPostsThunk= createAsyncThunk(
    'post/getPostsThunk',
    async () =>{
        const response= await axios.get('https://dummyjson.com/posts?limit=25')
        return response.data.posts
    }
)

export const postThunk= createAsyncThunk(
    'post/postThunk',
    async ({id})=>{
        const response= await axios.get(`https://dummyjson.com/posts/${id}`)
        return response.data
    }
)

const state={
    posts:[],
    post:[],
    loading:false,
    error:null
}

const postsSlice= createSlice(
    {
        name:'post',
        initialState:state,
        reducers:{
            removeComments: (state, action) =>{
                state.post.body=''
            }
        },
        extraReducers:(builder)=>{
            builder
                .addCase(getPostsThunk.fulfilled, (state,action) =>{
                    state.error=null
                    state.loading=false
                    state.posts=action.payload
                })
                .addCase(getPostsThunk.pending, (state)=>{
                    state.error=null
                    state.loading=true
                })
                .addCase(getPostsThunk.rejected, (state, action)=>{
                    state.error=action.error.message
                })
                .addCase(postThunk.fulfilled, (state, action)=>{
                    state.loading=false
                    state.post=action.payload
                })
                .addCase(postThunk.pending, (state)=>{
                    state.error=null
                    state.loading=true
                })
                .addCase(postThunk.rejected, (state, action)=>{
                    state.error='Такого поста не существует'
                })
        }
    }
)
export const postsReducer= postsSlice.reducer
export const {removeComments}= postsSlice.actions