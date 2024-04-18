import * as React from 'react';

export default function BoxSystemProps(props) {
    return (
        <div id='tile'>
            <span id='tile-span'><h1 id="letters">{props.letter}</h1></span>
        </div>
    );
}