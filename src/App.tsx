import React from 'react';

import { AuthProvider } from './lib/provider/AuthProvider';
import { SocketProvider } from './lib/provider/SocketProvider';
import { Routes } from './routers';

export const App: React.FC = () => (
    <AuthProvider>
        <SocketProvider>
            <Routes />
        </SocketProvider>
    </AuthProvider>
);
