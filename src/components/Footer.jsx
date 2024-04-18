import * as React from 'react';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import Sheet from '@mui/joy/Sheet';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function ColorInversionFooter() {

    let Instagram = () => {
        window.location = 'https://www.instagram.com/2kmer/?hl=en'
    }

    let Twitter = () => {
        window.location = 'https://twitter.com/2kmer_?lang=en'
    }

    let GitHub = () => {
        window.location = 'https://github.com/Kornae'
    }

    let FavIcon = () => {
        window.location = 'https://www.flaticon.com/free-icons/letter-w'
    }

    return (
        <Sheet
            variant="solid"
            sx={{
                bgcolor: `transparent;`,
                flexGrow: 1,
                p: 2,
                height: '100%',
                marginTop: 2
            }}
        >
            <Divider sx={{ my: 2 }} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ margin: 0 }}>
                    <Tooltip color="neutral" title="Instagram" onClick={Instagram}>
                        <IconButton>
                            <InstagramIcon fontSize='small' />
                        </IconButton>
                    </Tooltip>
                </span>
                <span style={{ margin: 0 }}>
                    <Tooltip color="neutral" title="X" onClick={Twitter}>
                        <IconButton>
                            <XIcon fontSize='small' />
                        </IconButton>
                    </Tooltip>
                </span>
                <span style={{ margin: 0 }}>
                    <Tooltip color="neutral" title="GitHub" onClick={GitHub}>
                        <IconButton>
                            <GitHubIcon fontSize='small' />
                        </IconButton>
                    </Tooltip>
                </span>
                <span style={{ margin: 0 }}>
                    <Tooltip color="neutral" title="Letter w icons created by Md Tanvirul Haque - Flaticon" onClick={FavIcon}>
                        <IconButton>
                            <InfoOutlinedIcon fontSize='small' />
                        </IconButton>
                    </Tooltip>
                </span>
            </div>


            <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { md: 'flex-start' },
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 2,
                    }}

                >
                    <List
                        size="sm"
                        orientation="horizontal"
                        wrap
                        sx={{ flexGrow: 0, '--ListItem-radius': '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
                            <ListSubheader sx={{ fontFamily: 'Montserrat', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>©2024 WORDL</ListSubheader>
                        </ListItem>
                    </List>

                </Box>
            </div>
        </Sheet>
    );
}