import * as React from 'react';
import Alert from '@mui/joy/Alert';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

export default function AlertColors2(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            <Stack spacing={1} sx={{ width: 'auto', maxWidth: 400 }}>
                <Alert

                    sx={{ alignItems: 'flex-start' }}
                    variant="soft"
                >
                    <div>
                        <div>
                          
                            <Typography level="title-md">
                                {props.target}
                            </Typography>
                        </div>
                    </div>
                </Alert>
            </Stack>
        </Box>
    );
}