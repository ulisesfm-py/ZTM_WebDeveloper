'Turtle'.padStart(10); //returns string of total 10 spaces, including the string.

'Turtle.'.padEnd(10); //same, but the spaces come at the end.

const fun = (a, b, c, d,) => {
    console.log(a);
}

fun(1, 2, 3, 4,); //This works, it's just sintactic

Object.values;
Object.entries;
Object.keys;

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

//now you can do

Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})