const num = 266219;
const result = [...num.toString()].reduce((a, b) => a * b);
console.log(result);

console.log(...(result ** 3).toString().substring(0,2));

// Старый способ //
// const newNumb = num.toString().split('');
// let sum = 1;
// for (let i = 0; i < newNumb.length; i++) {
//   sum *= +newNumb[i]
// }

