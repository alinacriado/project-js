const money = 50000;
const income = 'taxi, shop, cafe';
const addExpenses = 'dog, car, games, sweet';
const deposit = true;
const mission = 164387;
const period = 8;
const budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(income.length);
console.log('Период ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(`период ${period} месяцев`);
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay, money % 30);

alert('hello');
console.log(233);