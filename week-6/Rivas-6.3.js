/*============================================
; Title: Assignment 6.3
; Author: Richard Krasso
; Date: 23 March 2020
; Modified By: Rhonda Rivas
; Description: Demonstrates how to create 
; an object and output the properties
===========================================
*/
/*
Expected Output:
Full Name: James Kirk,  NC-1701, Requested by: S'chn T'gai Spock
Full name by dot notation: James Kirk
Full name by bracket notation: James Kirk

*/
//Object

const client = {

    firstName: "James",

    lastName: "Kirk",
};

const client2 = {
    firstName: "S'chn T'gai",

    lastName: "Spock"
}

const idNumber={
    idNumber1: "NC-1701",
    idNumber2: "NC-1701A"

}

const requestorName={
    requestor1: "James Kirk",
    requestor2: "S'chn T'gai Spock"

}
//Output

console.log('Full Name: ' + client.firstName + ' ' + client.lastName + ',  ' + idNumber.idNumber1 + ', Requested by: ' + requestorName.requestor2) 
console.log('Full name by dot notation: ' + client.firstName + ' ' + client.lastName)
console.log('Full name by bracket notation: ' + client["firstName"] + ' ' + client["lastName"])

/*
the starter code confused me, it says to match and use one string yet with the fields, it's a little hard to do that
so, i made it look like what you wanted and then created my own long string to do what it actually asks
*/
