'use strict'

const jonas = {
    firstname: 'jonas',
    lastname: 'latus',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['rahul', 'jay', 'krish'],

};
console.log(jonas);

console.log(jonas.lastname);
console.log(jonas['firstname']);

const interestedIn = prompt('what do you want to know about the jonas choose between firstname, lastname, age , job,friends');



if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}
else {
    console.log('worng choice...!');
}


jonas.location = 'india';
jonas['twitter'] = '@devmandani';
console.log(jonas);



console.log(`${jonas.firstname} has ${jonas.friends.length} and his bestfriends is called ${jonas.friends[0]}`);



const dev = {
    firstname1: 'dev',
    lastname: 'mandani',
    birthyear: 2006,
    job1: 'student',
    friends1: ['michel', 'rahul', 'rohit'],
    hasdriverslicense: true,


    // calcAge: function (birthyear) {
    //     return 2037 - birthyear;
    // }

    calcAge: function () {

        this.age = 2025 - this.birthyear;
        return this.age;
    }

};


console.log(dev.calcAge());
console.log(dev.age);


console.log(`${dev.firstname1} is a ${dev.age}-years old ${dev.job1}, and he has a driving license`);

// console.log(dev['calcAge'](2006));