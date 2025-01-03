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

// conditional Statement

const yourAge = 20;
if (yourAge >= 18) {
  console.log("adult");
} else if (yourAge >= 60) {
  console.log("citizen");
} else {
  console.log("teenage");
}

// type conversion

//1) manually type conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Aditya"));
console.log(typeof NaN);

console.log(String(23), 23);

//2) type coersion automatillay
console.log("I 'am " + 21 + " years old");
// only + will concate to string , rest math operator will be work as calculation as they are even if it(any number) is a string

console.log("23" - "10" - 3);
console.log("23" + "10" - 3);
console.log("24" / 2);
console.log("24" * 3);

// falsy and turthy values

//falsy value => 0 , '', undefined, null , NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Aditya"));
console.log(Boolean({})); // true
console.log(Boolean(""));

const money = 0;
if (money) console.log("Don't spend it all");
else {
  console.log("You Should get a job");
}

let height; // height will automatically convert into Boolean by type coersion

//undeinfed is a falsy value
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is Undefined");
}

// equality operator
const num = prompt("Enter a number");

// by-defualt prompt will return any thing into a string hence need to convert it acc to usecase

//const num = Number(prompt("Enter a number"));

if (num === 18) console.log("You Just became adult: (strict)");

if (num == 18) console.log("you just became adult: (loose)");

if (num !== 18) console.log("not a 18");

//logical operator
const hasDriversLicense = false;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || !hasGoodVision);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Aditya can drive");
} else {
  console.log("Aditya cannot drive");
}

const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan Course Structure");
    console.log("Go to coding meetup");
    break;

  case "tuesday":
    console.log("Preapre theory videos");
    break;

  case "wednesday":
  case "thrusday":
    console.log("Write code examples");
    break;

  case "friday":
    console.log("Record Videos");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy the weekends");
    break;
  default:
    console.log("Not a valid day");
}

const myAge = 23;

const drink = myAge >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
