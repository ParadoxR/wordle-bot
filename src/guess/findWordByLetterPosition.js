import _ from 'lodash';
import filters from "../filters/filters";

// function findWordOccurencesByPosition(wordList, j) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//                 let letterCount = new Array(26);
//                 let aa = 0;
//                 let bb = 0;
//                 let cc = 0;
//                 let dd = 0;
//                 let ee = 0;
//                 let ff = 0;
//                 let gg = 0;
//                 let hh = 0;
//                 let ii = 0;
//                 let jj = 0;
//                 let kk = 0;
//                 let ll = 0;
//                 let mm = 0;
//                 let nn = 0;
//                 let oo = 0;
//                 let pp = 0;
//                 let qq = 0;
//                 let rr = 0;
//                 let ss = 0;
//                 let tt = 0;
//                 let uu = 0;
//                 let vv = 0;
//                 let ww = 0;
//                 let xx = 0;
//                 let yy = 0;
//                 let zz = 0;
//                 for (let i = 0; i < wordList.length; i++) {
//                     let splitWord = wordList[i].split('');
//                     let letter = splitWord[j];
//                     switch(letter) {
//                         case 'A':
//                             aa += 1;
//                             letterCount.splice(0, 1, {letter: 'A', value: aa, round: j});
//                             break;
//                         case 'B':
//                             bb += 1;
//                             letterCount.splice(1, 1, {letter: 'B', value: bb, round: j});
//                             break;
//                         case 'C':
//                             cc += 1;
//                             letterCount.splice(2, 1, {letter: 'C', value: cc, round: j});
//                             break;
//                         case 'D':
//                             dd += 1;
//                             letterCount.splice(3, 1, {letter: 'D', value: dd, round: j});
//                             break;
//                         case 'E':
//                             ee += 1;
//                             letterCount.splice(4, 1, {letter: 'E', value: ee, round: j});
//                             break;
//                         case 'F':
//                             ff += 1;
//                             letterCount.splice(5, 1, {letter: 'F', value: ff, round: j});
//                             break;
//                         case 'G':
//                             gg += 1;
//                             letterCount.splice(6, 1, {letter: 'G', value: gg, round: j});
//                             break;
//                         case 'H':
//                             hh += 1;
//                             letterCount.splice(7, 1, {letter: 'H', value: hh, round: j});
//                             break;
//                         case 'I':
//                             ii += 1;
//                             letterCount.splice(8, 1, {letter: 'I', value: ii, round: j});
//                             break;
//                         case 'J':
//                             jj += 1;
//                             letterCount.splice(9, 1, {letter: 'J', value: jj, round: j});
//                             break;
//                         case 'K':
//                             kk += 1;
//                             letterCount.splice(10, 1, {letter: 'K', value: kk, round: j});
//                             break;
//                         case 'L':
//                             ll += 1;
//                             letterCount.splice(11, 1, {letter: 'L', value: ll, round: j});
//                             break;
//                         case 'M':
//                             mm += 1;
//                             letterCount.splice(12, 1, {letter: 'M', value: mm, round: j});
//                             break;
//                         case 'N':
//                             nn += 1;
//                             letterCount.splice(13, 1, {letter: 'N', value: nn, round: j});
//                             break;
//                         case 'O':
//                             oo += 1;
//                             letterCount.splice(14, 1, {letter: 'O', value: oo, round: j});
//                             break;
//                         case 'P':
//                             pp += 1;
//                             letterCount.splice(15, 1, {letter: 'P', value: pp, round: j});
//                             break;    
//                         case 'Q':
//                             qq += 1;
//                             letterCount.splice(16, 1, {letter: 'Q', value: qq, round: j});
//                             break;
//                         case 'R':
//                             rr += 1;
//                             letterCount.splice(17, 1, {letter: 'R', value: rr, round: j});
//                             break;
//                         case 'S':
//                             ss += 1;
//                             letterCount.splice(18, 1, {letter: 'S', value: ss, round: j});
//                             break;
//                         case 'T':
//                             tt += 1;
//                             letterCount.splice(19, 1, {letter: 'T', value: tt, round: j});
//                             break;
//                         case 'U':
//                             uu += 1;
//                             letterCount.splice(20, 1, {letter: 'U', value: uu, round: j});
//                             break;
//                         case 'V':
//                             vv += 1;
//                             letterCount.splice(21, 1, {letter: 'V', value: vv, round: j});
//                             break;
//                         case 'W':
//                             ww += 1;
//                             letterCount.splice(22, 1, {letter: 'W', value: ww, round: j});
//                             break;
//                         case 'X':
//                             xx += 1;
//                             letterCount.splice(23, 1, {letter: 'X', value: xx, round: j});
//                             break;
//                         case 'Y':
//                             yy += 1;
//                             letterCount.splice(24, 1, {letter: 'Y', value: yy, round: j});
//                             break;
//                         case 'Z':
//                             zz += 1;
//                             letterCount.splice(25, 1, {letter: 'Z', value: zz, round: j});
//                             break;
//                     }
//                 }
//                 let sort = letterCount.sort((a, b) => b.value - a.value);
//                 let sortList = (objectArray) => {
//                     let list = [];
//                     for (let i = 0; i < objectArray.length; i++) {
//                         try {
//                             let objectValues = Object.values(objectArray[i]);
//                             list.push(objectValues);
//                         } catch(e) {
//                             continue;
//                         }
//                     }
//                     return list;
//                 }
//                 let sortSortList = sortList(sort);
//                 resolve(sortSortList);
//         }, 0)
//     })
// }

// function findRecommendedWordButGooder(guess, letterOccurences) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             let trimmedGuess = _.trim(guess);
//             let splitGuess = trimmedGuess.split('');
//             let score = 0;
//             let wordScore = {word: guess, score: score};
//             for (let j = 0; j < splitGuess.length; j++) {
//                 let letterFrequency = letterOccurences[j].find((letter) => letter[0] === splitGuess[j]);
//                 if (letterFrequency) {
//                     wordScore.score += letterFrequency[1];
//                 } else {
//                     continue;
//                 }
//             }
//             resolve(wordScore);
//         }, 0)
//     })
// }

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