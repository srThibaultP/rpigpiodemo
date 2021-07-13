const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');
const button = new Gpio(4, 'in', 'both');
let i = 0;

console.log("En marche");
button.watch((err, value) => {
    i++;
    if (i == 2) {
        date2 = new Date();
        i = 0;
        console.log(date2 - date1);
    } else {
        date1 = new Date();
    }
});

