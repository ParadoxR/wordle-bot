//import _ from 'lodash';
import filters from "../filters/filters";

function findRecWordNonBlock(possibleWords, word) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let guess = word.toString();
            let splitGuess = guess.split('');
            let remainingWords = 0;
            let wordScore = {guess: word, remainingWords: remainingWords}
            for (let j = 0; j < possibleWords.length; j++) {
                let findAnswer = possibleWords[j];
                let splitAnswer = findAnswer.split('');
                let position = 0;
                let solvedWord = new Array(5);
                let potentialLetters = [];
                let words = possibleWords;
                for (let x = position; x < splitAnswer.length; x++) {
                    //Green
                    if (splitAnswer[x] === splitGuess[x]) {
                        solvedWord.splice(position, 1, splitGuess[x]);
                        words = filters.greenFilter(words, splitGuess[x], position);
                        position += 1;
                        wordScore.remainingWords += words.length;
                        continue;
                    //Yellow
                    } else if (splitAnswer.includes(splitGuess[x])) {
                        potentialLetters.push(splitGuess[x]);
                        words = filters.yellowFilter(words, splitGuess[x], position, solvedWord);
                        position += 1;
                        wordScore.remainingWords += words.length;
                        continue;
                    //Grey
                    } else {
                        words = filters.greyFilter(words, splitGuess[x], solvedWord, potentialLetters);
                        position += 1;
                        wordScore.remainingWords += words.length;
                        continue;
                    }
                }
            }
            resolve(wordScore);
        }, 0)
    })    
}

function findRecWord(possibleWords, word) {
    let guess = word.toString();
    let splitGuess = guess.split('');
    let remainingWords = 0;
    let wordScore = {guess: word, remainingWords: remainingWords}
    for (let j = 0; j < possibleWords.length; j++) {
        let findAnswer = possibleWords[j];
        let splitAnswer = findAnswer.split('');
        let position = 0;
        let solvedWord = new Array(5);
        let potentialLetters = [];
        let words = possibleWords;
        for (let x = position; x < splitAnswer.length; x++) {
            //Green
            if (splitAnswer[x] === splitGuess[x]) {
                solvedWord.splice(position, 1, splitGuess[x]);
                words = filters.greenFilter(words, splitGuess[x], position);
                position += 1;
                wordScore.remainingWords += words.length;
                continue;
            //Yellow
            } else if (splitAnswer.includes(splitGuess[x])) {
                potentialLetters.push(splitGuess[x]);
                words = filters.yellowFilter(words, splitGuess[x], position, solvedWord);
                position += 1;
                wordScore.remainingWords += words.length;
                continue;
            //Grey
            } else {
                words = filters.greyFilter(words, splitGuess[x], solvedWord, potentialLetters);
                position += 1;
                wordScore.remainingWords += words.length;
                continue;
            }
        }
    }
    return wordScore;
}

export default {
    findRecWord,
    findRecWordNonBlock
};