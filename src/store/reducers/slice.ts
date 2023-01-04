import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface CounterState {
    value: number;
    state: any;
    user: any;
    loggedIn: boolean;
}

const initialState: CounterState = {
    value: 0,
    state: [],
    user: {},
    loggedIn: !!localStorage.getItem('token'),
};
const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUsersSlice: (state, action): void => {
            state.state = action.payload;
        },
        addUser: (state, action) => {
            state.user = action.payload;
        },
        login: (state, action) => {
            localStorage.setItem('token', JSON.stringify(action.payload));
            state.loggedIn = action.payload;
        },
        logout: (state, action) => {
            localStorage.removeItem('token');
            state.loggedIn = false;
        },
    },
});

export const { getUsersSlice, addUser, login, logout } = slice.actions;

export const getList = (state: any) => state.user.state;
export const getUser = (state: any) => state.user.user;
export const isLogin = (state: RootState) => state.user.loggedIn;

export default slice.reducer;
