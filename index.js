// Function expression
const divide = function(a, b) {
    return a / b;
};

console.log(divide(10, 2)); // 5

// Arrow function with implicit return
const square = x => x * x;

console.log(square(4)); // 16

// Arrow function with multiple parameters
const add = (a, b) => a + b;

console.log(add(3, 7)); // 10

// Arrow function with multiple lines
const subtract = (a, b) => {
    console.log(`Subtracting ${b} from ${a}`);
    return a - b;
};

console.log(subtract(10, 3)); // 7

// Using arrow functions in .map()
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]

// Another example using arrow function
const greetings = names => names.map(name => `Hello, ${name}!`);

console.log(greetings(["Alice", "Bob", "Charlie"]));
// ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"]
