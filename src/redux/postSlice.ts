import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { IPost } from './types'
import {RootState} from '.';
import { graphQLClient } from '../graphqlClient/index'
import { addPost, updatePost } from '../graphqlClient/mutations'
import { getUserPosts } from '../graphqlClient/queries'

type PostState = {
  status: "loading" | "idle";    
  error: string | null;
  posts: IPost[];
};

const initialState = {
  posts: [],
  error: null,
  status: "idle",
} as PostState;

export const addPostAction = createAsyncThunk(
  "posts/add", 
  async (payload: any) => {
    const data = graphQLClient.request(addPost, payload)
    return data;
  }
);

export const updatePostAction = createAsyncThunk(
  "posts/update", 
  async (payload: any) => {
    const data = graphQLClient.request(updatePost, payload)
    return data;
  }
);

export const getUserPostsAction = createAsyncThunk(
  "posts/fetch", 
  async () => {
    const data = graphQLClient.request(getUserPosts)
    return data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPostAction.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(addPostAction.fulfilled, (state, { payload }) => {
      state.posts.push(payload.createPost)
      state.status = "idle";
      state.error = null;
    });
    builder.addCase(addPostAction.rejected, (state, { payload }) => {
      state.error = "error adding post";
      state.status = "idle";
    });
    builder.addCase(updatePostAction.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(updatePostAction.fulfilled, (state, { payload }) => {
      const posts = state.posts.slice()
      state.posts = posts.map((p) => {
        if (p.id === payload.updatePost.id) {
          p.title = payload.updatePost.id
        }
        return p
      })
      state.status = "idle";
      state.error = null;
    });
    builder.addCase(updatePostAction.rejected, (state, { payload }) => {
      state.error = "error updating post";
      state.status = "idle";
    });
    builder.addCase(getUserPostsAction.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(getUserPostsAction.fulfilled, (state, { payload }) => {
      state.posts = payload.posts
      state.status = "idle";
      state.error = null;
    });
    builder.addCase(getUserPostsAction.rejected, (state, { payload }) => {
      state.error = "error updating post";
      state.status = "idle";
    });
  }
});

export const postSelector = (state: RootState) => state.posts

export default postsSlice.reducer