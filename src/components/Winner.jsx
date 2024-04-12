import * as React from 'react';
import Alert from '@mui/joy/Alert';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Button } from '@mui/joy';

export default function AlertColors() {

    function newGame() {
        window.location.reload();
    }
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

                <Alert color="neutral" variant="soft" >
                    <EmojiEventsIcon /> Winner!
                    <Button variant='soft' onClick={newGame}>New Game</Button>
                </Alert>
            </Stack>
        </Box>
    );
}