function findIndex(array, value) {
    console.log("Array: ", array);
    console.log("Value: ", value);
    let index = [];

    let listLenght = array.length;
    let deleteLen = value.length;
    let j = 0;
    for (let i = 0; i < deleteLen; i++) {
        index[j] = array.indexOf(value[i]);
        j++;
    }
    console.log("RemoveIndex: ", index);
    return index;
}

function removeValues(array, values) {
    let removeIndex = findIndex(array, values);
    let lenght = removeIndex.length;

    let removed = [];
    for (let i = lenght - 1; i >= 0; i--) {
        removed[i] = array.splice(removeIndex[i], 1);
    }
    console.log("Removed: ", removed);
    return array;
}

function findValue(array, values) {
    let length = array.length;
    let numArgs = values.length;
    let onList = [];

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < numArgs; j++) {
            if (array[i] == values[j]) {
                onList[i] = true;
            }
        }
        if (onList[i] == undefined) {
            onList[i] = false;
        }
    }
    console.log("OnList: ", onList);
    return onList;
}

const removeFromArray = function (array, ...args) {
    // recebe um array e os argumentos para remover
    // tratar argumentos opcionais rest sintax

    let newArray = [];
    let lenght = array.length;

    // checar se os elementos presentes num argumento esta no array 
    let onList = findValue(array, args);
    let remove = [];

    let j = 0;
    for (let i = 0; i < lenght; i++) {
        if (onList[i] == true) {
            remove[j] = array[i];
            console.log("Remove: ", remove[j]);
            j++;
        }
    }
    console.log("Remove: ", remove);
    newArray = removeValues(array, remove);
    // remove apenas elementos de mesmo tipo 1 != "1"

    // retornar array sem os elementos especificados
    console.log("Remove: ", remove);
    console.log("NewArray: ", newArray);
    return newArray;

};
// Do not edit below this line
module.exports = removeFromArray;
