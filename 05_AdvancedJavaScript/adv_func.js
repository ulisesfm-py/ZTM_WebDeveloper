const first = () => {
    const greet = 'Hi';
    const second = () => {
        const name = "bobby";
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// the child scope always has access to the parent scope. 

//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriendMultiply(5);
multiplyBy5(3);

//Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);