const userName = prompt("Skriv ditt namn");
console.log(`Hej ${userName}!`);
const birthYear = parseInt(prompt("Ange ditt födelseår"));
currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
console.log(`Du är ${age} år gammal.`);
const num1 = parseInt(prompt("Ange första siffran"));
const num2 = parseInt(prompt("Ange andra siffran"));
result1 = num1 + num2;
result2 = num1 - num2;
result3 = num1 * num2;
result4 = num1 / num2;
console.log(result1, result2, result3, result4);
alert("Beräkningarna är klara, kontrollera konsolen för resultaten.");
