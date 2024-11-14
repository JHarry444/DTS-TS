"use strict";
const obj = {
    "bloop": "Bloop"
};
const me = {
    name: 'jh',
    age: 30,
    intro: function () {
        return `Hello, my name is ${this.name} and I am ${this.age} years old`;
    }
};
console.log(me.intro());
const trainers = [
    me,
    {
        name: 'cg',
        age: 31,
        intro: () => "I will never replace jordan"
    }
];
class Bird {
    constructor(maxHeight) {
        this.maxHeight = maxHeight;
    }
    fly() {
        console.log("Flap flap");
    }
}
