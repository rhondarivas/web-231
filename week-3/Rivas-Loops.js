//start program
/*============================================
    ; Title: Assignment 3.3
    ; Author: Richard Krasso
    ; Date: 3 March 2020
    ; Modified By: Rhonda Rivas
    ; Description: This program demonstrates the
    ; use of JavaScript loops
     ===========================================
*/

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */

 
var count = 5;
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
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)
  }
for (var x = 0; x < 10; x++) {
    var randomNum =randomNumber();
    if(match(count, randomNum)){
        logMatch(count, randomNum);
    }else{
        logMismatch(count, randomNum);
    }
}