// const student = [
//   { ner: "zaya", nas: 20, huis: "f", country: "mongol" },
//   { ner: "sara", nas: 30, huis: "f", country: "usa" },
//   { ner: "tarou", nas: 25, huis: "m", country: "japan" },
// ];

// // 1. gadaad oyutan student ner, country hewle

// const intlStudent = student.filter(({ country }) => {
//   if (country !== "mongol") {
//     return true;
//   }
// });

// const countries = intlStudent.map(({ country, ner }) => {
//   return { ner, country };
// });

// console.log(countries);

// // dundaj nasiig ol

// const more30 = student.reduce((acc, { nas }) => {
//   return (acc = acc + nas);
// }, 0);

// console.log(more30 / student.length);

//////////////////////// leetcode 0326 /////////////////////////////

// let a = ["leet", "code", "pool", "ant", "note"];
// let x = "o";
// let b = [];

// let words = ["leet", "code", "pool", "ant", "note"];
// let letter = 'e'
// let result = [];
// words.forEach(el, index) => {
//   if(el.includes(letter)){
//     result.push(index);
//   }}
//   console.log(result);

// for (let i = 0; i < a.length; i++) {
//   if (a[i].includes(x)) {
//     b.push(i);
//   }
// }
// console.log(b);

const account = [
  [7, 1, 3],
  [1, 9, 5],
  [2, 8, 7],
];

const firstArrayFirstNumer = account[0][0];

// const sumArray = account.map((el) => {
//   const a = el.reduce((acc, num) => {
//     const sum = acc + num;
//     return sum;
//   }, 0);
//   return a;
// });

// const b = sumArray.sort((x, y) => x - y);

// console.log(b[b.length - 1]);

// let maxNum = 0;
// for (let i = 0; i < account.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < account[i].length; j++) {
//     sum += account[i][j];
//   }
//   if (maxNum < sum) {
//     maxNum = sum;
//   }
// }
// console.log(maxNum);

// 17
// 11
// 15

// let max = 0;
// const numbers = [1, 2, 3];
// numbers.forEach((number) => {
//   if (max < number) {
//     max = number;
//   }
// });

const allowed = "ab";
const words = ["ad", "bd", "aaab", "baa", "badab"];
words.forEach((el) => {
  el.split;
});
