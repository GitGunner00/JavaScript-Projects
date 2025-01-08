// main.js

// Function to update paragraph content
function updateParagraph() {
    // Assign two variables
    let num1 = 10;
    let num2 = 20;

    // Perform an operation (e.g., addition)
    let sum = num1 + num2;

    // Update the paragraph with the result
    document.getElementById("output").textContent = "The sum is: " + sum;
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("conc").innerHTML = sentence;
}

function myFunction2() {
    var mine = "This is my += operator.";
    mine += " This part is added using that operator.";
    document.getElementById("two").innerHTML = mine;
}