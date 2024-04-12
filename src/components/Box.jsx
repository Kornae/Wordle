import * as React from 'react';
import Typography from '@mui/joy/Typography';


export default function BoxSystemProps(props) {
    return (
        <div id='tile'>
            <span id='tile-span'><h1 id="letters">{props.letter}</h1></span>
        </div>
    );
}