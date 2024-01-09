const convertToCelsius = function (temp) {

  let celsius = (temp - 32) * (5 / 9);

  celsius = celsius.toFixed(1);
  celsius = parseFloat(celsius);

  return celsius;

};

const convertToFahrenheit = function (temp) {
  let fahr = (temp * 9 / 5) + 32;

  fahr = fahr.toFixed(1);
  fahr = parseFloat(fahr);

  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
