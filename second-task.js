// Приведення чисел
// Створіть програму, яка виконує наступні дії:

// Створює зміну numString і присвоює їй рядок "42".
// Створює зміну numInt і приводить numString до цілого числа (integer) та присвоює результат змінній numInt.
// Створює зміну numFloat і приводить numString до числа з плаваючою комою (float) та присвоює результат змінній numFloat.
// Виводить значення numString, numInt і numFloat на екран.

let numString = "42";
let numInt = parseInt(numString);
let numFloat = parseFloat(numString);

console.log("Рядок:", numString);
console.log("Ціле число:", numInt);
console.log("Число з плаваючою комою:", numFloat);
