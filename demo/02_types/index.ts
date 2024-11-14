let num: number = 12;

// num = "12";
// num.split()

let str: string = "Hello!";

str.split("");

const n: null = null;


const nums: number[] = [2, 4, 6, 8, 10];

const words: Array<string> = ["a", "b", "c"];

const tuple: [string, string, number] = ["jh", "trainer", 30];

// tuple[2] = "gg"

// tuple.unshift(99);

// console.log(tuple[0].charAt(0));

let val: any = 12;

val = "123";
console.log(val.charAt(0));

let what: unknown = "123";

// what.charAt(0)
// console.log(what > 12);
console.log(what === "123");

const me: object = {
    name: 'jh',
    age: 30
}

function print(p: unknown): void {
    console.log(p);

}

function add(a: number, b: number): number {
    if (Math.random() > 0.5) return a + b;
    else return 0;
}

enum Day{
    Monday, Tuesday, Wednesday
}

let day: Day = Day.Monday;

console.log("DAY:", day);

let dayStr: string = Day[2];

console.log("DAY:", dayStr);
