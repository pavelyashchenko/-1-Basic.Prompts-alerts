// 1
const userName = prompt("Укажіть своє ім'я");
const userAge = prompt('Укажіть свій вік');
const firstNumber = +prompt('Перше число');
const secondNumber = +prompt('Друге число');
const result = firstNumber + secondNumber;

console.log('Привіт, ' + userName + ', тобі ' + userAge + '. Сумма чисел ' + result);




// 2
let sentence = 'Я люблю місто ____. Я там останній раз був в _____ році. Також це місто відомо ______.';
console.log(sentence);

const city = prompt('Укажіть назву міста');
const year = prompt('Укажіть рік');
const sights = prompt('Укажіть переваги міста');

sentence = 'Я люблю місто ' + city + '. Я там останній раз був в ' + year + ' році. ' + 'Також це місто відомо ' + sights;
console.log(sentence);