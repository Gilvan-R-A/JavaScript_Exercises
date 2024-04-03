// Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
// C = 5 * ((F-32) / 9).

let farenheit = Number(prompt("Temperatura em Farenheit: "));
let celsius = 5 * ((farenheit - 32) / 9);
alert(farenheit + "°F  equivalem a:  " + Math.round(celsius) +"°C");