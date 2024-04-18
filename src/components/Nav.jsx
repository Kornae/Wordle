import React from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import BoxSystemProps2 from "./Box2";
import PropTypes from 'prop-types';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import PercentIcon from '@mui/icons-material/Percent';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AnimationIcon from '@mui/icons-material/Animation';


export default function Nav(props) {

    function Stat({ description, value }) {
        return (
            <Box sx={{ borderLeft: 3, borderColor: 'divider', px: 2, py: 0.5 }}>
                <Typography level="h3" component="div">
                    {value}
                </Typography>
                <Typography level="title-sm" textColor="text.secondary">
                    {description}
                </Typography>
            </Box>
        );
    }

    Stat.propTypes = {
        description: PropTypes.node,
        value: PropTypes.node,
    };

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const word1 = ['W', 'E', 'A', 'R', 'Y']
    const word2 = ['P', 'I', 'L', 'L', 'S']
    const word3 = ['V', 'A', 'G', 'U', 'E']

    const newGame = () => {
        window.location.reload()
    }

    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container" style={{ padding: '0px 10px' }}>
                <span className="navbar-brand brand ml-auto" id="logo">W<AnimationIcon color="neutral" />RDL</span>

                <span className="navbar-brand brand mr-auto" id="logo">
                    <span style={{ margin: 3 }}>
                        <Button onClick={newGame} variant="soft" color="success">New Game</Button>
                    </span>
                    <span style={{ margin: 3 }}>
                        <Tooltip color="primary" title="Stats" onClick={() => setOpen2(true)}>
                            <IconButton>
                                <LeaderboardOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </span>
                    <span style={{ margin: 3 }}>
                        <Tooltip title="Info" onClick={() => setOpen(true)}>
                            <IconButton>
                                <HelpOutlineIcon color="neutral" />
                            </IconButton>
                        </Tooltip>
                    </span>
                </span>
            </div>

            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    id="modal"
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 4,
                        boxShadow: 'lg',
                    }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h2"
                        textColor="inherit"
                        fontWeight="xl"
                        mb={1}
                    >
                        How To Play
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                        Guess the word in 6 tries.
                        <ul>
                            <li>Each guess must be a valid 5-letter word.</li>
                            <li>The color of the tiles will change to show how close your guess was to the word.</li>
                        </ul>
                    </Typography>
                    <Typography level="title-lg">Examples</Typography>
                    <div id="example">
                        <div id="row-1" className="row">
                            <div id="inner-tile-2" className='correctWord' > <BoxSystemProps2 letter={word1[0]} /></div>
                            <div id="inner-tile-2" className='example-tile' > <BoxSystemProps2 letter={word1[1]} /></div>
                            <div id="inner-tile-2" className='example-tile' > <BoxSystemProps2 letter={word1[2]} /></div>
                            <div id="inner-tile-2" className='example-tile' > <BoxSystemProps2 letter={word1[3]} /></div>
                            <div id="inner-tile-2" className='example-tile' > <BoxSystemProps2 letter={word1[4]} /></div>
                        </div>
                    </div>
                    <Typography sx={{ marginBottom: '20px' }} level="body-md"><strong>W</strong> is in the word and in the correct spot.</Typography>
                    <div id="example">
                        <div id="row-1" className="row">
                            <div id="inner-tile-2" className='example-tile' > <BoxSystemProps2 letter={word2[0]} /></div>
                            <div id="inner-tile-2" className='partialLetters' > <BoxSystemProps2 letter={word2[1]} /></div>
                            <div id="inner-tile-2" className='example-tile' > <BoxSystemProps2 letter={word2[2]} /></div>
                            <div id="inner-tile-2" className='example-tile' > <BoxSystemProps2 letter={word2[3]} /></div>
                            <div id="inner-tile-2" className='example-tile' > <BoxSystemProps2 letter={word2[4]} /></div>

                        </div>
                    </div>
                    <Typography sx={{ marginBottom: '20px' }} level="body-md"><strong>I</strong> is in the word but in the wrong spot.</Typography>
                    <div id="example">
                        <div id="row-1" className="row">
                            <div id="inner-tile-2" className='example-tile' > <BoxSystemProps2 letter={word3[0]} /></div>
                            <div id="inner-tile-2" className='example-tile' > <BoxSystemProps2 letter={word3[1]} /></div>
                            <div id="inner-tile-2" className='example-tile' > <BoxSystemProps2 letter={word3[2]} /></div>
                            <div id="inner-tile-2" className='incorrectWord' > <BoxSystemProps2 letter={word3[3]} /></div>
                            <div id="inner-tile-2" className='example-tile' > <BoxSystemProps2 letter={word3[4]} /></div>
                        </div>
                    </div>
                    <Typography sx={{ marginBottom: '20px' }} level="body-md"><strong>U</strong> is not in the word in any spot.</Typography>
                </Sheet>
            </Modal>

            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open2}
                onClose={() => setOpen2(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    id="modal"
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 6,
                        boxShadow: 'lg',
                    }}
                >
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h1"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                        fontFamily="Montserrat"
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        STATISTICS
                    </Typography>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))',
                                sm: '1fr 1fr',
                            },
                            gap: 3,
                        }}
                    >

                        <Card variant="soft" color="neutral">
                            <CardContent>
                                <Typography fontFamily="Montserrat" level="h2">{props.gp}</Typography>
                                <Typography fontFamily="Montserrat" level="body-sm" sx={{ color: '#818692' }}>🕹️ GAMES PLAYED</Typography>
                            </CardContent>
                        </Card>

                        <Card variant="soft" color="neutral">
                            <CardContent>
                                <Typography fontFamily="Montserrat" level="h2">{props.gw}</Typography>
                                <Typography fontFamily="Montserrat" level="body-sm" sx={{ color: '#818692' }}>🏆 GAMES WON</Typography>
                            </CardContent>
                        </Card>

                        <Card variant="soft" color="neutral">
                            <CardContent>
                                <Typography fontFamily="Montserrat" level="h2">{props.cs}</Typography>
                                <Typography fontFamily="Montserrat" level="body-sm" sx={{ color: '#818692' }}>🔥 WIN STREAK</Typography>
                            </CardContent>
                        </Card>
                        <Card variant="soft" color="neutral">
                            <CardContent>
                                <Typography fontFamily="Montserrat" level="h2">{props.wp}<PercentIcon /></Typography>
                                <Typography fontFamily="Montserrat" level="body-sm" sx={{ color: '#818692' }}>📈 WIN PERCENTAGE</Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button sx={{ fontFamily: "Montserrat" }} onClick={props.reset} variant="outlined" color="danger">Reset Stats</Button>
                    </div>
                </Sheet>
            </Modal>
        </nav>
    )
}
