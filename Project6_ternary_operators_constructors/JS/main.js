        // Tenary Operators
function Ride_Function() {
    var height, canRide;
    height = document.getElementById("Height").value;
    canRide = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = canRide + " to ride.";
}

function AgeFunc() {
    var age, ofAge;
    age = document.getElementById("Age").value;
    ofAge = (age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Cvote").innerHTML = ofAge + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jamie = new Vehicle("BMW", "M3 Sport", 2009, "Purple");
var Katelyn = new Vehicle("Dodge", "RAM 2500", 2020, "Dark Green");
var Peter = new Vehicle("Volkswagen", "Jetta", 1999, "Orange");
function Afunction() {
    document.getElementById("KeyandConstruct").innerHTML = 
    "Jamie drives a " + Jamie.Vehicle_Color + "-colored " + Jamie.Vehicle_Model + 
    " manufactured in " + Jamie.Vehicle_Year;
}
        // Nested Function
function outerFunction() {
    let count = 0;

    function innerFunction() {
        count++;
        document.getElementById("Nested_Function").innerHTML = "This has been clicked " + count + " time(s).";
    }

    innerFunction();
}