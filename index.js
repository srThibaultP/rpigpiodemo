const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');
const button = new Gpio(4, 'in', 'both');
let i = 0;

console.log("En marche");
button.watch((err, value) => {
    i++
});
if (i>1) {
    i--;
    console.log(new Date());
}