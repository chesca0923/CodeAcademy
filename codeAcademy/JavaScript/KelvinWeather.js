/*Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.
*/

// forecast for today in kelvin is 293
const kelvin = 0;
// convert kelvin to celsius
const celsius = kelvin - 273;
// calculate fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// rounding down the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`the temperature is ${fahrenheit} degrees in Fahrenheit`)
// convert to Newton
let newton = celsius * (33/100);
// round down
newton = Math.floor(newton);
console.log(`the temperature is ${newton} degrees in Newton`)

