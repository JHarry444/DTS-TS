abstract class Vehicle {
    private _make: string;
    public readonly model: string;
    protected speed: number;

    constructor(_make: string, model: string, speed: number, private colour: string) {
        this._make = _make;
        this.model = model;
        this.speed = speed;
    }

    getMake(): string {
        return this._make;
    }

    setMake(make: string) {
        this._make = make;
    }

    getSpeed(): number {
        return this.speed;
    }

    setSpeed(speed: number) {
        // debugger;
        if (speed < 0 && speed < 200) this.speed = Math.floor(speed);
        else console.log("Wrong speed, ya idjit.");
    }

    abstract accelerate(): void
}

const v: Vehicle = new Vehicle("fiat", "panda", 1, "black and white");

v.getMake();

v.setMake("Fiat");

class Car extends Vehicle {

    constructor(_make: string, model: string, speed: number, colour: string) {
        super(_make, model, speed, colour);
    }

    accelerate(): void {
        this.speed += this.speed * 5;
    }
}

abstract class Animal {

    abstract makeNoise(): void
}

// const a = new Animal(); can't instantiate an abstract class

class Cat extends Animal {

    makeNoise(): void {
        console.log("MEOW");

    }
}

class Lion extends Cat {
    makeNoise(): void {
        console.log("ROAR");
    }

    bask(): void {
        console.log("soaking up some rays");
    }
}

class Dog extends Animal {

    makeNoise(): void {
        console.log("WOOF");

    }
}

const kitty: Animal = new Lion();

kitty.makeNoise();

const leo: Lion = kitty as Lion;

(kitty as Lion).bask();