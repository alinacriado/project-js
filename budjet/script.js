'use strict';

const money = +prompt('Ваш месячный доход?', 50000);
const income = 'taxi, shop, cafe';
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'car, sweet, sport');
const deposit = confirm('Есть ли у вас депозит в банке?');
const mission = 164387;
const period = 8;
const mandatoryExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'food');
const mandatoryExpensesCost1 = +prompt('Во сколько это обойдется?', 10000);
const mandatoryExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'flat');
const mandatoryExpensesCost2 = +prompt('Во сколько это обойдется?', 5000);
const budgetMonth = money - mandatoryExpensesCost1 - mandatoryExpensesCost2;
const timeForMission = mission / budgetMonth;
const budgetDay = budgetMonth / 30;

if (budgetDay >= 800) {
  console.log('Высокий уровень дохода');
} else if (budgetDay >= 300) {
  console.log('Средний уровень дохода');
} else if (budgetDay >= 0) {
  console.log('Низкий уровень дохода');
} else {
  console.log('Что-то пошло не так');
}

function getExpensesMonth(expense1,expense2) {
  return expense1 + expense2;
}

function getAccumulatedMonth(income,expenses) {
  return income-expenses;
}
const accumulatedMonth = getAccumulatedMonth(money,getExpensesMonth(mandatoryExpensesCost1, mandatoryExpensesCost2));

function getTargetMonth(purpose,month) {
  return purpose / month;
}

console.log('Накопления за месяц: ', accumulatedMonth);
console.log('Срок достижения цели в месяцах: ', Math.floor(getTargetMonth(mission,accumulatedMonth)));