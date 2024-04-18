import React, { useState, useEffect } from "react";
import Main from "./Main";
import Nav from "./Nav";
import ColorInversionFooter from "./Footer";

export default function Home() {
    const [gamesPlayed, setGamesPlayed] = useState(localStorage.getItem('gamesPlayed') || 0);
    const [gamesWon, setGamesWon] = useState(localStorage.getItem('gamesWon') || 0);
    const [currentStreak, setCurrentStreak] = useState(localStorage.getItem('currentStreak') || 0);
    const [winPercentage, setWinPercentage] = useState(calculateWinPercentage());

    useEffect(() => {
        setGamesPlayed(localStorage.getItem('gamesPlayed') || 0);
        setGamesWon(localStorage.getItem('gamesWon') || 0);
        setCurrentStreak(localStorage.getItem('currentStreak') || 0);
        setWinPercentage(calculateWinPercentage());
    }, []);

    function calculateWinPercentage() {
        const gp = parseInt(localStorage.getItem('gamesPlayed')) || 0;
        const gw = parseInt(localStorage.getItem('gamesWon')) || 0;
        return gp === 0 ? 0 : Math.round((gw / gp) * 100);
    }

    function resetStats() {
        localStorage.removeItem('currentStreak');
        localStorage.removeItem('gamesWon');
        localStorage.removeItem('gamesPlayed');
        localStorage.removeItem('winPercentage');
        setGamesPlayed(0);
        setGamesWon(0);
        setCurrentStreak(0);
        setWinPercentage(0);
    }

    return (
        <div id="home">
            <div id="nav">
                <Nav
                    reset={resetStats}
                    gp={gamesPlayed}
                    gw={gamesWon}
                    wp={winPercentage}
                    cs={currentStreak}
                />
            </div>
            <div id="main"><Main /></div>
            <div id="footer"><ColorInversionFooter /></div>
        </div>
    );
}
