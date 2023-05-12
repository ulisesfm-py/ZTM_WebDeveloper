// condition ? expr1 : expr2;

function isUserValid(bool) {
    return bool;
}

//This is much cleaner than
var answer = isUserValid(5 > 3) ? "you may enter" : "Access Denied";

//This
function condition() {
    if (isUserValid(5 > 3)) {
        return "You may enter";
    } else {
        return "Access denied";
    }
}

var answer2 = condition();

//switch statement

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}