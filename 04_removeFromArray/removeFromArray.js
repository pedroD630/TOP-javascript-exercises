function findIndex(array, value){
    let index = array.indexOf(value);
    return index;
}

function removeValue(array, value) {
    let removeIndex = findIndex(array, value);
    let removed = array.splice(removeIndex, 1);
    return array;
}

function findValue(array, value) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] == value) {
            return true;
        }
    }
    return false;
}

const removeFromArray = function (array, remove) {
    // recebe um array e os argumentos para remover
    // tratar argumentos opcionais
   
    let newArray = [];

     // checar se o elemento presente num argumento esta no array 
    let onList = findValue(array, remove);
    if (onList == true) {
        // se um dos elementos estiver presente, remover ele
        newArray = removeValue(array, remove);
    }

    // remove apenas elementos de mesmo tipo 1 != "1"

     // retornar array sem os elementos especificados
    return newArray;
   
};

// Do not edit below this line
module.exports = removeFromArray;
