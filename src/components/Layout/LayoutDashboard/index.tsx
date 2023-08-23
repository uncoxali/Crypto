import { Box } from '@mui/material';
import TemporaryDrawer from 'components/Layout/LayoutDashboard/Drawer';
import { Outlet } from 'react-router-dom';

export default function LayoutDashboard() {
    return (
        <Box>
            <TemporaryDrawer />
            <Box m={5}>
                <Outlet />
            </Box>
        </Box>
    );
}
