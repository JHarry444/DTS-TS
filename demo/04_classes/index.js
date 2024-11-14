"use strict";
class Vehicle {
    constructor(_make, model, speed, colour) {
        this.colour = colour;
        this._make = _make;
        this.model = model;
        this.speed = speed;
    }
    getMake() {
        return this._make;
    }
    setMake(make) {
        this._make = make;
    }
    getSpeed() {
        return this.speed;
    }
    setSpeed(speed) {
        // debugger;
        if (speed < 0 && speed < 200)
            this.speed = Math.floor(speed);
        else
            console.log("Wrong speed, ya idjit.");
    }
}
const v = new Vehicle("fiat", "panda", 1, "black and white");
v.getMake();
v.setMake("Fiat");
class Car extends Vehicle {
    constructor(_make, model, speed, colour) {
        super(_make, model, speed, colour);
    }
    accelerate() {
        this.speed += this.speed * 5;
    }
}
class Animal {
}
// const a = new Animal(); can't instantiate an abstract class
class Cat extends Animal {
    makeNoise() {
        console.log("MEOW");
    }
}
class Lion extends Cat {
    makeNoise() {
        console.log("ROAR");
    }
    bask() {
        console.log("soaking up some rays");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("WOOF");
    }
}
const kitty = new Lion();
kitty.makeNoise();
const leo = kitty;
kitty.bask();
