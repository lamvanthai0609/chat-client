import { combineReducers } from '@reduxjs/toolkit';

import { authSlice } from './auth';
import { userOnlineSlice } from './userOnline';

export interface IRootState {
    auth: ReturnType<typeof authSlice.reducer>;
    userOnline: ReturnType<typeof userOnlineSlice.reducer>;
}

export const reducers = combineReducers({
    auth: authSlice.reducer,
    userOnline: userOnlineSlice.reducer,
});
