//start program
/*============================================
    ; Title: Assignment 3.2
    ; Author: Richard Krasso
    ; Date: 4 March 2020
    ; Modified By: Rhonda Rivas
    ; Description: This program demonstrates the
    ; use of JavaScript function if and else
     ===========================================
*/
/*
  Expected output:

  FirstName Rivas
  Exercise 3.2
  4 March 2020

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

//variables
var cars1 = "Jeep";
var cars2 = "Mustang";
var cars3 = "Trans-Am";
var cars4 = "Truck";
var cars5 = "Fusion";
var cars6 = "Firebird"


//functions
function match(cars1, cars1) {
    if (cars1 === cars1)
        return true
    else
        return false
    }

function logMismatch(cars1, cars1) {
    console.log(cars1 + " and " + cars1 +  " do not match!");
}

function logMatch(cars1, cars1) {
    console.log(cars1 + " and " + cars1 + " do match!");
}
function match(cars1, cars2) {
    if (cars1 === cars2)
        return true
    else
        return false
    }

function logMismatch(cars1, cars2) {
    console.log(cars1 + " and " + cars2 +  " do match!");
}

function logMatch(cars1, cars2) {
    console.log(cars1 + " and " + cars2 + " do not match!");
}

function match(cars1, cars3) {
    if (cars1 === cars3)
        return true
    else
        return false
    }

function logMismatch(cars1, cars3) {
    console.log(cars1 + " and " + cars3 +  " do match!");
}

function logMatch(cars1, cars3) {
    console.log(cars1 + " and " + cars3 + " do not match!");
}
function match(cars1, cars4) {
    if (cars1 === cars4)
        return true
    else
        return false
    }

function logMismatch(cars1, cars4) {
    console.log(cars1 + " and " + cars4 +  " do match!");
}

function logMatch(cars1, cars4) {
    console.log(cars1 + " and " + cars4 + " do not match!");
}
function match(cars1, cars5) {
    if (cars1 === cars5)
        return true
    else
        return false
    }

function logMismatch(cars1, cars5) {
    console.log(cars1 + " and " + cars5 +  " do match!");
}

function logMatch(cars1, cars5) {
    console.log(cars1 + " and " + cars5 + " do not match!");
}
function match(cars1, cars6) {
    if (cars1 === cars6)
        return true
    else
        return false
    }

function logMismatch(cars1, cars6) {
    console.log(cars1 + " and " + cars6 +  " do match!");
}

function logMatch(cars1, cars6) {
    console.log(cars1 + " and " + cars6 + " do not match!");
}
//six (6) test variables



//Output from the match() function...
console.log(match("A", "B"));
console.log(match(2, 2));

//Conditional "if...else" statments. Include checks for all test variables
if (match(cars1, cars1)) {
    logMismatch(cars1, cars1);
} else {
    logMismatch(cars1, cars1);
}
//Conditional "if...else" statments. Include checks for all test variables
if (match(cars1, cars2)) {
    logMatch(cars1, cars2);
} else {
    logMatch(cars1, cars2);
}
//Conditional "if...else" statments. Include checks for all test variables
if (match(cars1, cars3)) {
    logMatch(cars1, cars3);
} else {
    logMatch(cars1, cars3);
}
//Conditional "if...else" statments. Include checks for all test variables
if (match(cars1, cars4)) {
    logMatch(cars1, cars4);
} else {
    logMatch(cars1, cars4);
}
//Conditional "if...else" statments. Include checks for all test variables
if (match(cars1, cars5)) {
    logMatch(cars1, cars5);
} else {
    logMatch(cars1, cars5);
}
//Conditional "if...else" statments. Include checks for all test variables
if (match(cars1, cars6)) {
    logMatch(cars1, cars6);
} else {
    logMatch(cars1, cars6);
}