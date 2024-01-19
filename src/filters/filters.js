let greenFilter = (array, letter, position) => {
    let filteredWords = [];
    for (let i = 0; i < array.length; i++) {
        let wordleSplitWord = array[i].split('');
        for (let j = 0; j < wordleSplitWord.length; j++) {
            if(wordleSplitWord[position] === letter) {
                filteredWords.push(array[i]);
                break;
            } else {
                break;
            }
        }
    }
    return filteredWords;
}

let greyFilter = (array, letter, potentialLetters) => {
    let filteredWords = [];
    for (let i = 0; i < array.length; i++) {
        // Split word into a list of its letters
        let wordleSplitWord = array[i].split('');
        if (wordleSplitWord.includes(letter) && !potentialLetters.includes(letter)) {
            continue;
        } else {
            filteredWords.push(array[i]);
        }
    }
    return filteredWords;
}

let yellowFilter = (array, letter, position, solvedWord) => {
    let filteredWords = [];
    for (let i = 0; i < array.length; i++) {
        // Split word into a list of its letters
        let wordleSplitWord = array[i].split('');
        for (let j = 0; j < wordleSplitWord.length; j++) {
            if((wordleSplitWord[position] === letter || !wordleSplitWord.includes(letter)) && !solvedWord.includes(letter)) {
                break;
            } else {
                filteredWords.push(array[i]);
                break;
            }
        }
    }
    return filteredWords;
}

export default {greenFilter, greyFilter, yellowFilter}