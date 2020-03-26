/*============================================
; Title: Assignment 6.4
; Author: Richard Krasso
; Date: 25 March 2020
; Modified By: Rhonda Rivas
; Description: Demonstrates how to create an
; object and output the properties
===========================================
*/
/*Expected Output
2001 is the year 'Nsync had their Pop Odyssy Tour.
JC Chasez was a Lead Singer. The band was created in 1995.
Back then they were my number 1 favorite band.
*/

//Object

var ticket = {

    id: 2001,
    name: "'Nsync",
    dateCreated: "1995",
    priority: 1
    }

var person = {
    id: 2001,
    firstName: "JC",
    lastName: "Chasez",
    jobTitle: "Lead Singer"
}    
//Output
console.log(ticket.id + " is the year " + ticket.name + " had their Pop Odyssy Tour.");
console.log(person.firstName + " " + person.lastName + " was a " + person.jobTitle + ". The band was created in " + ticket.dateCreated + ".");
console.log("Back then they were my number " +ticket.priority + " favorite band. " );