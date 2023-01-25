enum Color {
  Red = 200,
  Green,
  Blue = 400,
  Purple,
}

console.log("-------");

const myColor: Color = Color.Green;
console.log(myColor);

const yourColor: Color.Blue = Color.Blue;
console.log(yourColor);

console.log("-------");

console.log(Color["Red"]);
console.log(Color["Green"]);

console.log("-------");

console.log(Color[0]);
console.log(Color[2]);

console.log("-------");

console.log(Color);
