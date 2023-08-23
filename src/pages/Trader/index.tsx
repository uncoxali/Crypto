import { Box, Divider, Typography } from '@mui/material';
import { TraderCard } from 'components/TraderCard';
import { traderData } from 'data/trader';
import React from 'react';

export function Trader() {
    return (
        <Box>
            <Typography variant="h4" component="h1">
                Trader
            </Typography>
            <Divider />
            <Box mt={3} className="flex flex-wrap justify-between gap-5">
                {traderData.map((item, idx) => (
                    <TraderCard item={item} key={item.id} />
                ))}
            </Box>
        </Box>
    );
}
