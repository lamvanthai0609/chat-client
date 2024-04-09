import React from 'react';

import io from 'socket.io-client';

import { useAuth } from '@/lib/hooks/auth';
import { useDispatch } from '@/lib/store';
import { userOnlineSlice } from '@/lib/store/slices/userOnline';

export const SocketContext = React.createContext({});

export const SocketProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { user, isAuthenticated } = useAuth();
    const dispatch = useDispatch();
    const socket = React.useMemo(() => io(import.meta.env.VITE_API_SOCKET), []);
    socket.connect();
    React.useEffect(() => {
        if (isAuthenticated) {
            socket.connect();
            socket.once('connect', () => {
                socket.emit('onConnected', { userId: user?._id });
            });
            socket.on('usersOnline', (userOnline) => {
                dispatch(userOnlineSlice.actions.setUsersOnline({ users: userOnline }));
            });
        }
        return () => {
            socket.disconnect();
            socket.off('usersOnline', (userOnline) => {
                dispatch(userOnlineSlice.actions.setUsersOnline({ users: userOnline }));
            });
            socket.close();
        };
    }, [isAuthenticated, user?._id]);
    return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
