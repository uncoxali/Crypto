import { Box, Button } from '@mui/material';
import { useAppDispatch } from 'hook/hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from 'store/reducers/slice';

export default function Login() {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const handleLogin = () => {
        dispatch(login('login'));
        navigate('/');
        toast.warning('successfly');
    };
    return (
        <Box className="flex flex-1 justify-center items-center h-screen">
            <Button onClick={handleLogin}>Login</Button>
        </Box>
    );
}
