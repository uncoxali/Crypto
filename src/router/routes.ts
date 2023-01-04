import { Login, Register } from 'pages/Auth';
import { Home } from 'pages/Home';
import { FC } from 'react';

interface Type {
    element: FC;
    path: string;
}

export const routes: Type[] = [
    {
        element: Home,
        path: '/',
    },
];

export const auth_routes: Type[] = [
    {
        element: Login,
        path: '/login',
    },
    {
        element: Register,
        path: '/register',
    },
];
