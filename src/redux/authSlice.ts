import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from '.';
import { graphQLClient } from '../graphqlClient/index'
import { authLogin, authRegister, authLogut } from '../graphqlClient/mutations'
import { getLoggedInUser } from '../graphqlClient/queries'

type User = { email: string, name: string }

type AuthState = {
    status: "loading" | "idle";
    error: string | null;
    isLoggedIn: boolean;
    user: User;
};

const initialState = {
    user: { email: "", name: "" },
    error: null,
    isLoggedIn: true,
    status: "idle",
} as AuthState;

export const registerAction = createAsyncThunk(
    "auth/register",
    async (payload: any) => {
        const data = graphQLClient.request(authRegister, payload)
        return data;
    }
);

export const loginAction = createAsyncThunk(
    "auth/login",
    async (payload: any) => {
        try {
            const data = graphQLClient.request(authLogin, payload)
            return data;
        }catch(error) {
            console.log(error, 'err')
        }
    }
);

export const isLoggedIn = createAsyncThunk(
    "auth/me",
    async () => {
        const data = graphQLClient.request(getLoggedInUser)
        return data;
    }
);

export const logOut = createAsyncThunk(
    "auth/logout",
    async () => {
        const data = graphQLClient.request(authLogut)
        return data;
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerAction.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(registerAction.fulfilled, (state, { payload }) => {
            state.user = payload
            state.status = "idle";
            state.error = null;
        });
        builder.addCase(registerAction.rejected, (state, { payload }) => {
            state.error = "error during registration";
            state.status = "idle";
        });
        builder.addCase(loginAction.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(loginAction.fulfilled, (state, { payload }) => {
            state.user = payload
            state.status = "idle";
            state.error = null;
        });
        builder.addCase(loginAction.rejected, (state, { payload }) => {
            state.error = "error during login";
            state.status = "idle";
        });
        builder.addCase(isLoggedIn.fulfilled, (state, { payload }) => {
            state.isLoggedIn = true
            state.error = null;
        });
        builder.addCase(isLoggedIn.rejected, (state) => {
            state.error = "You need to login";
            state.isLoggedIn = false
        });
        builder.addCase(logOut.fulfilled, (state) => {
            state.user = { email: "", name: "" }
            state.error = null;
        });
    }
});

export const authSelector = (state: RootState) => state.auth

export default authSlice.reducer