import { Box, Button, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Box className=" w-full h-screen px-10 flex justify-center items-center">
            <Box className="flex flex-wrap flex-1 justify-between gap-5">
                <Box className="flex-1 min-w-[300px] h-auto border-2 border-green-300 p-5 rounded-md hover:border-green-500">
                    <Typography>Basic</Typography>
                    <Typography mt={4}>A</Typography>
                    <Typography>B</Typography>
                    <Typography>C</Typography>
                    <Box mt={5}>
                        <Link to="/dashboard">
                            <Button variant="outlined" color="success" className="w-full">
                                Basic
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box className="flex-1 min-w-[300px] h-auto border-2 border-green-300 hover:border-green-500 p-5 rounded-md">
                    <Typography>Advance</Typography>
                    <Tooltip title="Activation time after one month">
                        <Typography mt={4}>D ?</Typography>
                    </Tooltip>
                    <Tooltip title="Activation time after one week">
                        <Typography>E ?</Typography>
                    </Tooltip>
                    <Tooltip title="Activation time after one day">
                        <Typography>F ?</Typography>
                    </Tooltip>

                    <Box mt={5}>
                        <Button
                            variant="outlined"
                            color="secondary"
                            className="w-full pointer-events-none"
                        >
                            Advance
                        </Button>
                    </Box>
                </Box>
                <Box className="flex-1 min-w-[300px] h-auto border border-green-700 p-5 rounded-md opacity-25">
                    <Typography>Pro</Typography>

                    <Typography mt={4}>G</Typography>
                    <Typography>H</Typography>
                    <Typography>I</Typography>

                    <Box mt={5}>
                        <Button disabled variant="outlined" color="error" className="w-full">
                            Pro
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
