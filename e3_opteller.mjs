// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



/* easy challange
let eerstegetal= parseFloat(await userInput.question('Wat is het eerste getal? '));
let tweedeGetal= parseFloat(await userInput.question('Wat is het tweede getal? '));

let sum = eerstegetal + tweedeGetal;
console.log(sum);
*/
/* medium challange 1
let getal1= 20;
let getal2= 10;
let sum = getal1+ getal2;
let verschil= getal1- getal2;
let product = getal1* getal2;
let deling=getal1 / getal2;

console.log('De som is gelijk aan: ' + sum + '\n' + 'Het verschil is gelijk aan: ' + verschil + '\n' + 'Het product is gelijk aan: ' + product+ '\n' + ' Het quotiënt is gelijk aan: ' + deling);
*/


let geboorteJaar= parseFloat(await userInput.question('Wat is je geboortejaar?'));
let toekomstJaar= parseFloat(await userInput.question('Wat is het toekomstjaar?'));

let leeftijdInToekomst= toekomstJaar- geboorteJaar;
let tweedeLeeftijdToekomst = leeftijdInToekomst-1;

console.log('In het jaar ' + toekomstJaar+ ' zal je ' + tweedeLeeftijdToekomst + ' of ' + leeftijdInToekomst + ' jaar oud zijn.');

process.exit();










process.exit();
