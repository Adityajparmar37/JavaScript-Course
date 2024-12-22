let js = "JavaScript";

if (js === "JavaScript") alert("Hello from JS");
console.log(20 + 50);

let country = "India";
let continent = "Asia";
let population = 56;

//variable name conventions
let firstName = "Aditya";
let $ = "Jayantilal";
let last_name = "Parmar";
const PI = 3.1415;
const _ = "BY";

let _$ = "JS legal variable";

// cannot use reserved Keyword
// const function = "This is a reserved Keyword"
// Instead can do something like

const $function = "This is legal";
const _new = "Hello";

console.log(_$);

let isIsland = false;

console.log(typeof isIsland);
console.log(typeof 25);
console.log(typeof "JavaScript");

isIsland = "No";
console.log(typeof isIsland);

let year;
console.log(typeof year);

// will show the object as type for null which is a bug/error in javascript since long
console.log(typeof null);

// variable
let age = 30;
age = 31;

const birthYear = 1991;
// cannot reassing the value in case of const
// birthYear = 2003;

var job = "Programmer";
job = "Coder";

// can use variable without declaration but it will be in global scope
lastName = "Parmar";
console.log(lastName);

//operators

//math operators
const now = 2024;
const ageAditya = now - 2000;
const ageArchita = now - 2009;
console.log(ageAditya, ageArchita);
console.log(2 ** 4);

const myFirstName = "Aditya";
const myLastName = "Parmar";
console.log(myFirstName + " " + myLastName);

// assigmenet operator
let x = 10 + 5;
x += 10;
x *= 4;
x /= 4;
x--;
--x;
console.log(x);

// logical operator
console.log(ageAditya > ageArchita);
console.log(ageAditya >= 10);
const isAge = ageAditya <= 10;
console.log(isAge);

let y, z;
y = z = 20 - 10 - 5;
console.log(y, z);

const avgAge = (ageAditya + ageArchita) / 2;
console.log(avgAge);

//string literals
const birth_year = 2003;

const without_string_literals =
  "I'm" +
  myFirstName +
  " , a " +
  (now - birth_year) +
  " year old " +
  job +
  " !";
console.log(without_string_literals);

const with_String_literals = `I'm ${myFirstName}, a ${
  now - birth_year
} year old ${job} !`;
console.log(with_String_literals);

console.log(
  "Multiline string\n\
without string\n\
literals"
);

console.log(`Multiline string
with string
literals`);
