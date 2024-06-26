import { useState, useEffect, useCallback } from "react";
import React from "react";
import BoxSx from "./Box";
import { generate } from "random-words";
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import party from "party-js";

export default function Main() {
    const [letters, setLetters] = useState(Array(30).fill(''));
    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(0);
    const [winner, setWinner] = useState(false);
    const [loser, setLoser] = useState(false);
    const [falseWord, setFalseWord] = useState(false);
    const [firstTileIndex, setFirstTileIndex] = useState(0)
    const [lastTileIndex, setLastTileIndex] = useState(5)
    const [word, setWord] = useState("");
    const targetWord = word.split('').join(',').toUpperCase().replace(/,/g, '')
    let userInput = letters.slice(firstTileIndex, lastTileIndex).join(',').replace(/,/g, '');
    const newTarget = [...userInput];
    const partialTracker = {};
    const correctTracker = {};
    let partial = [];
    let matched = [];
    const matchesIndexes = [];
    const [array, setArray] = useState([]);
    const [partialArray, setPartialArray] = useState([]);
    const [incorrectArray, setIncorrectArray] = useState([]);
    const [correctArray, setCorrectArray] = useState([]);
    const isDictionaryWord = require('check-dictionary-word');
    const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
    const [virtualKeyValue, setVirtualKeyValue] = useState('');
    let gamesPlayed = localStorage.getItem('gamesPlayed');
    let gamesWon = localStorage.getItem('gamesWon');
    let currentStreak = localStorage.getItem('currentStreak');
    let winPercentage = localStorage.getItem('winPercentage');

    if (gamesPlayed !== null) {
        gamesPlayed = parseInt(gamesPlayed);
    } else {
        gamesPlayed = 0;
    }

    function updateGamesPlayed(additionalGames) {

        gamesPlayed += additionalGames;

        localStorage.setItem('gamesPlayed', gamesPlayed);
    }


    if (gamesWon !== null) {
        gamesWon = parseInt(gamesWon);
    } else {
        gamesWon = 0;
    }

    function updateGamesWon(winsChange) {

        gamesWon += winsChange;

        localStorage.setItem('gamesWon', gamesWon);
    }


    if (currentStreak !== null) {
        currentStreak = parseInt(currentStreak);
    } else {
        currentStreak = 0;
    }

    function updateCurrentStreak(streakChange) {

        currentStreak += streakChange;

        localStorage.setItem('currentStreak', currentStreak);
    }



    if (winPercentage !== null) {
        winPercentage = parseInt(winPercentage);
    } else {
        winPercentage = 0;
    }

    function updateWinPercentage(winPercentageChange) {

        winPercentage += winPercentageChange;

        localStorage.setItem('winPercentage', winPercentage);
    }



    const correctStyle = {
        WebkitAnimation: 'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        animation: 'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        animationDelay: '2s'
    }


    const partialStyle = {
        WebkitAnimation: 'scale-up-center-2 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        animation: 'scale-up-center-2 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        animationDelay: '2.001s'
    }

    const incorrectStyle = {
        WebkitAnimation: 'scale-up-center-3 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        animation: 'scale-up-center-3 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        animationDelay: '2.02s'
    }

    useState(() => {
        setWord(generate({ minLength: 5, maxLength: 5 }));
    }, []);


    const handleSubmit = useCallback(() => {
        handleWordComparison();
    }, [handleWordComparison]);

    useEffect(() => {
        let handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSubmit();
            }
        }

        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, [handleSubmit])

    let handleLetterPress = (e) => {
        const keyValue = e.target.id
        setVirtualKeyValue(keyValue)
        console.log(keyValue)
    }


    function handleWordComparison() {
        if (isDictionaryWord(userInput) === false && count === lastTileIndex) {
            setFalseWord(true)
        }
        if (userInput !== targetWord && count === lastTileIndex && isDictionaryWord(userInput) === true) {
            setFirstTileIndex(firstTileIndex + 5)
            setLastTileIndex(lastTileIndex + 5)
            setCounter(counter + 1)
            setArray(prevArray => [...prevArray, { ...newTarget }]);
            for (let i = 0; i < targetWord.length; i++) {

                if (userInput[i] === targetWord[i]) {
                    newTarget[i] = 'G';
                    setCorrectArray(prevArray => [...prevArray, ...userInput[i]]);
                    console.log(`${userInput[i]} is in the correct spot!`);
                    matched.push(userInput[i])
                    correctTracker[userInput[i]] = true;

                    for (let i = 0; i < targetWord.length; i++) {
                        const match = userInput[i] === targetWord[i];

                        if (!match && targetWord.includes(userInput[i]) && matched.includes(userInput[i])) {
                            matchesIndexes.push(i);
                            newTarget[i] = '-';
                        }
                    }

                } else if (userInput[i] !== targetWord[i] && targetWord.includes(userInput[i]) && !correctTracker[userInput[i]]) {

                    if (!partialTracker[userInput[i]] && userInput[i] !== targetWord[i]) {
                        newTarget[i] = 'Y';

                        partialTracker[userInput[i]] = true
                        partial.push(userInput[i]);
                        setPartialArray(prevArray => [...prevArray, ...userInput[i]]);
                        console.log(`${userInput[i]} is in the wrong spot, but is still included in ${targetWord}!`);
                    } else {
                        console.log(`${userInput[i]} has already been considered partial or correct once!`);
                        newTarget[i] = '-';
                    }
                } else {
                    console.log(`${userInput[i]} is not a letter in the word!`);
                    newTarget[i] = '-';
                    setIncorrectArray(prevArray => [...prevArray, ...userInput[i]]);
                }
            }

        } else if (userInput === targetWord && count === lastTileIndex && isDictionaryWord(userInput) === true) {
            handleButtonClick()
            handleButtonClick()
            setCount(30)
            setWinner(true)
            setArray(prevArray => [...prevArray, { ...newTarget }]);
            setCorrectArray(prevArray => [...prevArray, ...userInput]);
            updateGamesPlayed(1);
            updateGamesWon(1)
            updateCurrentStreak(1)
            updateWinPercentage(Math.round((gamesWon / gamesPlayed) * 100))
        }
        if (count === 30 && userInput !== targetWord && isDictionaryWord(userInput) === true) {
            setWinner(false)
            setLoser(true)
            setArray(prevArray => [...prevArray, { ...newTarget }]);
            updateGamesPlayed(1);
            localStorage.removeItem('currentStreak');
        }
    }

    const handleBackSpace = (e) => {
        const currentIndex = count;
        if (count > 0 && currentIndex > firstTileIndex) {
            setFalseWord(false);
            const newLetters = [...letters];
            newLetters[currentIndex - 1] = '';
            setLetters(newLetters);
            setCount(prevInput => prevInput - 1);
        }
    }

    useEffect(() => {
        const currentIndex = count;
        let handleKeyPress = (e) => {
            let inputValue = e.key;
            let vKey = virtualKeyValue;
            if (currentIndex < lastTileIndex + 1) {
                if (/^[A-Za-z]$/.test(inputValue || vKey) && currentIndex < lastTileIndex) {
                    const newLetters = [...letters];
                    newLetters[currentIndex] = (inputValue || vKey).toUpperCase();
                    setLetters(newLetters);
                    setCount(prevInput => prevInput + 1);
                } else if ((e.key || vKey) === 'Backspace' && count > 0 && currentIndex > firstTileIndex) {
                    setFalseWord(false);
                    const newLetters = [...letters];
                    newLetters[currentIndex - 1] = '';
                    setLetters(newLetters);
                    setCount(prevInput => prevInput - 1);
                } else if (vKey === 'Enter') {
                    e.preventDefault();
                    handleSubmit();
                }
            }
        };

        let handleButtonClick = (e) => {
            if (e.target.className === 'btn') {
                handleKeyPress(e);
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleButtonClick);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('click', handleButtonClick);

        };
    }, [count, letters, firstTileIndex, lastTileIndex, virtualKeyValue]);

    const runButton = document.getElementById("box-board");

    let handleButtonClick = () => {
        party.confetti(runButton, {
            count: party.variation.range(40, 60),
        });
    }

    return (
        <div id="wordle-container">
            <div style={{}} id="box-rows">

                <div id="box-board">
                    <div id="row-1" className={`row ${falseWord && lastTileIndex === 5 ? 'falseWord' : ''}`}>
                        {letters.slice(0, 5).map((letter, index) => (
                            <div id="inner-tile" className={(winner && lastTileIndex === 5 ? 'winner' : counter >= 1 && ((array[0][index] === 'G') ? 'correctWord' : array[0][index] === 'Y' ? 'partialLetters' : array[0][index] === '-' ? 'incorrectWord' : null))} style={{
                                animationDelay: `${index % 5 * 350}ms`, border: winner && lastTileIndex === 5 ? null : counter < 1 ? 'solid 2px #ededed' : null
                            }} key={index + 1}> <BoxSx letter={letter} /></div>
                        ))}
                    </div>
                    <div id="row-2" className={`row ${falseWord && lastTileIndex === 10 ? 'falseWord' : ''}`}>
                        {letters.slice(5, 10).map((letter, index) => (
                            <div id="inner-tile" style={{ animationDelay: `${index % 5 * 350}ms`, border: winner && lastTileIndex === 10 ? null : counter < 2 ? 'solid 2px #ededed' : null }} className={(winner && lastTileIndex === 10 ? 'winner' : counter >= 2 && ((array[1][index] === 'G') ? 'correctWord' : array[1][index] === 'Y' ? 'partialLetters' : array[1][index] === '-' ? 'incorrectWord' : null))} key={index + 1}>
                                <BoxSx letter={letter} /></div>
                        ))}
                    </div>
                    <div id="row-3" className={`row ${falseWord && lastTileIndex === 15 ? 'falseWord' : ''}`}>
                        {letters.slice(10, 15).map((letter, index) => (
                            <div id="inner-tile" style={{ animationDelay: `${index % 5 * 350}ms`, border: winner && lastTileIndex === 15 ? null : counter < 3 ? 'solid 2px #ededed' : null }} className={(winner && lastTileIndex === 15 ? 'winner' : counter >= 3 && ((array[2][index] === 'G') ? 'correctWord' : array[2][index] === 'Y' ? 'partialLetters' : array[2][index] === '-' ? 'incorrectWord' : null))} key={index + 1}><BoxSx letter={letter} /></div>
                        ))}
                    </div>
                    <div id="row-4" className={`row ${falseWord && lastTileIndex === 20 ? 'falseWord' : ''}`}>
                        {letters.slice(15, 20).map((letter, index) => (
                            <div id="inner-tile" style={{ animationDelay: `${index % 5 * 350}ms`, border: winner && lastTileIndex === 20 ? null : counter < 4 ? 'solid 2px #ededed' : null }} className={(winner && lastTileIndex === 20 ? 'winner' : counter >= 4 && ((array[3][index] === 'G') ? 'correctWord' : array[3][index] === 'Y' ? 'partialLetters' : array[3][index] === '-' ? 'incorrectWord' : null))} key={index + 1}><BoxSx letter={letter} /></div>
                        ))}
                    </div>
                    <div id="row-5" className={`row ${falseWord && lastTileIndex === 25 ? 'falseWord' : ''}`}>
                        {letters.slice(20, 25).map((letter, index) => (
                            <div id="inner-tile" style={{ animationDelay: `${index % 5 * 350}ms`, border: winner && lastTileIndex === 25 ? null : counter < 5 ? 'solid 2px #ededed' : null }} className={(winner && lastTileIndex === 25 ? 'winner' : counter >= 5 && ((array[4][index] === 'G') ? 'correctWord' : array[4][index] === 'Y' ? 'partialLetters' : array[4][index] === '-' ? 'incorrectWord' : null))} key={index + 1}><BoxSx letter={letter} /></div>
                        ))}
                    </div>
                    <div id="row-6" className={`row ${falseWord && lastTileIndex === 30 ? 'falseWord' : ''}`}>
                        {letters.slice(25, 30).map((letter, index) => (
                            <div id="inner-tile" style={{ animationDelay: `${index % 5 * 350}ms`, border: winner && lastTileIndex === 30 ? null : loser ? null : 'solid 2px #ededed' }} className={(winner && lastTileIndex === 30 ? 'winner' : counter >= 6 && ((array[5][index] === 'G') ? 'correctWord' : array[5][index] === 'Y' ? 'partialLetters' : array[5][index] === '-' ? 'incorrectWord' : null))} key={index + 1}><BoxSx letter={letter} /></div>
                        ))}
                    </div>

                    {winner ? <>
                        <div>
                            <Box id="chip" sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Chip sx={{ fontSize: '12px', fontWeight: 'bold', fontFamily: "Montserrat" }} variant="soft">
                                    You Won! 🏆
                                </Chip>
                            </Box>
                        </div>
                    </> : loser ? <Box id="chip" sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Chip sx={{ fontSize: '14px', fontWeight: 'bold', fontFamily: "Montserrat" }} variant="soft">
                            {targetWord}

                        </Chip>
                    </Box> : null}
                </div>
            </div>

            <div id="keyboard">
                <div id="keyboard-row1">
                    {keys.slice(0, 10).map((keyLetter, index) => {
                        return (
                            <div id={keyLetter} className="btn" style={correctArray.includes(keyLetter) ? correctStyle : partialArray.includes(keyLetter) ? partialStyle : incorrectArray.includes(keyLetter) ? incorrectStyle : null} onClick={handleLetterPress} value={keyLetter}>{keyLetter}</div>
                        )
                    })}
                </div>

                <div id="keyboard-row2">
                    {keys.slice(10, 19).map(keyLetter => {
                        return (
                            <div id={keyLetter} className="btn" style={correctArray.includes(keyLetter) ? correctStyle : partialArray.includes(keyLetter) ? partialStyle : incorrectArray.includes(keyLetter) ? incorrectStyle : null} onClick={handleLetterPress} value={keyLetter}>{keyLetter}</div>
                        )
                    })}
                </div>

                <div id="keyboard-row3">
                    <div id="Backspace" className="btn" onClick={handleLetterPress}><BackspaceOutlinedIcon onClick={handleBackSpace} /></div>
                    {keys.slice(19, 26).map(keyLetter => {
                        return (
                            <div id={keyLetter} className="btn" style={correctArray.includes(keyLetter) ? correctStyle : partialArray.includes(keyLetter) ? partialStyle : incorrectArray.includes(keyLetter) ? incorrectStyle : null} onClick={handleLetterPress} value={keyLetter}>{keyLetter}</div>
                        )
                    })}
                    <div id="Enter" className="btn" onClick={handleLetterPress}>Enter</div>

                </div>
            </div>
        </div>
    )
}


export const gamesPlayed = localStorage.getItem('gamesPlayed');
export const gamesWon = localStorage.getItem('gamesWon');
export const currentStreak = localStorage.getItem('currentStreak');
export const winPercentage = localStorage.getItem('winPercentage');
