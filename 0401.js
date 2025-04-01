// let s = "abc";
// let words = ["alice", "bob", "charlie"];
// let newS = [];

// const isAcronym = words.reduce((acc, el) => {
//     return
// })

// let num = [153, 23, 41, 981];
// let div = 3;

// let count = 0;

// for (let i = 0; i < num.length; i++) {
//   if (num[i] % div !== 0) {
//     count++;
//     console.log();
//   }
// }
// console.log(count);

// num.forEach((el) => {
//   if (el % div !== 0) {
//     count++;
//   }
// });
// console.log(count);

////////////////////////////////////////////////////////////////////

// let word1 = "abc";
// let word2 = "pqrsd";
// let newWord = "";
// let endofArray = 0;
// if (word1.length > word2.length) {
//   for (let i = 0; i < word1.length; i++) {
//     if (i < word2.length) {
//       newWord = newWord + word1[i];
//       newWord = newWord + word2[i];
//     } else {
//       newWord = newWord + word1[i];
//     }
//   }
// } else {
//   for (let i = 0; i < word2.length; i++) {
//     if (i < word1.length) {
//       newWord = newWord + word1[i];
//       newWord = newWord + word2[i];
//     } else {
//       newWord = newWord + word2[i];
//     }
//   }
// }

// console.log(newWord);

// let result = [];

// const max = Math.max(word1.length, word2.length);

// for (let i = 0; i < max; i++) {
//   if (word1[i] !== undefined) result.push(word1[i]);
//   if (word2[i] !== undefined) result.push(word2[i]);
//   //if (word1[i]) result = result.concat(word1[i]);
//   //if (word1[i]) result = result.concat(word2[i]);
// }

// console.log(result.join(""));

//////////////////////////////////////////////////////////////////////////

let nums1 = [2, 6, 4];
246;
let nums2 = [9, 7, 5];
579;
let result = 0;

// nums1.sort((a, b) => {
//   return a - b;
// });

// console.log(nums1);
// nums2.sort((a, b) => {
//   return a - b;
// });

// result = nums1[0] - nums2[0];
// if (result < 0) {
//   result = result * -1;
// }
// console.log(result);
let sum1 = 0;
let sum2 = 0;
// for(el of array) - array.n elmentiin utgiig awdag
// for(i in array) - array elmentiin indexiig awdag
for (let i in nums1) {
  // for (let i = 0; i < nums1.length; i++) {
  sum1 += nums1[i];
  sum2 += nums2[i];
}
console.log(sum1, sum2);
result = (sum1 - sum2) / nums1.length;
console.log(result);
