import 'assets/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'router/routes';

function App() {
    const routers = useRoutes(routes);
    return <>{routers}</>;
}

export default React.memo(App);
