"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

function fruitProcessor(apply, orange) {
  const juice = `Juice of ${apply} apply and ${orange} orange`;
  return juice;
}

const JuiceReady = fruitProcessor(4, 5);
console.log(JuiceReady);
