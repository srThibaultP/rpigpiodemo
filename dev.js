const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');
const button = new Gpio(4, 'in', 'both');
let i = 0;
let dateF = Intl.DateTimeFormat('fr', { hour: "numeric", minute: "numeric", second: "numeric" }).format(new Date());

console.log("En marche");
button.watch((err, value) => {
    i++;
    if (i == 2) {
        date2 = dateF;
        i = 0;
        console.log(date2 - date1);
    } else {
        date1 = dateF;
    }
});

