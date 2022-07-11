'use strict';

const money = +prompt('Ваш месячный доход?');
const income = 'taxi, shop, cafe';
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
const deposit = confirm('Есть ли у вас депозит в банке?');
const mission = 164387;
const period = 8;
const mandatoryExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
const mandatoryExpensesCost1 = +prompt('Во сколько это обойдется?');
const mandatoryExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
const mandatoryExpensesCost2 = +prompt('Во сколько это обойдется?');
const budgetMonth = money - mandatoryExpensesCost1 - mandatoryExpensesCost2;
const timeForMission = mission / budgetMonth;
const budgetDay = budgetMonth / 30;



console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(deposit);
console.log(income.length);
console.log('Цель заработать ' + mission + ' рублей');
console.log(`период ${period} месяцев`);
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay, money % 30);
console.log(budgetMonth);
console.log(Math.ceil(timeForMission));
console.log(Math.floor(budgetDay));

if (budgetDay >= 800) {
  console.log('Высокий уровень дохода');
} else if (budgetDay >= 300) {
  console.log('Средний уровень дохода');
} else if (budgetDay >= 0) {
  console.log('Низкий уровень дохода');
} else {
  console.log('Что-то пошло не так');
}

