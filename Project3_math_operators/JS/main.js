function addFunction() {
    var add = 200 + 300;
    document.getElementById("Math").innerHTML = "200 + 300 = " + add;
}

function minusFunction() {
    var minus = 500 - 300;
    document.getElementById("Math2").innerHTML = "500 - 300 = " + minus;
}

function multiplyFunction() {
    var times = 250 * 2;
    document.getElementById("Math3").innerHTML = "250 X 2 = " + times;
}

function divideFunction() {
    var divide = 500 / 2;
    document.getElementById("Math4").innerHTML = "500 / 2 = " + divide;
}

function multiOperation() {
    var multi = (500 / 2) + 125 * 2;
    document.getElementById("Math5").innerHTML = "500 / 2 + 125 x 2 = " + multi
}

function modFunction() {
    var mod = 500 % 16;
    document.getElementById("Math6").innerHTML = "When you divide 500 by 4 you have a remainder of: " + mod;
}

function unaryFunction() {
    var Z = 500;
    document.getElementById("Math7").innerHTML = -Z;
}

var X = 5;
X++;
document.write(X);

var Y = 5;
Y--;
document.write(Y);

window.alert(Math.random() * 100);