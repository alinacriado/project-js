'use strict';
const ruWeek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота','воскресенье'];
const enWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
const lang = document.documentElement.lang;

if (lang === 'ru') {
  console.log(ruWeek);
} else if (lang === 'en') {
  console.log(enWeek);
} else {
  console.log('Mistake');
}

switch (lang) {
  case 'ru':
    console.log(ruWeek);
    break
  case 'en':
    console.log(enWeek);
    break
  default:
    console.log('Mistake');
}

// c
const weekData = {
  'ru': ruWeek,
  'en': enWeek
}
console.log(weekData[lang]);

const weekDataMap = new Map();
weekDataMap.set('ru', ruWeek);
weekDataMap.set('en', enWeek);
console.log(weekDataMap.get(lang));

// 2.
const namePerson = 'Артем';
console.log(namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент');


const array = ['ru', [...ruWeek], 'en', [...enWeek]]
const result = array.indexOf(lang)
console.log(array[result + 1])