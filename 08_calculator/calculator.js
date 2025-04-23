
const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(values) {
	if (values.length === 0) return 0;

  var sum = values.reduce((total, current) =>{
    return total + current
  }, 0)

  return sum;
};

const multiply = function(values) {
  if (values.length === 0) return 0;

  var mult = values.reduce((total, current) =>{
    return total * current
  }, 1)

  return mult;
};

const power = function(base, power) {
  var total = base;
	for(var i = 1; i < power; i++){
    total *= base;
  }
  return total;
};

const factorial = function calcFactorial(start) {
	if (start == 1 || start == 0) return 1;

  var total = start * (calcFactorial(start-1));
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
