
'use strict';
const friend1 = "dev";
const friend2 = "ayush";
const friend3 = "ramesh";

const friends = ['dev', 'aysuh', 'ramesh'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

friends[2] = "harsh";
console.log(friends);


const firstname = "dev";
const dev = [firstname, 'mandani', 2025 - 2006, friends];

console.log(dev);
console.log(dev.length);


const calAge = function (birthyear) {
    return 2025 - birthyear;
}

const yearsnew = [1990, 1967, 2002, 2010, 2018];

const age1 = calAge(yearsnew[0]);
const age2 = calAge(yearsnew[1]);
const age3 = calAge(yearsnew[2]);
const age4 = calAge(yearsnew[3]);


console.log(age1, age2, age3, age4);

