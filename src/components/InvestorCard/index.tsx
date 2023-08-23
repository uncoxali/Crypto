import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

type DataType = {
    id: number;
    name: string;
    active_days: number;
    exchange_type: string;
    exchange: string;
    balance: number;
    avatar: string;
};

interface Props {
    item: DataType;
}

export function InvestorCard({ item }: Props) {
    return (
        <Box className="flex-1 h-[50%] shadow p-5 rounded-md">
            <Box className="flex w-full justify-between">
                <Typography>{item.exchange}</Typography>
                <Typography>{item.exchange_type}</Typography>
            </Box>
            <Box className="flex justify-center m-2">
                <Box className="w-20 h-20 rounded-full">
                    <img src={item.avatar} className="w-20 h-20" alt="" />
                </Box>
            </Box>
            <Typography className="text-center">{item.name}</Typography>
            <Box className="flex justify-between w-full">
                <Box className="flex flex-col gap-y-1">
                    <Typography fontSize={13} fontWeight={400}>
                        Balance
                    </Typography>
                    <Typography fontSize={13} fontWeight={300}>
                        Active Days
                    </Typography>
                </Box>
                <Box className="flex flex-col gap-y-1">
                    <Typography fontSize={13}>{item.balance} USDT</Typography>
                    <Typography fontSize={13}>{item.active_days}</Typography>
                </Box>
            </Box>
        </Box>
    );
}
