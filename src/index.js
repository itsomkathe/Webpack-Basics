import logger from "./logger"

logger();

const obj = { a: "hello", b: "world" };
const newObj = { ...obj, c: "there" };
console.log(newObj);

console.log("%c Ran from index.js", 'color: #00b3ff');