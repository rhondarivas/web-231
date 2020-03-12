/*============================================
; Title: Assignment 4.4
; Author: Richard Krasso
; Date: 11 March 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; use of JavaScript arrays/predictives/filters
===========================================
*/
/*
Expected output:

Rhonda Rivas
Exercise 4.4
March 11, 2020
-- ORIGINAL ARRAY --
  Ohio
  Florida
  Texas
  California
  Hawaii
  -- SORTED ARRAY --
  California
  Florida
  Hawaii
  Ohio
  Texas
  -- SELECTED VALUE --
  Ohio
*/

/*
note - my header will not allow me to properly debug and show the output but here in notes.
I have tried to add it other weeks but it won't work properly
(links the header program to the current program
const header = require('/..rhondarivas/header.js'); )
I have tried to add and clean up for my own use this week to identify each line, I didn't really realize that was needed. 
Also I wasn't aware we could alter your original starter code since it says to make it look like yours but i made it my own this week
*/

//new line
console.log("\n");

//set array elements to the states array
var states = ["Ohio", "Florida", "Texas", "California", "Hawaii"];

//params: 2 string values
//output: boolean
//returns true or false depending on equality of parameters
function getState(state1, state2){
 if (state1===state2)
    return true;
  else
    return false;
}

//list of items from the array of states
console.log("--ORIGINAL ARRAY--")
for (var x = 0; x < states.length; x++){
  console.log(states[x]);
}

//new line
console.log("\n");

//sorts the states by alphabetical order and prints
console.log("--SORTED ARRAY--");
(states.sort().forEach(state => console.log(state)));

//new line
console.log("\n");

//returns a selected value from the array
console.log("--SELECTED VALUE--");
console.log(
  states.filter
    (function(inputState){
      return getState(inputState, "Ohio")
    }
  )[0]
);