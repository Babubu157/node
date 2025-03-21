// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

// common js
//module.exports = sayHello;

//module.exports = sayHello;

// const os = require("os");
// const fs = require("fs");
// console.log(os.homedir());
// console.log(os.type());
// console.log(os.totalmem());

// fs.mkdir("./myfolder", (err) => {
//   if(error){
//     console.log("aldaa garlaa");
//   } else {
//     console.log("amjilttai");
//   }
// });

const { error } = require("console");
const fs = require("fs");

fs.writeFile("./text.txt", "hello", (error) => {
  console.log(error);
});

fs.readFile("./text.txt", { encoding: "utf8" }, (error, data) => {
  if (error) {
    console.log("aldaa garlaa");
  } else {
    console.log(data);
  }
});
