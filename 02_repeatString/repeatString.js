const repeatString = function (text, num) {
    let concatenated = '';
    if (num == 0) {
        return '';
    }
    else if (num < 0) {
        return 'ERROR';
    }
    else {
        for (let i = 0; i < num; i++) {
            concatenated = concatenated + text;
        }
        return concatenated;
    }
};

// Do not edit below this line
module.exports = repeatString;
