import { combineReducers } from '@reduxjs/toolkit';

import { authSlice } from './auth';

export interface IRootState {
    auth: ReturnType<typeof authSlice.reducer>;
}

export const reducers = combineReducers({
    auth: authSlice.reducer,
});
