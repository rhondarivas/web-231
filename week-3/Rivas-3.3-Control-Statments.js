//start program
/*============================================
    ; Title: Assignment 3.3
    ; Author: Richard Krasso
    ; Date: 3 March 2020
    ; Modified By: Rhonda Rivas
    ; Description: This program demonstrates the
    ; use of JavaScript control statments
    ; Displays switch blocks
     ===========================================
*/
/*
  Expected output:

  FirstName Rivas
  Exercise 3.3
  3 March 2020

// Expected output
  The enter key was pressed

  */

var eventKeyCode = 13;

switch (eventKeyCode) {
    case 13:
        console.log("The Enter key was pressed");
        break;
    case 16:
        console.log("The shift key was pressed");
        break;
    case 32:
        console.log("The spacebar was pressed");
        break;
    case 8:
        console.log("The backspace / delete key was pressed");
        break;
    default:
        console.log("Unrecognized key press");   
}