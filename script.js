'use strict';

const changingLine = (line = '') => {
  if (typeof line !== 'string' || !isNaN(+line)) {
    return 'Ошибка! Введите строку';
  } 
  
  const trimLine = line.trim();
  if (trimLine.length > 30) {
    return trimLine.slice(0, 31) + '...';
  }
  
  return trimLine;
}

console.log(changingLine());