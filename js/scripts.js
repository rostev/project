"use strict";
/*

/!*
const number = 7.4;

console.log(number / -0);
console.log("=======================");
console.log("string" * 9);

const string = "Doris";
console.log("=======================");
console.log(string);

const bool = true;
console.log("=======================");
console.log(bool);

/!*console.log("=======================");
console.log(value);*!/

let und;
console.log("=======================");
console.log(und);
*!/

/!*
const obj = {
    firstName: "Ruprecht",
    lastName: "Freeman",
    age: 40,
    isMarried: true
};

console.log("=======================");
console.log(obj.firstName);

/!*
console.log("=======================");
console.log(obj["firstName"]);*!/

const array = [1, 2, 3, 4, 5,];

console.log("=======================");
console.log(array[0]);*!/

/!*
const result = confirm("Are you here?");
console.log(result);*!/

/!*
const answer = prompt("What is your name?", "Boris");
console.log(+answer + 5);*!/

const answers = [];

answers[0] = prompt("What is your first name?", "");
answers[1] = prompt("What is your last name?", "");
answers[2] = +prompt("How old are you ?", "");

console.log(typeof (answers));*/

/*
const category = "toys";

console.log(`https://someurl.com/${category}`);
console.log("=======================");

const user = "Boris";
alert(`Hello, ${user}`);*/

/*
console.log("array" + " - object");
console.log("=======================");*/

const numberOfFilms = +prompt("How many films have you watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt("One of the last movies you watched?", "");
const numberOfPoints = +prompt("How many points would you rate the film?", "");

const lastFilm1 = prompt("One of the last movies you watched?", "");
const numberOfPoints1 = +prompt("How many points would you rate the film?", "");

personalMovieDB.movies[lastFilm] = numberOfPoints;
personalMovieDB.movies[lastFilm1] = numberOfPoints1;

console.log(personalMovieDB);
console.log("=======================");
