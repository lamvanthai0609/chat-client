import React from 'react';

import { AuthProvider } from './lib/provider/AuthProvider';
import { Routes } from './routers';

export const App: React.FC = () => (
    <AuthProvider>
        <Routes />
    </AuthProvider>
);
