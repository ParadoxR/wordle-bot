import React, { useState, useEffect } from "react";
import './App.css';
import Word from "./word/word";
import Letter from "./letter/letter";
import answers from "./data/answers";
import guesses from "./data/guesses";
import filters from "./filters/filters";
import Guess from "./guess/guess";
import Clock from "./clock/clock";
import Keyboard from "./keyboard/keyboard";

function App() {
  const [word, setWord] = useState([]);
  const [result, setResult] = useState(2315);

  function makeId(length) {
    let Id = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let counter = 0;
    while (counter < length) {
      Id += characters.charAt(Math.floor(Math.random() * characters.length));
      counter += 1;
    }
    return Id;
  }

  useEffect(() => {
    const handleWordChange = (event) => {
      if(event.key === "Backspace") {
        let backspace = [
          ...word.slice(0, word.length - 1)
        ];
        setWord(backspace);
      } else if (word.length < 30){
        const regex = /[a-zA-Z]/;
        if(event.key.match(regex) && event.key.length === 1) {
          let letter = event.key.toUpperCase();
          setWord([
            ...word,
            {letter: letter, identifier: makeId(5)}
          ])
        }
      }
    }
    window.addEventListener("keyup", handleWordChange);
    return () => {
      window.removeEventListener("keyup", handleWordChange);
    }
  }, [word]);


  const yellow = 'rgb(244, 196, 48)';
  const grey = 'rgb(32, 32, 32)';
  const green = 'rgb(0, 117, 0)';
  const greyBorder = "#696969";
  let letters = [];
  for (let i = 0; i < 30; i++){
    if (word[i]) {
      letters.push(
      <Letter 
        key={word[i].identifier} 
        id={word[i].identifier}
        yellow={yellow}
        grey={grey}
        green={green}
        greyBorder={greyBorder}
      >
        {word[i].letter}
      </Letter>
      )
    } else {
      letters.push(<Letter key={i}></Letter>)
    }
  }

  const wordleWords = answers;
  const wordleGuesses = guesses;

  function handleClickRun() {
    if(word.length >= 5) {
      let buttons = [];
      for (let i = 0; i < word.length; i++) {
        let button = document.getElementById(word[i].identifier);
        buttons.push(button);
      }

      let potentials = [...wordleWords];
      let potentialLetters = [];

      const getPosition = (i) => {
        if ((i === 0) || (i === 5) || (i === 10) || (i === 15) || (i === 20) || (i === 25)) {
          return 0;
        } else if ((i === 1) || (i === 6) || (i === 11) || (i === 16) || (i === 21) || (i === 26)){
          return 1;
        } else if ((i === 2) || (i === 7) || (i === 12) || (i === 17) || (i === 22) || (i === 27)) {
          return 2;
        } else if ((i === 3) || (i === 8) || (i === 13) || (i === 18) || (i === 23) || (i === 28)) {
          return 3;
        } else if ((i === 4) || (i === 9) || (i === 14) || (i === 19) || (i === 24) || (i === 29)) {
          return 4;
        }
      }

      let solvedWord = new Array(5);
      for (let i = 0; i < buttons.length; i++) {
        let position = getPosition(i);
        let letterColor = buttons[i].style.backgroundColor;
        if (letterColor === green) {
          solvedWord.splice(position, 1, word[i]);
          potentials = filters.greenFilter(potentials, word[i].letter, position);
        } else if (letterColor === yellow) {
          potentialLetters.push(word[i]);
          potentials = filters.yellowFilter(potentials, word[i].letter, position, solvedWord);
        } else if (letterColor === grey) {
          potentials = filters.greyFilter(potentials, word[i].letter, potentialLetters);
        }
      }
      setResult(potentials);
    }
  }

  function handleClickReset() {
    setWord([]);
    setResult(2315);
  }

  let displayGuesses = [];
  for(let i = 0; i < result.length; i++) {
    let number = i + 1;
    displayGuesses.push(<p key={i} className="result"><span className="guessNumber">{number}.</span><span>{result[i]}</span></p>)
  }

  function handleKeyboardClick(letter) {
    if(letter === "DLT") {
      let backspace = [
        ...word.slice(0, word.length - 1)
      ];
      setWord(backspace);
    } else if (word.length < 30){
      setWord([
        ...word,
        {letter: letter, identifier: makeId(5)}
      ])
    }
  }

  return (
    <>
      <div className="everything">
        <div className="App-header">
            <p>WORDLE-INATOR</p>
            <Clock/>
        </div>
        <div className="App">
          <div className="word">
            <div id="welcomeAll">
              <p className="welcomeWords">Good Afternoon</p>
              <p className="welcomeWords">Kick back and input your guess.</p>
            </div>
            <div id="letters">
              <Word>{letters}</Word>
            </div>
            <div id="keyboard">
              <Keyboard handleKeyboardClick={handleKeyboardClick}/>
            </div>
          </div>
          <div className="analytics">
            <div id="displayGuess">
              <Guess words={result} guesses={wordleGuesses}></Guess>
            </div>
            <div id="answers">
              {result.length === 1 ? (
                <p className="displayAnswersTitle">{result.length} REMAINING ANSWER</p>
              ) : (
                <p className="displayAnswersTitle">REMAINING ANSWERS: {result.length}</p>
              )}
              <div id="displayAnswers">
                <div id="upDownArrows">
                  <span>▴</span>
                  <span>∷</span>
                  <span>∷</span>
                  <span>∷</span>
                  <span>∷</span>
                  <span>∷</span>
                  <span>∷</span>
                  <span>∷</span>
                  <span>∷</span>
                  <span>∷</span>
                  <span>∷</span>
                  <span id="flipArrow">▴</span>
                </div>
                <div id="displayGuesses">
                  {displayGuesses}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="resetRun">
          <button className="calculate" id="reset" onClick={handleClickReset}>-RESET-</button>
          <button className="calculate" id="run" onClick={handleClickRun}>-RUN-</button>
        </div>
      </div>
      
    </>
  );
}

export default App;
