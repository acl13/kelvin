const kelvin = 293;
// The forecast for today is 293

const celsius = kelvin - 273;
// Celsius is 273 degrees less than Kelvin

var fahrenheit = (celsius * (9 / 5)) + 32;
//Fahrenheit is equal to the above temperature conversion from Celsius

fahrenheit = Math.floor(fahrenheit);
// The temperature conversion often returns a decimal, this will give us a whole number

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);


let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton`);




