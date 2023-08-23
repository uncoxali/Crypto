import { Box, Button, Tooltip } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Box className="bg-slate-300 w-full h-screen">
            <Box className="flex justify-center items-center h-screen gap-5">
                <Link to="/dashboard">
                    <Button variant="outlined" color="success">
                        Basic
                    </Button>
                </Link>
                <Tooltip title="Activation time after one month">
                    <Button variant="outlined" color="secondary">
                        Advance
                    </Button>
                </Tooltip>
                <Button disabled variant="outlined" color="error">
                    Pro
                </Button>
            </Box>
        </Box>
    );
}
