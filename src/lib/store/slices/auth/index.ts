/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { IUser } from '@/lib/interfaces/auth';

export interface IAuthState {
    isAuthenticated: boolean;
    token: string;
    user?: IUser;
}

const initialState: IAuthState = {
    isAuthenticated: false,
    token: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (
            state,
            action: {
                type: string;
                payload: IAuthState;
            }
        ) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = '';
            state.user = undefined;
        },
        setUser: (
            state,
            action: {
                type: string;
                payload: IAuthState;
            }
        ) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
    },
});
