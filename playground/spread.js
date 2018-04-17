// function add(a, b) {     return a + b; } console.log(add(3,5)); var toAdd =
// [5,9]; console.log(add(...toAdd)); var groupA = ['Jen', 'Cory']; var groupB =
// ['Vikcram']; var final = [...groupA,3, ...groupB]; console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// Hi Andrew, you are 25 function Hi(name, age) {     console.log('Hi ' + name +
// ', you are ' + age); } Hi(...person); Hi(...personTwo);

greetingHi = (name, age) => `Hi ${name}, you are ${age}`;

console.log(greetingHi(...person));
console.log(greetingHi(...personTwo));

var names = ['Mike', 'Ben'];
var final = [
    'Andrew', ...names
];

// final.forEach(function (name) {
//     console.log('Hi ' + name);
// });

// final.forEach((name) => console.log(`Hi ${name}`));

['Andrew', ...names].forEach((name)=> console.log(`Hi ${name}`));