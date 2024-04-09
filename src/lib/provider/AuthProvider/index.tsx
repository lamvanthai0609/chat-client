/* eslint-disable no-param-reassign */
import React from 'react';

import { useNavigate } from 'react-router-dom';

import { axiosClient } from '@/configs/axios';
import { useAuth } from '@/lib/hooks/auth';
import { useLocalStorage } from '@/lib/hooks/common/useLocalStorage';
import { useUser } from '@/lib/hooks/user';

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { isAuthenticated, token, user } = useAuth();
    const { handleUser } = useUser();
    const navigate = useNavigate();
    const { value: tokenValue, setValue: setTokenValue } = useLocalStorage('token', '');
    const { value: userIdValue, setValue: setUserIdValue } = useLocalStorage('userId', '');

    React.useEffect(() => {
        if (token) setTokenValue(token);
        if (user?._id) setUserIdValue(user._id);
        axiosClient.interceptors.request.use(
            (config) => {
                config.headers.Authorization = `Bearer ${tokenValue || token}`;
                return config;
            },
            (error) => Promise.reject(error)
        );
    }, [tokenValue, token, user?._id]);
    React.useEffect(() => {
        if (!isAuthenticated) {
            navigate('/auth/login');
        } else {
            navigate('/');
        }
    }, [isAuthenticated]);
    React.useEffect(() => {
        if (tokenValue && userIdValue) {
            handleUser(userIdValue);
        }
    }, []);
    return <>{children}</>;
};
