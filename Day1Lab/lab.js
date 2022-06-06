// Task 1

let a = 1,
    b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

// Task 2

function Max(...arr) {
    return Math.max(...arr);
}

function Min(...arr) {
    return Math.min(...arr);
}
console.log(Max(1, 100, 250, 40, 270));
console.log(Min(1, 100, 250, 40, 270));


// Task 3

// a
let fruits = ["apple", "strawberry", "banana", "orange", "mango"];
let every = fruits.every((item) => { return typeof(item) == typeof("string") });
console.log(every);

// b
let some = fruits.some((item) => { return item.startsWith('a') });
console.log(some);

// c
let filter = fruits.filter((item) => { return item.startsWith('s') || item.startsWith('b') });
console.log(filter);

// d
let generated = fruits.map((item) => { return item });
console.log(generated);

// e
generated.forEach(item => {
    console.log(item);
});