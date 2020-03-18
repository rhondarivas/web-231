/*============================================================
; Title: Assignment 5.4
; Author: Richard Krasso
; Date: 16 March 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; use of JavaScript Filtering/Reducing Comlext Data Structures
===============================================================
*/

/*

Last Name: Mozart, Genre: Classical
Last Name: Williams, Genre: Contemporary Classical
Last Name: Tchaikovsky, Genre: Classical
Last Name: Beethoven, Genre: Classical, Rating
Last Name: Horner, Genre: Contemporary Classical

Expected Output:
Last Name: Mozart, Rating: 10
Last Name: Williams, Rating: 9
Last Name: Tchaikovsky, Rating: 10
Last Name: Beethoven, Rating: 10
Last Name: Horner, Rating: 8

*/

// collection of Composers or Objects
const composersRating = [
    {
      firstName: 'Wolfgang Amadeus',
      lastName: 'Mozart',
      rating: 10
    },
    {
      firstName: 'John',
      lastName: 'Williams',
      rating: 9
    },
    {
      firstName: 'Pyotr Llyich',
      lastName: 'Tchaikovsky'  ,
      rating: 10
    },
    {
      firstName: 'Ludwig van',
      lastName: 'Beethoven'  ,
      rating: 10
    },
    {
      firstName: 'James',
      lastName: 'Horner'  ,
      rating: 8
    }
  ];
  
  const composersGenre = [
    {
      firstName: 'Wolfgang Amadeus',
      lastName: 'Mozart',
      genre: "Classical",
    },
    {
      firstName: 'John',
      lastName: 'Williams', 
      genre: "Contemporary Classical",
    },
    {
      firstName: 'Pyotr Llyich',
      lastName: 'Tchaikovsky'  ,
      genre: "Classical",
    },
    {
      firstName: 'Ludwig van',
      lastName: 'Beethoven'  , 
      genre: "Classical",
    },
    {
      firstName: 'James',
      lastName: 'Horner'  , 
      genre: "Contemporary Classical",
    }
  ];
  
  // output
  console.log('-- DISPLAYING  A LIST OF FAMOUS COMPOSERS  BY GENRE--')
  let composersGenre1 = 1
  composersGenre.forEach((composers) => {
    console.log(
        "Last Name" + '. ' + composers.lastName + ', ' + composers.firstName  + ' ' + "Genre: " + composers.genre);
    composers++
  })

  //new line
console.log("\n")

  console.log('-- DISPLAYING  A LIST OF FAMOUS COMPOSERS BY RATING--')
  let composersRating1 = 2
  composersRating.forEach((composers) => {
    console.log(
        "Last Name" + '. ' + composers.lastName + ', ' + composers.firstName  + ' ' + "Rating: " + composers.rating);
    composers++
  })