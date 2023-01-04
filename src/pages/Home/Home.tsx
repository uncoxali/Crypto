import { Box, Button } from '@mui/material';
import { useAppDispatch } from 'hook/hooks';
import React from 'react';
import { logout } from 'store/reducers/slice';

export default function Home() {
    const dispatch = useAppDispatch();
    return (
        <Box className="bg-lime-500 flex flex-1 justify-center items-center h-screen">
            <Button
                sx={{ backgroundColor: 'white', textTransform: 'none' }}
                onClick={() => dispatch(logout(false))}
            >
                Logout
            </Button>
        </Box>
    );
}
