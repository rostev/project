"use strict";

let numberOfFilms;

//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt("How many films have you watched?", "");

    while (numberOfFilms === 0 || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you watched?", "");
    }
}

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert("FEW");
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        alert("NORMAL");
    } else if (numberOfFilms >= 30) {
        alert("MANY!!!");
    } else {
        alert("ERROR!!!");
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        const lastFilm = prompt("One of the last movies you watched?", "");
        const numberOfPoints = +prompt("How many points would you rate the film?", "");

        if (lastFilm === null || lastFilm.length === 0 || lastFilm.length > 50) {
            i--;
            continue;
        } else if (numberOfPoints === null || numberOfPoints.length === 0 || numberOfPoints.length > 50) {
            i--;
            continue;
        }
        personalMovieDB.movies[lastFilm] = numberOfPoints;
    }
}

//detectPersonalLevel();
//rememberMyFilms();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenders(object) {
    for (let i = 0; i < 3; i++) {
        object.genres[i] = prompt(`Your favorite genre ${(i + 1)}: `);
    }
}

showMyDB(personalMovieDB.privat);
writeYourGenders(personalMovieDB);

for (let i = 0; i < personalMovieDB.genres.length; i++) {
    console.log(personalMovieDB.genres[i]);
    console.log("=======================");
}

console.log(personalMovieDB);
console.log("=======================");
