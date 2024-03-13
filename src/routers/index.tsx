import { RouteObject } from 'react-router';
import { useRoutes } from 'react-router-dom';

import { Login } from '@/pages/Auth/Login';
import { Signup } from '@/pages/Auth/Signup';
import { Home } from '@/pages/Home';
import { Maintenance404 } from '@/pages/Maintenance/404';

const routers: RouteObject = {
    path: '/',
    children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: 'auth',
            children: [
                {
                    path: 'login',
                    element: <Login />,
                },
                {
                    path: 'register',
                    element: <Signup />,
                },
            ],
        },
        {
            path: '*',
            element: <Maintenance404 />,
        },
    ],
};
export const Routes: React.FC = () => useRoutes([routers]);
