function Dictionary() { //CREATES A DICTIONARY
    var Cars = {
        Make:"BMW",
        Model:"M5",
        Color:"Purple",
        Year:"2008",
        Horsepower:"550"
    };
    delete Cars.Color; //DELETES OUTPUT
    document.getElementById("_dictionary").innerHTML = Cars.Color;
}