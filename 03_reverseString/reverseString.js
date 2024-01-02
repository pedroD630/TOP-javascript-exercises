const reverseString = function(text) {
// receber uma string como parametro
// rodar a string com um loop de traz pra frente como um array
// adicionar cada elemento de traz pra frente em uma nova string
    let textLenght = text.length;
    let reversed = "";
    
    for (let i = textLenght - 1; i >= 0; i--){
        reversed += text[i];
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
