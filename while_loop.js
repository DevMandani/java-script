'use strict'

for (let rep = 1; rep < 10; rep++) {
    console.log(`lifting weight repitation ${rep} 🏋️`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`lifting weight repitation ${rep} 🏋️`);

    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`you rolled an ${dice}`);

    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) {
        console.log('loop is about to end....!');
    }
}