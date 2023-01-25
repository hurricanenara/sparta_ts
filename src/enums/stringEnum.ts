import { Color } from "../types";

const myColor: Color.Red = Color.Red;
console.log(myColor);

const yourColor = Color.Blue;
console.log(yourColor);

const chorock: Color = Color.Green;
console.log(chorock);

// const colorOfSky: Color.Blue = Color.Green;

console.log("------");

const faveColor: Color = "Red" as Color;
console.log(faveColor);

const imposterColor: Color = "Potato" as Color;
console.log(imposterColor);
