const obj: object = {
    "bloop": "Bloop"
}


interface Trainer {
    name: string,
    age: number,
    intro(): string
}

const me: Trainer = {
    name: 'jh',
    age: 30,
    intro: function () {
        return `Hello, my name is ${this.name} and I am ${this.age} years old`;
    }
}

console.log(me.intro());

const trainers: Trainer[] =[
    me,
    {
        name: 'cg',
        age: 31,
        intro: () => "I will never replace jordan"
    }
]

interface Flyable {
    readonly maxHeight: number,
    fly() :void,
    mechanical?: boolean
}

class Bird implements Flyable {

    readonly maxHeight: number;

    constructor(maxHeight: number) {
        this.maxHeight = maxHeight;
    }

    fly(): void {
        console.log("Flap flap");
        
    }
    
}