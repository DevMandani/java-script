'use strict';


function calAge1(birthYear) {

    return 2037 - birthYear;

}
const age1 = calAge1(1589);
console.log(age1);


const calAge2 = function (birthYear) {
    return 2036 - birthYear;
}

const age2 = calAge2(1334);
console.log(age2);


//arrow function

const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(2012);
console.log(age3);


const yearsUntile = (birthYear, Fistname) => {
    const age = 2073 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${Fistname} is retires in ${retirement} years`;
}

console.log(yearsUntile(1991, "dev"));
console.log(yearsUntile(2000, "bob"));


//function in another function
function cutFruitPieces(fruit) {
    return fruit * 4;

}

function fruitProccesor(apple, banana) {
    const applepieces = cutFruitPieces(apple);
    const banaPieces = cutFruitPieces(banana);
    const juice = `juice with ${applepieces} apples and ${banaPieces} banana`;
    return juice;
}

console.log(fruitProccesor(2, 4));