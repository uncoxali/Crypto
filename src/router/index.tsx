import { Login } from 'pages/Auth';
import { Home } from 'pages/Home';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoggedIn, PrivateRoutes } from './PrivatRouter';
import { auth_routes, routes } from './routes';

export default function Router() {
    let key = 1;
    return (
        <Routes>
            <Route element={<PrivateRoutes />}>
                {routes.map((route) => {
                    key++;
                    const Element = route.element as FC;
                    return <Route key={key.toString()} {...route} element={<Element />} />;
                })}
                <Route path="/*" element={<Home />} />
            </Route>
            <Route element={<LoggedIn />}>
                {auth_routes.map((route) => {
                    key++;
                    const Element = route.element as FC;
                    return <Route key={key.toString()} {...route} element={<Element />} />;
                })}
                <Route path="/*" element={<Login />} />
            </Route>
        </Routes>
    );
}
