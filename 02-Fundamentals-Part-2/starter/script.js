"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

// this is function declaration
function cutFruits(fruit) {
  return fruit * 4;
}

function fruitProcessor(apply, orange) {
  const applyPieces = cutFruits(apply);
  const orangePieces = cutFruits(orange);
  const juice = `Juice of ${applyPieces} apply and ${orangePieces} orange`;
  return juice;
}

const JuiceReady = fruitProcessor(4, 5);
console.log(JuiceReady);

// this is function expression
const fruitJuice = function (orange, lemon) {
  return `Juice of ${orange} orange and ${lemon} lemon`;
};

console.log(fruitJuice(5, 2));

//arrow function
const calAge = (birthYear) => 2025 - birthYear;

const yearUntilRetirement = (birthYear, name) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${retirement} age ${name} will be retired`;
};

console.log(yearUntilRetirement(2003, "Aditya"));
