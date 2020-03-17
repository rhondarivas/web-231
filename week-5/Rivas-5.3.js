/*============================================
; Title: Assignment 5.3
; Author: Richard Krasso
; Date: 16 March 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; use of JavaScript Object Collections
===========================================
*/

/*
Expected Output:
Last Name: Mozart, Genre: Classical, Rating: 10
Last Name: Williams, Genre: Contemporary Classical, Rating: 9
Last Name: Tchaikovsky, Genre: Classical, Rating: 10
Last Name: Beethoven, Genre: Classical, Rating: 10
Last Name: Horner, Genre: Contemporary Classical, Rating: 8


*/

// collection of Composers or Objects
const famousComposers = [
    {
      firstName: 'Wolfgang Amadeus',
      lastName: 'Mozart',
      genre: "Classical",
      rating: 10
    },
    {
      firstName: 'John',
      lastName: 'Williams', 
      genre: "Contemporary Classical",
      rating: 9
    },
    {
      firstName: 'Pyotr Llyich',
      lastName: 'Tchaikovsky'  ,
      genre: "Classical",
      rating: 10
    },
    {
      firstName: 'Ludwig van',
      lastName: 'Beethoven'  , 
      genre: "Classical",
      rating: 10
    },
    {
      firstName: 'James',
      lastName: 'Horner'  , 
      genre: "Contemporary Classical",
      rating: 8
    }
  ];
  
  // output
  console.log('-- DISPLAYING  A LIST OF FAMOUS COMPOSERS --')
  let composers = 1
  famousComposers.forEach((composers) => {
    console.log(
        "Last Name" + '. ' + composers.firstName + ' ' + composers.lastName + ", Genre: " + composers.genre + ", Rating:  " + composers.rating);
    composers++
  })