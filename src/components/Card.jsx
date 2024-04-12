import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

export default function BioCard(props) {
    const restartGame = () => {
        window.location.reload()
    }
    return (
        <Card
            sx={{
                width: 320,
                maxWidth: '100%',
                boxShadow: 'lg',
            }}
        >
            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '4rem' }}>

                    <SentimentDissatisfiedIcon fontSize='large' />
                </Avatar>

                <Chip
                    size="md"
                    variant="soft"
                    color="primary"
                    sx={{
                        mt: -1,
                        mb: 1,
                        border: '3px solid',
                        borderColor: 'background.surface',

                    }}
                >
                    You Lost!
                </Chip>
                <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                    The answer was:
                </Typography>
                <Typography level="h2">{(props.word).toUpperCase()}</Typography>
                <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                    {props.definition}
                </Typography>
            </CardContent>
            <CardOverflow sx={{ bgcolor: 'background.level1' }}>
                <CardActions buttonFlex="1">
                    <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
                        <Button color='success' variant='solid' onClick={restartGame}>New Game</Button>
                    </ButtonGroup>
                </CardActions>
            </CardOverflow>
        </Card>
    );
}