// Proxy Task

let object = {};
let handler = {
    set(target, prop, value) {
        switch (prop) {
            case "fullName":
                if (value.length == 7) target[prop] = value;
                break;
            case "address":
                if (typeof(value) == "string") target[prop] = value;
                break;
            case "age":
                if (50 <= value <= 60) target[prop] = value;
                break;
            default:
                console.log(`${prop} property is not found!`);
        }
    }
};
let proxy = new Proxy(object, handler);
proxy.fullName = "medomed";
proxy.address = "menoufia";
proxy.age = 25;
console.log(object);

// ============================================================= //

// Shape Task

import { Circle, Rectangle, Shape, Square } from "./shape.js";

let rect = new Rectangle(100, 200);
console.log(rect.area());
console.log(rect.toString());

let square = new Square(200);
console.log(square.area());
console.log(square.toString());

let circle = new Circle(4.5);
console.log(circle.area());
console.log(circle.toString());

// =========================================================== //

// Fibonacci Series

let arr = [0, 1];

function fibonacci(n) {
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    console.log(arr);
}
fibonacci(10);

// ========================================================== //

// Iterator Task

let person = {
    id: 1000,
    fullName: "Mahmoud Ahmed",
    age: 25,
    address: "menoufia"
}
person[Symbol.iterator] = iterable;

function* iterable() {
    yield* Object.values(person);
}

console.log(person);

for (let i of person) {
    console.log(i);
}