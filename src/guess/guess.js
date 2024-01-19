import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import findGuess from "./findWordByLetterPosition";

function Guess({ words, guesses }) {
    const [ guess, setGuess ] = useState("SALET")
    const [ progress, setProgress ] = useState(0);
    const [ running, setRunning ] = useState(false);

    async function calculateGuess(words, guesses) {
        async function findBestGuess(words, guesses) {
            let finalResults = [];
            setRunning(true);
            if(progress >= 9365) {
                setProgress(0);
            }
            for (let i = 0; i < guesses.length; i++) {
                setProgress(n => n + 1);
                let result;
                if(i % 100 === 0) {
                    result = await findGuess.findRecWordNonBlock(words, guesses[i]);
                } else {
                    result = findGuess.findRecWord(words, guesses[i])
                }
                finalResults.push(result);
            }
            let sortFinalResults = [...finalResults]
            sortFinalResults.sort((a, b) => a.remainingWords - b.remainingWords);
            setRunning(false);
            return sortFinalResults[0].guess
        }
        let bestGuess = await findBestGuess(words, guesses);
        setGuess(bestGuess);
    }

    useEffect(() => {
        if (words.length < 3 && words.length !== undefined) {
            setGuess(words[0]);
          } else if (words.length !== undefined) {
            calculateGuess(words, guesses);
          } else {
            setGuess("SALET");
          }
    }, [words]);

    return (
        <>
        <div className="guessComponent">
            {running ? (
                <p className="guess">CALCULATING...</p>
            ) : (
                words.length === 1 ? (
                    <p className="guess" id="oneAnswer">ANSWER: {guess}</p>
                ) : (
                    <p className="guess">OPTIMAL GUESS: {guess}</p>
                )
            )}
            <progress id="progress" value={progress} max={9365}>Loading</progress>
        </div>
        </>
    );
}

export default Guess;