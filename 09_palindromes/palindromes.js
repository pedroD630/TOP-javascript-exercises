function isSpecialCharacter(char) {
    return /[a-zA-Z0-9]/.test(char);
}

function reverseText(cleanText){
    var reversed = [];
    for(var i = cleanText.length - 1; i >= 0; i--){
        reversed.push(cleanText[i]);
    }
    return reversed;
}

const palindromes = function (text) {
    var textArray = text.toLowerCase().split("");
    var cleanText = textArray.filter(isSpecialCharacter);

    var reversedText = reverseText(cleanText).join("");
    var cleanedOriginal = cleanText.join("");
    return reversedText === cleanedOriginal
};

// Do not edit below this line
module.exports = palindromes;
