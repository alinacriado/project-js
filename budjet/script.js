'use strict';

let money;
const income = 'taxi, shop, cafe';
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'car, sweet, sport');
const deposit = confirm('Есть ли у вас депозит в банке?');
const mission = 164387;
const period = 5;

let start = function() {
  money = +prompt('Ваш месячный доход?');
  console.log(money);

  while (isNaN(money) || money == '' || money == null) {
    money = prompt('Ваш месячный доход?');
    console.log(money);
  }
};
start()

let mandatoryExpenses1,
    mandatoryExpenses2;

function getExpensesMonth() {
  let sum = 0;

  for(let i = 0; i < 2; i++) {
    if (i === 0) {
      mandatoryExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'food');
    } else if (i === 1) {
      mandatoryExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'flat');
    }
  
    sum += +prompt('Во сколько это обойдется?', 10000);
  }
  return sum;
}
const expensesMonth = getExpensesMonth();

function getAccumulatedMonth(income, expenses) {
  return income - expenses;
}
const accumulatedMonth = getAccumulatedMonth(money, expensesMonth);

const budgetDay = accumulatedMonth / 30;

const showTypeof = function(item) {
  console.log(typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

function getStatusIncome(){
  if (budgetDay >= 800) {
    return 'Высокий уровень дохода';
  } else if (budgetDay >= 300) {
    return 'Средний уровень дохода';
  } else if (budgetDay >= 0) {
    return 'Низкий уровень дохода';
  } else {
    return 'Что-то пошло не так';
  }
}
console.log('getStatusIncome():', getStatusIncome());

function getTargetMonth(purpose, month) {
  return purpose / month;
}
const TargetMonth = getTargetMonth(mission, accumulatedMonth)

console.log('Накопления за период: ', accumulatedMonth * period);
console.log('Срок достижения цели в месяцах: ', Math.floor(TargetMonth));