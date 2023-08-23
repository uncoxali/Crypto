import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

type DataType = {
    id: number;
    name: string;
    total_return: number;
    active_days: number;
    performance_fee: number;
    min_investment: number;
    avatar: string;
};

interface Props {
    item: DataType;
}

export function TraderCard({ item }: Props) {
    return (
        <Box className="flex-1 h-[50%] shadow p-5 rounded-md">
            <Box className="flex justify-center">
                <img className="w-20 h-20 -mt-10" src={item.avatar} alt="" />
            </Box>
            <Typography className="text-center">{item.name}</Typography>
            <Box className="w-full h-20 text-center text-slate-300 mt-3">No Data chart</Box>
            <Box className="flex justify-between w-full">
                <Box className="flex flex-col gap-y-1">
                    <Typography fontSize={13} fontWeight={400}>
                        Total Return
                    </Typography>
                    <Typography fontSize={13} fontWeight={300}>
                        Active Days
                    </Typography>
                    <Typography fontSize={13} fontWeight={300}>
                        Performance Fee
                    </Typography>
                    <Typography fontSize={13} fontWeight={300}>
                        Min. Investment
                    </Typography>
                </Box>
                <Box className="flex flex-col gap-y-1">
                    <Typography fontSize={13}>{item.total_return}</Typography>
                    <Typography fontSize={13}>{item.active_days}</Typography>
                    <Typography fontSize={13}>{item.performance_fee}%</Typography>
                    <Typography fontSize={13}>{item.min_investment} USDT</Typography>
                </Box>
            </Box>
        </Box>
    );
}
