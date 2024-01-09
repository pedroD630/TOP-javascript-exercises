const leapYears = function (year) {
    // determinar se um ano é bissexto
    // anos bissextos são divisiveis por quatro
    // mesmo se for divisivel por 4, se for divisivel por 100 mas não por 400 não é bissexto

    let isLeap = false;

    if (year % 4 == 0) {
        isLeap = true;
    }
    if (isLeap && year % 100 == 0 && year % 400 != 0) {
        isLeap = false;
    }

    return isLeap;
};

// Do not edit below this line
module.exports = leapYears;
