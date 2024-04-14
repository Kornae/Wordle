import React from 'react';

function GameKeyboard() {
    return (
        <div className="Game-keyboard">
            <div className="Game-keyboard-row">
                <div tabIndex="-1" className="Game-keyboard-button">q</div>
                <div tabIndex="-1" className="Game-keyboard-button">w</div>
                <div tabIndex="-1" className="Game-keyboard-button letter-correct">e</div>
                <div tabIndex="-1" className="Game-keyboard-button letter-absent">r</div>
                <div tabIndex="-1" className="Game-keyboard-button letter-correct">t</div>
                <div tabIndex="-1" className="Game-keyboard-button">y</div>
                <div tabIndex="-1" className="Game-keyboard-button">u</div>
                <div tabIndex="-1" className="Game-keyboard-button">i</div>
                <div tabIndex="-1" className="Game-keyboard-button">o</div>
                <div tabIndex="-1" className="Game-keyboard-button letter-absent">p</div>
            </div>
            <div className="Game-keyboard-row">
                <div tabIndex="-1" className="Game-keyboard-button letter-absent">a</div>
                <div tabIndex="-1" className="Game-keyboard-button">s</div>
                <div tabIndex="-1" className="Game-keyboard-button letter-absent">d</div>
                <div tabIndex="-1" className="Game-keyboard-button">f</div>
                <div tabIndex="-1" className="Game-keyboard-button">g</div>
                <div tabIndex="-1" className="Game-keyboard-button letter-absent">h</div>
                <div tabIndex="-1" className="Game-keyboard-button">j</div>
                <div tabIndex="-1" className="Game-keyboard-button">k</div>
                <div tabIndex="-1" className="Game-keyboard-button">l</div>
            </div>
            <div className="Game-keyboard-row">
                <div tabIndex="-1" className="Game-keyboard-button Game-keyboard-button-wide">
                    <svg width="22" height="22">
                        <use xlinkHref="/assets/img/spritesvg.svg?v44.15#backspace"></use>
                    </svg>
                </div>
                <div tabIndex="-1" className="Game-keyboard-button">z</div>
                <div tabIndex="-1" className="Game-keyboard-button">x</div>
                <div tabIndex="-1" className="Game-keyboard-button letter-absent">c</div>
                <div tabIndex="-1" className="Game-keyboard-button">v</div>
                <div tabIndex="-1" className="Game-keyboard-button">b</div>
                <div tabIndex="-1" className="Game-keyboard-button">n</div>
                <div tabIndex="-1" className="Game-keyboard-button">m</div>
                <div tabIndex="-1" className="Game-keyboard-button Game-keyboard-button-wide">Enter</div>
            </div>
        </div>
    );
}

export default GameKeyboard;
