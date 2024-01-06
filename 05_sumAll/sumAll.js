const sumAll = function (num1, num2) {
    // evita que strings passem no NaN
    

    // se um dos numeros for negativo ou se um dos parametro e NaN retorna ERROR.
    // se um dos parametros for convertido pra numero e ser diferente em tipo do parametro ou for Nan retorna ERROR
    if (num1 < 0 || num2 < 0 || Number(num1) !== num1 || Number(num2) !== num2) {
        return "ERROR";
    }
    
    // checar qual dos dois e o maior numero
    let max = num1 > num2 ? num1 : num2;
    let min = num1 < num2 ? num1 : num2;

    // somar todos os numeros entre o min e o max
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
