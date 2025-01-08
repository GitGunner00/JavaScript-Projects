window.alert("Welcome!")

var X = 10;
function Num_1() {
    console.log("Num_1:", 20 + X);
    document.write(20 + X + "<br>");
}

function Num_2() {
    var X = 30;
    console.log("Num_2:", 20 + X);
    document.write(20 + X + "<br>");
}

Num_1();
Num_2();

function Gdate() {
    if (new Date() .getHours() < 19) {
        document.getElementById("Time").innerHTML = "Greetings Earthling";
    } else {
        document.getElementById("Time").innerHTML = "Evening Earthling";
    }
}

function TimeFunc() {
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It's morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It's afternoon!";
    }
    else {
        Reply = "It's evening time!";
    }
    document.getElementById("TimeDay").innterHTML = Reply;

}