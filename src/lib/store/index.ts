import { configureStore } from '@reduxjs/toolkit';
import {
    useDispatch as useAppDispatch,
    useSelector as useAppSelector,
    UseSelector,
} from 'react-redux';

import { reducers } from './slices';

const store = configureStore({
    reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const { dispatch } = store;

const useDispatch = () => useAppDispatch();
const useSelector: UseSelector<RootState> = useAppSelector;

export { store, dispatch, useSelector, useDispatch };
