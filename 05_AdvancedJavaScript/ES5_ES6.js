// let + const

const player2 = 'bobby';
let experience2 = 100;
let wizardLevel2 = false;

if (experience > 90) {
    let wizardLevel = true;
}

// let does only apply inside the if(){}
// const cannot be reasigned or updated
// we won't use var anymore, only const and let

//a const variable can't be modified in nature, but it can be modified in object's content

const obj = {
    player: 'bobby',
    experience: 100,
    wizardlevel: false
}

// Destructuring

const player3 = obj.player;
const experience3 = obj.experience;
let wizardLevel3 = obj.wizardlevel;

const { player, experience } = obj;
let { wizardLevel } = obj;

// Now it is possible to have dynamic properties values

const name2 = "John snow";

const obj2 = {
    [name2]: 'hello',
    [1 + 2]: 'hihi'
}

// Object properties

const a = 'Simon';
const b = true;
const c = {};

const obj3 = { a, b, c }

// Template strings

const name3 = "Sally";
const age = 34;
const pet = "horse";

// Instead of doing this:
const greeting = "Hello " + name3 + " you seem to be doing " + greeting + "!"

// You can do this:
const greetingBest = `Hello ${name3} you seem to be ${age - 10}. What a lovely ${pet} you have.`

// default arguments

function greet(name4 = '', age2 = 30, pet2 = 'cat') {
    return `Hello ${name4} you seem to be ${age2 - 10}. What a lovely ${pet2} you have.`
}

// Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// sym2 === sym3 returns false, because they are unique

// arrow functions

const add = (a, b) => a + b;

//Instead of

function add2(a, b) {
    return a + b;
}

