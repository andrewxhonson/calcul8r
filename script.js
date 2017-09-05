function calculate() {
    try {
        var result = eval(document.getElementById("input").value);
        if (typeof result !== "undefined") {
            document.getElementById("output").value = result;
        } 
    } catch (e) {
       // if (e instanceof SyntaxError) {
            document.getElementById("output").value = "ERROR!";
        // }
    }
    this.blur();
}
function clearScreen() {
    document.getElementById("input").value = "";
    this.blur();
}

function addToScreen() {
    var symbol;
    if (this.getAttribute("name") === "plus") {
        symbol = "+";
    } else if (this.getAttribute("name") === "minus") {
        symbol = "-";
    } else if (this.getAttribute("name") === "mult") {
        symbol = "*";
    } else if (this.getAttribute("name") === "divi") {
        symbol = "/";
    } else {
        symbol = this.getAttribute("name");
    }
    document.getElementById("input").value += symbol;
    this.blur();
}


var buttons = document.getElementById("inputs");
for (var i = 0; i < buttons.childNodes.length; i++) {
    if(buttons.childNodes[i].tagName === "BUTTON") {
        buttons.childNodes[i].addEventListener("click", addToScreen);
    }
}
document.getElementById("equals").addEventListener("click", calculate);
document.getElementById("clear").addEventListener("click", clearScreen);


window.onkeyup = function(e) {
    var symbol = null;
    var key = e.keyCode ? e.keyCode : e.which;
    if (key === 96) { 
        symbol = "0";
    } else if (key === 97) {
        symbol = "1";
    } else if (key === 98) {
        symbol = "2";
    } else if (key === 99) {
        symbol = "3";
    } else if (key === 100) {
        symbol = "4";
    } else if (key === 101) {
        symbol = "5";
    } else if (key === 102) {
        symbol = "6";
    } else if (key === 103) {
        symbol = "7";
    } else if (key === 104) {
        symbol = "8";
    } else if (key === 105) {
        symbol = "9";
    } else if (key === 107) {
        symbol = "+";
    } else if (key === 111) {
        symbol = "/";
    } else if (key === 109) {
        symbol = "-";
    } else if (key === 106) {
        symbol = "*";
    } else if (key === 13) {
        symbol = "=";
    } else if (key === 67) {
        symbol = "c";
    } else {
        symbol = null
    }
    if (symbol !== null) {
        if (symbol === "=") {
            calculate();
        } else if (symbol === "c") {
            clearScreen();
        } else {
            document.getElementById("input").value += symbol;
        }
    } 
}