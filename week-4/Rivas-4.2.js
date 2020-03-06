/*============================================
; Title: Assignment 4.2
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
Exercise 4.2
March 5, 2020

Apple
Orange
Banana
Mango
Pear
*/

var fruits =["Apple", "Orange", "Banana", "Mango", "Pear"];

function getFruit(arr) {
    for (var k = 0; k < arr.length; k++) {
        console.log(arr[k]);
    }
}

getFruit(fruits);