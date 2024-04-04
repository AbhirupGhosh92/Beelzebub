import {createSlice} from '@reduxjs/toolkit';
const homeSlice = createSlice({
    name: 'home',
    initialState: {
        user: {}
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
}})

export const {setUser} = homeSlice.actions;
export const homeReducer = homeSlice.reducer