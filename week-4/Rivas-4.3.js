/*============================================
; Title: Assignment 4.3
; Author: Richard Krasso
; Date: 5 March 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; use of JavaScript arrays
===========================================
*/

/*
Expected output:

Rhonda Rivas
Exercise 4.3
March 5, 2020

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus
  -- SELECTED VALUE --
  Motorcycle
  -- SELECTED VALUE --
  Bus
*/
var vehicles= ["Car", "Truck", "Motocycle", "Airplane", "Bus"];

function getValue(arr, val) {
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] === val)
        console.log(arr[k]);
    }
}

console.log("-- DISPLAYING ARRAY ITEMS --");
for (var x = 0; x < vehicles.length; x++) {
    console.log(vehicles[x]);
}
console.log("")

console.log(" -- SELECTED VALUE --");
getValue(vehicles, "Motocycle");

console.log("")

console.log(" -- SELECTED VALUE --");
getValue(vehicles, "Bus");