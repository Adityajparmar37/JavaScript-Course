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

//array methods

const newLength = friends.push("Bhavik");
console.log(newLength);

const newLength2 = friends.unshift("Baa");
console.log(newLength2);

console.log(friends);

// element which will be pop is return by pop() method
const poppedElement = friends.pop();
console.log(poppedElement);

//remove from front of array
friends.shift();
console.log(friends);

console.log(friends.indexOf("Mummy"));

friends.push(21);
console.log(friends.includes("21")); // false
console.log(friends.includes(21)); // true

const My = {
  firstName: "Aditya",
  lastName: "Parmar",
  ages: 21,
  birthYear: 2003,
  job: "Full Stack Intern",
  friends: friends,
  hasDriversLicense: true,

  calcAge: function () {
    // creating new age property in My object
    this.age = 2024 - this.birthYear;
    return this.age;
  },
};

console.log(My);

//access object key value in 2 way dot and bracket
console.log(My.firstName);
console.log(My["lastName"]);

//difference between both is that bracket takes in expression hence you can compute expression and then give it to e.g

const nameKey = "Name";
console.log(My["first" + nameKey]);
console.log(My["last" + nameKey]);

// this is not allow
// console.log(My."last" + nameKey);

// other differenc is =>

const field = prompt("Enter My field");
console.log(My[field]);
//inintal it will log undefine as field is not key in My object hence that in bracket notation will not show
console.log(My.field);

// add in object
My.location = "Gujarat";
My["email"] = "adi@gmail.com";
console.log(My);

console.log(My.calcAge());
console.log(My.age);

const yearsArr = [1991, 2007, 1968, 2022, "2003", 2025, "2009"];
const agesArr = [];

for (let i = 0; i < yearsArr.length; i++) {
  if (typeof yearsArr[i] === "string") continue;
  agesArr.push(2025 - yearsArr[i]);
}
console.log(agesArr);

for (let i = 1; i < 4; i++) {
  console.log(`exercise ${i}`);
  for (let j = 1; j < 4; j++) {
    console.log(`times ${j}`);
  }
}

let k = 1;
while (k <= 5) {
  console.log(`While exercise times ${k}`);
  k++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You Rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice == 6) console.log(`Loop end as 6`);
}
