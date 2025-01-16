function CallLoop() {
    let counter = 1;
    let result = "";

    while (counter <= 10) {
        result += "Number: " + counter + "<br>";
        counter++;
    }

    document.getElementById("Loop").innerHTML = result;
}

function LengthProp() {
    let str = document.getElementById("length").innerHTML;
    let lengthDisplay = document.getElementById("result");

    lengthDisplay.innerHTML = "The length of the text is: " + str.length;
}

var Instruments = ["Guitar", "Violin", "Drums", "Piano"];
var Content = "";
var Y;
function LoopInst() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("InsLoop").innerHTML = Content;
}

function pics() {
    var CatPic = [];
    CatPic[0] = "Sleeping";
    CatPic[1] = "Playing";
    CatPic[2] = "Eating";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + CatPic[1] + ".";
}

function arrayFunc(){
    var MyArray = [];
    MyArray[0] = "Fish";
    MyArray[1] = "Cat";
    MyArray[2] = "Dog";
    MyArray[3] = "Horse";
    document.getElementById("Array").innerHTML = "These are different animals: " + MyArray[0] + "!"; 
}

function ConstFunc() {
    const Inst = {type:"Guitar", brand:"Fender", color:"Red"};
    Inst.color = "Green";
    Inst.price = "$1000";
    document.getElementById("Constant").innerHTML = "The cost of the " + Inst.type + " was " + Inst.price;
}

function Const2() {
    const Car = {make: "BMW", model: "3 Series", year: "2008"};
    Car.year = 2024;
    Car.owner = "Gunner";
    document.getElementById("Mine").innerHTML = 
    "The car is a " + Car.year + Car.make + Car.model + ", owned by " + Car.owner + ".";
}

var X = 100;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

function Return() {
    return Math.PI;
}

function showResult() {
    const result = Return();
    document.write(result);
}

let Animal = {
    Species: "Polar Bear",
    Habitat: "Arctic conditions",
    Weight: "550lbs",
    Length: "6 Feet",
    description : function() {
        return "This is the info about this species " + this.Species + this.Habitat + this.Weight + this.Length;
    }
};
document.getElementById("AnimalObject").innerHTML = Animal.description();

