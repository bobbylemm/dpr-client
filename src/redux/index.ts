import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './postSlice'
import authReducer from './authSlice'

const store = configureStore({
    reducer: {
        posts: postsReducer,
        auth: authReducer
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<any>;

export default store;