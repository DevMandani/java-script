'use strict'

const friends = ['dev', 'rahul', 'dhruv'];
const newlength = friends.push('jay');

console.log(friends);
console.log(newlength);


friends.unshift('john');
console.log(friends);

friends.pop();
console.log(friends);

console.log(friends.indexOf('dev'));


friends.push(23);
console.log(friends.includes(23));
console.log(friends.indexOf('bob'));
console.log(friends.includes('dev'));
console.log(friends.includes('bob'));

if (friends.includes('dev')) {
    console.log('you have a friend called dev');
}


// Function to calculate tip based on the bill
const caltip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// Array of bills
const bills = [125, 555, 44];

// Use map to apply caltip function to each bill and create the tip array
const tip = bills.map(caltip);


const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
// Output the bills and corresponding tips
console.log(bills, tip, total);
