import { Color } from "../types";

const keys = Object.keys(Color);
console.log(keys);

console.log("--------");

const values = Object.values(Color);
console.log(values);

type ObjectType = {
  [key in Color]?: string;
};

const myObject: ObjectType = {};

values.forEach((key) => {
  myObject[key] = "hello";
});

console.log(myObject);
