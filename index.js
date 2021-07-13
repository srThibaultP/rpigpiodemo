const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');
const button = new Gpio(4, 'in', 'both');

console.log("voila");
button.watch((err, value) => console.log(new Date()));
