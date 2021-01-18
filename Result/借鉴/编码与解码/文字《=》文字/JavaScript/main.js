var letters_code = 
    "abcdefghijklmnopqrstuvwxyzabcdefghi";
var letters_decode = 
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopq";
var ans = ""
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 
        0; i--) {
        newString += str[i];
    }
    return newString;
}
function encode() {
    Text = document.getElementById(
        "input").value;
    Text = Text.toLowerCase();
    var i = null;
    for (i of Text) {
        x = letters_code.indexOf(i) + 9;
        if (letters_code.indexOf(i) < 0) {
            ans += i;
        } else {
            ans += letters_code [x];
        }
    }
    ans = reverseString(ans);
    document.getElementById('display')
        .innerHTML = ans;
    ans = "";
}
function decode() {
    Text = document.getElementById(
        'input').value;
    Text = Text.toLowerCase();
    var i = null;
    for (i of Text) {
        x = letters_decode.indexOf(i) + 17;
        console.log(letters_decode.indexOf(
            i))
        if (letters_decode.indexOf(i) <
            0) {
            ans += i;
        } else {
            ans += letters_decode[x];
        }
    }
    ans = reverseString(ans);
    document.getElementById('display')
        .innerHTML = ans;
    ans = "";
}
function reset() {
    document.getElementById('display')
        .innerHTML = "";
    document.getElementById('input')
        .value = "";
    ans = "";
}