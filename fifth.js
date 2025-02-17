// 5 falsy value 0,"",undefined,null, and nan

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));


let money = 100;
if (money) {
    console.log("don't spend it ;)");
}
else {
    console.log("you should get a job!")
}

let height = 12;

if (height) {
    console.log("height is defined!");
}
else {
    console.log("height is not defined");
}

const age = 18;

if (age === 18) console.log("you just become an adult !");

const favourite = Number(prompt("enter your favourite number:"));
console.log(favourite);
console.log(typeof (favourite));


if (favourite === 45) {
    console.log("cool! 45 is the amazing number");
} else if (favourite === 7) {
    console.log("7 is also cool number!");
}
else {
    console.log('number is not 23 or 7');
}


const hasDriverLicence = true;
const hasGoodVision = true;

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);

console.log(!hasDriverLicence);

const DriveLicence = hasDriverLicence && hasGoodVision;

if (DriveLicence) {
    console.log("dev is able to drive!");
}
else {
    console.log("dev is not able to drive!");
}

const istired = true;
console.log(hasDriverLicence || hasGoodVision || istired);