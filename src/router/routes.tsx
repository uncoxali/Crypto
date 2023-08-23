import LayoutDashboard from 'components/Layout/LayoutDashboard';
import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import { Investor } from 'pages/Investor';
import { Trader } from 'pages/Trader';
import { Navigate } from 'react-router-dom';

const routes = [
    { path: '/', element: <Home /> },
    {
        path: 'dashboard',
        element: <LayoutDashboard />,
        children: [
            { path: '', element: <Navigate to="app" replace /> },
            { path: 'app', element: <Dashboard /> },
            { path: 'trader', element: <Trader /> },
            { path: 'investor', element: <Investor /> },
        ],
    },
];

export default routes;
