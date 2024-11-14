"use strict";
let num = 12;
// num = "12";
// num.split()
let str = "Hello!";
str.split("");
const n = null;
const nums = [2, 4, 6, 8, 10];
const words = ["a", "b", "c"];
const tuple = ["jh", "trainer", 30];
// tuple[2] = "gg"
// tuple.unshift(99);
// console.log(tuple[0].charAt(0));
let val = 12;
val = "123";
console.log(val.charAt(0));
let what = "123";
// what.charAt(0)
// console.log(what > 12);
console.log(what === "123");
const me = {
    name: 'jh',
    age: 30
};
function print(p) {
    console.log(p);
}
function add(a, b) {
    if (Math.random() > 0.5)
        return a + b;
    else
        return 0;
}
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
})(Day || (Day = {}));
let day = Day.Monday;
console.log("DAY:", day);
let dayStr = Day[2];
console.log("DAY:", dayStr);
let wut = "twenty seven";
console.log(wut > 20);
console.log(wut.charAt(0));
if (typeof wut === "string") {
    console.log(wut.charAt(0));
}
