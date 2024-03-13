import React from 'react';

import { ILogin } from '@/lib/interfaces/auth';
import { useDispatch, useSelector } from '@/lib/store';
import { authSlice } from '@/lib/store/slices/auth';
import { authLogin } from '@/services/auth';

export const useLogin = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const handleLogin = async () => {
        if (!username || !password) {
            return;
        }
        const loginData: ILogin = {
            username,
            password,
        };
        try {
            const response = await authLogin(loginData);
            const { token, ...user } = response;
            dispatch(authSlice.actions.login({ token, user, isAuthenticated: true }));
        } catch (error) {
            console.log(error);
        }
    };

    return {
        username,
        setUsername,
        password,
        setPassword,
        handleLogin,
    };
};

export const useLogout = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(authSlice.actions.logout());
    };

    return {
        handleLogout,
    };
};

export const useAuth = () => {
    const { isAuthenticated, token, user } = useSelector((state) => state.auth);
    return {
        isAuthenticated,
        token,
        user,
    };
};
