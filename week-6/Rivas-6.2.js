/*============================================
; Title: Assignment 6.2
; Author: Richard Krasso
; Date: 23 March 2020
; Modified By: Rhonda Rivas
; Description: Demonstrates how to create a 
; try/catch/finally block
===========================================
*/
/*
Expected Output:

Catch Clause - X must not be negative
*/

try {
    // variables - ask for a number
    let x = 8
    let y = 2
    const sum = y / x
  
    // if statement
    if (x <0 ) throw new Error ("x must not be negative");
    //otherwise computing this with a value and return as normal

    // output
    console.log(sum)
  } catch (err) {
    console.log('Catch clause: ' + err)
  } finally {
    console.log('Finally clause reached...')
  }
