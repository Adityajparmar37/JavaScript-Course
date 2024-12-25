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

// Arrays
//Arrays is non primitive

//1st way of creating arrays
const friends = ["Mummy", "Pappa", "Archita"];
console.log(friends);

//2nd way of creating arrays
const years = new Array(2000, 2003, 2004, 2005);
console.log(years);

console.log(friends.length);
console.log(years[1]);
console.log(friends[friends.length - 2]);

friends[2] = "Archu";

const firstName = "Aditya";
const lastName = "Parmar";
const my = [firstName, lastName, 21, friends];
console.log(my);

const ages = [calAge(years[0]), calAge(years[1]), calAge(years[2])];

console.log(ages);
