import { useAppSelector } from 'hook/hooks';
import Layout from 'Layout';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isLogin } from 'store/reducers/slice';

function PrivateRoutes() {
    const loggedIn = useAppSelector(isLogin);
    console.log('🚀 ~ file: PrivatRouter.tsx:9 ~ PrivateRoutes ~ loggedIn', loggedIn);
    return <Layout>{loggedIn ? <Outlet /> : <Navigate to="/login" />}</Layout>;
}
function LoggedIn() {
    const loggedIn = useAppSelector(isLogin);

    console.log('🚀 ~ file: PrivatRouter.tsx:16 ~ LoggedIn ~ loggedIn', loggedIn);
    return loggedIn ? <Navigate to="/" /> : <Outlet />;
}

export { LoggedIn, PrivateRoutes };
