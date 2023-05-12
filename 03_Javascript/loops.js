// How to do loops in JS

var todos = [

    "clean room",
    "play guitar",
    "study Python",
    "cooking"

]

// for loop

for (var i = 0; i < todos.length; i++) {
    console.log(i);
    console.log(todos[i] + "!")
}

// while loop

var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++;
}

// do + while loop

var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);

// forEach vs for

var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
    console.log(i);
}

todos.forEach(function (todo, i) {
    console.log(todo, i);
})

