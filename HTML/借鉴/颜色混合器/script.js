//set all buttoms turned off
var redOn = false;
var greenOn = false;
var blueOn = false;
var magentaOn = false;
var yellowOn = false;
var cyanOn = false;
//change room color
function farbe(x) {
    document.getElementById("room").style
    .backgroundColor = x;
    document.getElementById("out2")
    .innerHTML = x;
    document.getElementById("out2").style
    .color = x;
}
//change canvas color
function cor(x) {
    document.getElementById("canvas")
    .style
    .backgroundColor = x;
    document.getElementById("out4")
    .innerHTML = x;
    document.getElementById("out4").style
    .color = x;
}
//output room color
function colore() {
    if (redOn && greenOn && blueOn) {
        farbe("white");
        document.getElementById("out1")
        .innerHTML = "#FF0000 + #00FF00 + #0000FF = #FFFFFF";
    }
    if (redOn && greenOn && !blueOn) {
        farbe("yellow");
        document.getElementById("out1")
        .innerHTML = "#FF0000 + #00FF00 = #FFFF00";
    }
    if (redOn && !greenOn && blueOn) {
        farbe("magenta");
        document.getElementById("out1")
        .innerHTML = "#FF0000 + #0000FF = #FF00FF";
    }
    if (redOn && !greenOn && !blueOn) {
        farbe("red");
        document.getElementById("out1")
        .innerHTML = "#FF0000";
    }
    if (!redOn && greenOn && blueOn) {
        farbe("cyan");
        document.getElementById("out1")
        .innerHTML = "#00FF00 + #0000FF = #00FFFF";
    }
    if (!redOn && greenOn && !blueOn) {
        farbe("green");
        document.getElementById("out1")
        .innerHTML = "#00FF00";
    }
    if (!redOn && !greenOn && blueOn) {
        farbe("blue");
        document.getElementById("out1")
        .innerHTML = "#0000FF";
    }
    if (!redOn && !greenOn && !blueOn) {
        farbe("black");
        document.getElementById("out1")
        .innerHTML = "#000000";
    }
}
//button onClick functions
function red() {
    redOn = !redOn;
    colore();
    if (redOn) {
        document.getElementById("redbutton")
        .style.backgroundColor = "red"
    } else {
        document.getElementById("redbutton")
        .style
        .backgroundColor = "darkRed"
    }
}
function green() {
    greenOn = !greenOn;
    colore();
    if (greenOn) {
        document.getElementById("greenbutton")
        .style.backgroundColor = "seagreen"
    } else {
        document.getElementById("greenbutton")
        .style
        .backgroundColor = "darkGreen"
    }
}
function blue() {
    blueOn = !blueOn;
    colore();
    if (blueOn) {
        document.getElementById("bluebutton")
        .style.backgroundColor = "blue"
    } else {
        document.getElementById("bluebutton")
        .style
        .backgroundColor = "darkBlue"
    }
}
//canvas output
function couleur() {
    if (cyanOn && magentaOn && yellowOn) {
        cor("black");
        document.getElementById("out3")
        .innerHTML = "#FFFF00 " + '&#8745' + "#00FFFF " + '&#8745' + "#FF00FF = #000000";
    }
    if (cyanOn && magentaOn && !yellowOn) {
        cor("blue");
        document.getElementById("out3")
        .innerHTML = "#00FFFF " + '&#8745' + "#FF00FF = #0000FF";
    }
    if (cyanOn && !magentaOn && yellowOn) {
        cor("green");
        document.getElementById("out3")
        .innerHTML = "#00FFFF " + '&#8745' + "#FF0000 = #00FF00";
    }
    if (!cyanOn && magentaOn && yellowOn) {
        cor("red");
        document.getElementById("out3")
        .innerHTML = "#FFFF00 " + '&#8745' + "#FF00FF = #FF0000";
    }
    if (cyanOn && !magentaOn && !yellowOn) {
        cor("cyan");
        document.getElementById("out3")
        .innerHTML = "#00FFFF";
    }
    if (!cyanOn && magentaOn && !yellowOn) {
        cor("magenta");
        document.getElementById("out3")
        .innerHTML = "#FF00FF";
    }
    if (!cyanOn && !magentaOn && yellowOn) {
        cor("yellow");
        document.getElementById("out3")
        .innerHTML = "#FFFF00";
    }
    if (!cyanOn && !magentaOn && !yellowOn) {
        cor("white");
        document.getElementById("out3")
        .innerHTML = "#FFFFFF";
    }
}
//button onClick functions
function yellow() {
    yellowOn = !yellowOn;
    couleur();
}
function cyan() {
    cyanOn = !cyanOn;
    couleur();
}
function magenta() {
    magentaOn = !magentaOn;
    couleur();
}