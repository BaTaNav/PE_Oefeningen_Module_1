import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let aantalDagen = parseFloat(await userInput.question('Geef het aantal dagen? '));
let aantalUren = parseFloat(await userInput.question('Geef het aantal uren? '));
let aantalMinuten = parseFloat(await userInput.question('Geef het aantal minuten? '));
let aantalSeconden = parseFloat(await userInput.question('Wat is het aantal seconden? '));


let sumSeconden = (86400* aantalDagen) + (3600 * aantalUren)+ (60 * aantalMinuten )+ aantalSeconden

console.log('aantal seconden: ' + sumSeconden);

process.exit();

