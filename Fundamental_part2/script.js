'use strict';

let DriveLicence = false;
const passTest = true;

if (passTest) DriveLicence = true;

if (DriveLicence) console.log("i can drive");

// const interface = 'audio';

// const private = 34;

function logger() {
    console.log("my name is dev");

}


//calling,running ,or invoking the function
logger();
logger();
logger();



function fruit(apples, oranges) {

    const juice = `juice with ${apples} apples and ${oranges} oranges`;

    return juice;

}

const applejuice = fruit(5, 4);
console.log(applejuice);

const appleorange = fruit(2, 5);
console.log(appleorange);