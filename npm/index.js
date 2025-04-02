// import { sum } from "lodash";
// const { sum } = require("lodash");

// const array = [5, 7, 9, 3, 6];
// const niilber = sum(array);

// console.log(niilber);

import { v4 as uuidv4 } from "uuid";
import { v6 as uuidv6 } from "uuid";

const options = {
  node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
  clockseq: 0x1234,
  msecs: new Date("2011-11-01").getTime(),
  nsecs: 5678,
};
const idGen = uuidv6(options); // ⇨ '1e1041c7-10b9-662e-9234-0123456789ab'
// const idGen = uuidv4();
console.log(idGen);
