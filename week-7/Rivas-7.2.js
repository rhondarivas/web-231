/*============================================
; Title: Assignment 7.2
; Author: Richard Krasso
; Date: 30 March 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; use of JavaScript Constructor Functions
===========================================
*/
/*
Expected Output:
 -- DISPLAYING THE NEW EMPLOYEES --

Employee # 2001 - Dominic Monagham, Director
Employee # 2003 - Billy Boyd, OPS Manager
Employee # 1997 - Kate Winslet, Art Director
Employee # 2009 - Ashley Green, Coordinator
Employee # 1994 - Adam Levine, Music Director 
*/
// object
const employee = {
    id: 'Employee #',
    firstName: 'Employee First Name',
    lastName: 'Employee Last Name',
    title: 'Employee Title'
};
console.log(' -- DISPLAYING THE NEW EMPLOYEES --')
  console.log(""); // new line

/**
 * Params: id, firstName,lastName,title
 * Response: void
 * Description: sets the constructor of an object
 */

function Employee(id, firstName,lastName,title) {

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
  }
var employees = [
    new Employee("2001", "Dominic", "Monagham", "Director"),
    new Employee("2003", "Billy", "Boyd", "OPS Manager"),
    new Employee("1997", "Kate", "Winslet", "Art Director"),
    new Employee("2009", "Ashley", "Greene", "Coordinator"),
    new Employee("1994", "Adam", "Levine", "Music Director")
];
  
  // output
  let index = 1
  for (let x = 0; x < employees.length; x++) {
    console.log(index + '. ' + "Employee #: " + employees[x].id + " - " + employees[x].firstName + " " + employees[x].lastName 
    + ", " + employees[x].title)
    index++
  }
  

  