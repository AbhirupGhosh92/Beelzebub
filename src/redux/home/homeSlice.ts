import {createSlice} from '@reduxjs/toolkit';
import { UserCredential } from "firebase/auth";
import type { PayloadAction } from "@reduxjs/toolkit";

type HomeState = {
    user : UserCredential | null
}

const initialState : HomeState = {
    user :null
}

const homeSlice = createSlice({
    name: 'home',
   initialState,
    reducers: {
        setUser: (state, action:PayloadAction<UserCredential>) => {
            state.user = action.payload
        },
        signout : (state,action:PayloadAction<null>) => {
            state.user = action.payload
        }
}})

export const {setUser,signout} = homeSlice.actions;
export const homeReducer = homeSlice.reducer