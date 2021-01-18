function randomNumericString(string, size) {
    string = " ";
    for (let i = 0; i < size; i++) {
        string += Math.round(Math.random() * 1000) + " ";
    }
    return string;
}
var sampleTextOne =
"A little bird fly to south for the winter. It was very cold, almost frozen bird. Hence, fly to a large space, after a cow there, in a pile of cow dung upon the bird, frozen bird lying on the dunghill, feel very warm, gradually recovered, it is warm and comfortable lying, and soon began to sing songs, a passing wildcat hear voices, see, follow the voice, wildcats quickly found lying on the dunghill, bird, pull it out."
var sampleTextTwo =
"Spring is coming. Spring is the first season of the year. In China, spring comes in February. It is still cold, but it is getting warmer and warmer. The days get longer and longer. The leaves on the trees begin to turn green. Then they come up green leaves in the spring wind on the ground. Spring is also sowing time season."
var sampleTextThree = " "
var font = "Arial";
var side = "left";
var size = 15;
var height = 1.5;
var weight = 400;
var textColor = "black";
var background = "white";
var overline = false;
var lineThrough = false;
var underline = false;
var decorationStyle = false;
var whichDecorationStyle = "solid";
var wavy = false;
var dotted = false;
var double = false;
var dashed = false;
var italic = false;
var hasShadow = false;
var shadowHorizontal = 2;
var shadowVertical = 2;
var shadowBlur = 0;
var shadowColor = "red";
var CSSCode = "";
var CSSCodeNoFormat = "";
function pickSampleText(x) {
    document.getElementById("something")
    .innerHTML = x;
}
function pickFont() {
    font = document.getElementById("fontPicker").value;
    document.getElementById("something").style.fontFamily = font;
}
function align() {
    side = document.getElementById("alignment").value;
    document.getElementById("something").style.textAlign = side;
}
function setSize() {
    size = document.getElementById("sizer").value;
    document.getElementById("something").style.fontSize = size + "px";
    document.getElementById("size").innerHTML = size + "px";
}
function setHeight() {
    height = document.getElementById("heighter").value / 10;
    document.getElementById("something").style.lineHeight = height;
    document.getElementById("height").innerHTML = height;
}
function setWeight() {
    weight = document.getElementById("weighter").value * 100;
    document.getElementById("something").style.fontWeight = weight;
    document.getElementById("weight").innerHTML = weight;
}
function setTextColor() {
    textColor = document.getElementById("textColorMenu").value;
    document.getElementById("something").style.color = textColor;
}
function setBackgroundColor() {
    background = document.getElementById("backgroundColorMenu").value;
    document.getElementById("something").style.backgroundColor = background;
}
function enableTextDecorationStyle() {
    document.getElementById("solidb").disabled = !decorationStyle;
    document.getElementById("wavyb").disabled = !decorationStyle;
    document.getElementById("dashedb").disabled = !decorationStyle;
    document.getElementById("dottedb").disabled = !decorationStyle;
    document.getElementById("doubleb").disabled = !decorationStyle;
}
function textDecoration() {
    decorationStyle = true;
    enableTextDecorationStyle();
    if (overline === false &&
        lineThrough === false &&
        underline === false) {
        document.getElementById("something")
        .style.textDecoration = "none";
        decorationStyle = false;
        enableTextDecorationStyle();
    }
    if (overline === false &&
        lineThrough === false &&
        underline === true) {
        document.getElementById("something")
        .style.textDecoration = "underline "+ whichDecorationStyle;
    }
    if (overline === false &&
        lineThrough === true &&
        underline === false) {
        document.getElementById("something")
        .style.textDecoration = "line-through "+ whichDecorationStyle;
    }
    if (overline === true &&
        lineThrough === false &&
        underline === false) {
        document.getElementById("something")
        .style.textDecoration = "overline "+ whichDecorationStyle;
    }
    if (overline === true &&
        lineThrough === false &&
        underline === true) {
        document.getElementById("something")
        .style.textDecoration = "overline underline "+ whichDecorationStyle;
    }
    if (overline === true &&
        lineThrough === true &&
        underline === false) {
        document.getElementById("something")
        .style.textDecoration = "overline line-through "+ whichDecorationStyle;
    }
    if (overline === true &&
        lineThrough === true &&
        underline === true) {
        document.getElementById("something")
        .style.textDecoration = "overline line-through underline "+ whichDecorationStyle;
    }
}
function setDecorationStyle() {
    if (!wavy && !dashed && !dotted && !double) {
        document.getElementById("solidb")
        .checked = true
        document.getElementById("wavyb")
        .checked = false
        document.getElementById("dashedb")
        .checked = false
        document.getElementById("dottedb")
        .checked = false
        document.getElementById("doubleb")
        .checked = false
        whichDecorationStyle = "solid"
    }
    if (wavy) {
        document.getElementById("solidb")
        .checked = false
        document.getElementById("wavyb")
        .checked = true
        document.getElementById("dashedb")
        .checked = false
        document.getElementById("dottedb")
        .checked = false
        document.getElementById("doubleb")
        .checked = false
        whichDecorationStyle = "wavy"
    }
    if (dashed) {
        document.getElementById("solidb")
        .checked = false
        document.getElementById("wavyb")
        .checked = false
        document.getElementById("dashedb")
        .checked = true
        document.getElementById("dottedb")
        .checked = false
        document.getElementById("doubleb")
        .checked = false
        whichDecorationStyle = "dashed"
    }
    if (dotted) {
        document.getElementById("solidb")
        .checked = false
        document.getElementById("wavyb")
        .checked = false
        document.getElementById("dashedb")
        .checked = false
        document.getElementById("dottedb")
        .checked = true
        document.getElementById("doubleb")
        .checked = false
        whichDecorationStyle = "dotted"
    }
    if (double) {
        document.getElementById("solidb")
        .checked = false
        document.getElementById("wavyb")
        .checked = false
        document.getElementById("dashedb")
        .checked = false
        document.getElementById("dottedb")
        .checked = false
        document.getElementById("doubleb")
        .checked = true
        whichDecorationStyle = "double"
    }
    document.getElementById("something").style.textDecorationStyle = whichDecorationStyle;
}
function setItalic() {
    italic = !italic
    if (italic) {
        document.getElementById("something")
        .style.fontStyle = "italic"
    } else {
        document.getElementById("something")
        .style.fontStyle = "normal"
    }
}
function enableShadowControls(x) {
    document.getElementById("horizontalShadow").disabled = !x;
    document.getElementById("verticalShadow").disabled = !x;
    document.getElementById("blurShadow").disabled = !x;
    document.getElementById("colorShadow").disabled = !x;
}
function setShadow() {
    if (hasShadow) {
        document.getElementById("something").style.textShadow = shadowHorizontal+"px "+shadowVertical+"px "+shadowBlur+"px "+shadowColor;
        enableShadowControls(hasShadow);
    } else {
        document.getElementById("something").style.textShadow = "0px 0px 0px #000000";
    }
    enableShadowControls(hasShadow);
}
function setShadowValues() {
    shadowHorizontal = document.getElementById("horizontalShadow").value;
    shadowVertical = document.getElementById("verticalShadow").value;
    shadowBlur = document.getElementById("blurShadow").value;
    shadowColor = document.getElementById("colorShadow").value;
    setShadow();
}
function getCSS() {
    CSSCode = "&nbsp p{<br>";
    CSSCodeNoFormat = "p { ";
    CSSCode += "&nbsp &nbsp &nbsp font-family: " + font + ";<br>";
    CSSCodeNoFormat += "font-family: " + font + "; ";
    CSSCode += "&nbsp &nbsp &nbsp text-align: " + side + ";<br>";
    CSSCodeNoFormat += "text-align: " + font + "; ";
    CSSCode += "&nbsp &nbsp &nbsp font-size: " + size + "px;<br>";
    CSSCodeNoFormat += "font-size: " + size + ";";
    CSSCode += "&nbsp &nbsp &nbsp line-height: " + height + ";<br>";
    CSSCodeNoFormat += "line-height: " + height + ";";
    CSSCode += "&nbsp &nbsp &nbsp font-weight: " + weight + ";<br>";
    CSSCodeNoFormat += "font-weigh: t" + weight + ";";
    CSSCode += "&nbsp &nbsp &nbsp color: " + textColor + ";<br>";
    CSSCodeNoFormat += "color: " + textColor + ";";
    CSSCode += "&nbsp &nbsp &nbsp background-color: " + background + ";<br>";
    CSSCodeNoFormat += "background-color: " + background + ";";
    if (italic) {
        CSSCode += "&nbsp &nbsp &nbsp font-style: italic;<br>";
        CSSCodeNoFormat += "font-style: italic; "
    }
    CSSCode += "&nbsp &nbsp &nbsp text-decoration: "
    CSSCodeNoFormat += "text-decoration: "
    if (!overline && !lineThrough && !underline) {
        CSSCode += "none";
        CSSCodeNoFormat += "none"
    }if (overline) {
        CSSCode += "overline ";
        CSSCodeNoFormat += "overline "
    }
    if (lineThrough) {
        CSSCode += "line-through ";
        CSSCodeNoFormat += "line-through "
    }
    if (underline) {
        CSSCode += "underline ";
        CSSCodeNoFormat += "underline "
    }
    if (!wavy && !dotted && !dashed && !double && (overline || lineThrough || underline)) {
        CSSCode += "solid"
        CSSCodeNoFormat += "solid"
    }
    if (wavy) {
        CSSCode += "wavy"
        CSSCodeNoFormat += "wavy"
    }
    if (dotted) {
        CSSCode += "dotted"
        CSSCodeNoFormat += "dotted"
    }
    if (dashed) {
        CSSCode += "dashed"
        CSSCodeNoFormat += "dashed"
    }
    if (double) {
        CSSCode += "double"
        CSSCodeNoFormat += "double"
    }
    CSSCode += ";<br>";
    CSSCodeNoFormat += "; ";
    if (hasShadow) {
        CSSCode += "&nbsp &nbsp &nbsp text-shadow: "+ shadowHorizontal+"px "+shadowVertical+"px "+ shadowBlur+"px "+shadowColor+ "; ";
        CSSCodeNoFormat += "text-shadow: "+ shadowHorizontal+"px "+shadowVertical+"px "+ shadowBlur+"px "+shadowColor+ "; ";
    }
    CSSCode += "&nbsp }";
    CSSCodeNoFormat += " }";
    document.getElementById("output")
    .innerHTML = CSSCode;
}
function toClipboard(text) {
    var textField = document
    .createElement('textarea');
    textField.innerHTML = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    alert("Copied: " + text)
}