function Sentence() {
    var part1 = "This is ";
    var part2 = "a sentence ";
    var part3 = "made of ";
    var part4 = "four variables.";
    var sentenceWhole = part1.concat(part2, part3, part4);
    document.getElementById("ConcatMethod").innerHTML = sentenceWhole;

}

function math() {
    var one = "Twenty five";
    var two = " plus";
    var three = " seventy five";
    var four = " equals 100.";
    var Addmath = one.concat(two, three, four); // Concatenate the strings
    document.getElementById("mathString").innerHTML = Addmath;
}

function SliceMethod() {
    var Sentence = "This is the use of the slice method.";
    var Section = Sentence.slice(23,35);
    document.getElementById("slice").innerHTML = Section;
}

function toUpper() {
    let text = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML =
    text.toUpperCase();
}

function search() {
    var sentence = "This is the use of the search method";
    var WordSearch = "method";
    var result = sentence.includes(WordSearch)
        ? 'The word "{WordSearch}" was found!'
        : 'The Word "{WordSearch}" was not found.';
    document.getElementById("searchResult").innerHTML = result;
}

function Nstring() {
    var X =100;
    document.getElementById("NumString").innerHTML = X.toString();
}

function PrecisionMethod() {
    var Y = 3.1415926535;
    document.getElementById("Pmethod").innerHTML = Y.toPrecision(5);
}

function fixed() {
    var num = 1995.3255434;
    var fixedNum = num.toFixed(2);
    document.getElementById("FixedResult").innerHTML = fixedNum;
}

function Valuemethod() {
    var Vmethod = new Sentence();
    document.getElementById("SentenceValue").innerHTML = mySentence.valueOf();
}