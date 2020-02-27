/*============================================
    ; Title: Assignment 2.4
    ; Author: Richard Krasso
    ; Date: 25 February 2020
    ; Modified By: Rhonda Rivas
    ; Description: This program demonstrates the
    ; use of JavaScript functions and output 
     ===========================================*/

//start program

/*
Expected output

Rhonda Rivas
Exercise 2.4
February 25, 2020

Hello my name is Rhonda Rivas!
Today is February 25 and the current temperature is 39 degrees.
I am 43 years old and my savings account goal is 45,000 dollars
*/

fullName.rhonda,rivas = " Rhonda Rivas";
function fullName() {
    return fullName.rhonda, rivas;
}
console.log("Hello my name is" + fullName() + "!");

dateWriter = " 2020 February, 26,";
function fullDate(a=2020, b=26){
    return dateWriter;
}
console.log("Today's date is" + fullDate());

function formatNumber(number, numOfFixedPositions) {
    return number.toFixed(numOfFixedPositions);
}
console.log("and the current temperature is " + formatNumber(34.6,1) + " degrees.");

function convertToInt(convertToInt) {
    return parseInt("43");
}
console.log(convertToInt("I am" + convertToInt(43) + "years old and my savings account goal is"));

function convertToFloat(ConvertToFloat) {
    return parseFloat("45,000");
}
console.log(convertToFloat(convertToFloat(45,000) + "dollars."));