let oldestIndex = 0;
let oldestAge = 0;

function calcAge(person, index){
    let firstYear = person.yearOfBirth;
    let lastYear = person.yearOfDeath;

    if(lastYear === undefined) {
        lastYear = new Date().getFullYear();
    }

    let yearsLived = lastYear - firstYear;
    if(yearsLived > oldestAge){
        oldestIndex = index;
        oldestAge = yearsLived;
    }
}

const findTheOldest = function(people) {
    people.forEach(calcAge);
    return people[oldestIndex];
};

// duas variaveis de controle: uma para guardar a maior idade, a outra para guardar o indice de maior idade
// recebe um array de objetos
// passar por todos os objetos
// checar se existe da de falecimento
// se não existir, usar ano atual como data para comparação
// ano morte/atual - ano nascimento
// comparar valor recebido com a variavel controle maior idade
// retorna o objeto (array[indiceMaior]) com maior idade

// Do not edit below this line
module.exports = findTheOldest;
