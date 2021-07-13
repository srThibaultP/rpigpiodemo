//Envoi d'un message dans la console NodeJS après la reception de l'impulsion retour

const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');
const button = new Gpio(4, 'in', 'both');
let i = 0;

console.log("En marche");
button.watch((err, value) => {
    i++;
    if (i == 2) {
        console.log("heya");
        i = 0;
    } else {
        console.log("nop");
    }
});

