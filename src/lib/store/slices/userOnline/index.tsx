/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserOnlineState {
    users?: {
        _id: string;
        userId: {
            _id: string;
            name: string;
            image: string;
        };
        socketId: string;
        status: 0;
    }[];
}

const initialState: IUserOnlineState = {
    users: [],
};

export const userOnlineSlice = createSlice({
    name: 'userOnline',
    initialState,
    reducers: {
        setUsersOnline: (state, action: PayloadAction<IUserOnlineState>) => {
            state.users = action.payload.users;
        },
    },
});
