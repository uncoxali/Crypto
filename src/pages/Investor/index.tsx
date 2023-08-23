import { Box, Divider, Typography } from '@mui/material';
import { InvestorCard } from 'components/InvestorCard';
import { InvestorData } from 'data/investor';
import React from 'react';

export function Investor() {
    return (
        <Box>
            <Typography variant="h4" component="h1">
                Investor
            </Typography>
            <Divider />
            <Box mt={3} className="flex flex-wrap justify-between gap-5">
                {InvestorData.map((item) => (
                    <InvestorCard item={item} key={item.id} />
                ))}
            </Box>
        </Box>
    );
}
