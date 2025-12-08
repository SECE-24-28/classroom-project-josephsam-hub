// Variables
let name = "John";
const age = 25;

// Function
function greet(person) {
    return `Hello, ${person}!`;
}

// Arrow Function
const add = (a, b) => a + b;

// Array
let numbers = [1, 2, 3, 4, 5];

// Array Methods
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 2);

// Object
let user = {
    name: "Alice",
    age: 30,
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};

// Conditionals
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Loops
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach(num => console.log(num));

// DOM Manipulation (if in browser)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.querySelector('.btn-primary');
        if (btn) {
            btn.addEventListener('click', () => {
                console.log('Button clicked!');
            });
        }
    });
}

console.log(greet(name));
console.log(add(5, 3));
console.log(user.greet());
