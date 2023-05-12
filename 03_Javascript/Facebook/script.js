// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

var user = {
    username: "ulisesfm",
    password: "pepito23",
};


// 2. Create an array which contains the object you have made above and name the array "database".

var database = [
    {
        username: "ulisesfm",
        password: "pepito23",
    },
    {
        username: "cris",
        password: "p1234",
    },
    {
        username: "xavi",
        password: "holanda",
    }
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var newsFeed = [
    {
        username: "Javi",
        timeline: "what\'s up dog?"
    },
    {
        username: "Gerard",
        timeline: "Policia nacional"
    },
    {
        username: "Patrick",
        timeline: "Bailando bajo la lluvia"
    }
];

// Create a function to check user and password

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

signIn(userNamePrompt, passwordPrompt)