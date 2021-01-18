var uppercase = ["A", "B", "C", 
"D", "E", "F", "G", "H", "I", 
"J", "K", "L", "M", "N", "O", 
"P", "Q", "R", "S", "T", "U", 
"V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", 
"d", "e", "f", "g", "h", "i", 
"j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", 
"v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", 
"5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "@", 
"#", "$", "%", "&"];
function pickRandom(myArray) {
    let random = Math.floor(Math
        .random() * myArray.length);
    return myArray[random]
}
var funcUpp = [
    pickRandom(uppercase),
    pickRandom(uppercase),
    pickRandom(uppercase),
    pickRandom(uppercase),
    pickRandom(uppercase),
    pickRandom(uppercase),
    pickRandom(uppercase),
    pickRandom(uppercase),
    pickRandom(uppercase),
    pickRandom(uppercase),
    pickRandom(uppercase),
    pickRandom(uppercase),
    pickRandom(uppercase),
    pickRandom(uppercase),
    pickRandom(uppercase),
];
var funcLow = [
    pickRandom(lowercase),
    pickRandom(lowercase),
    pickRandom(lowercase),
    pickRandom(lowercase),
    pickRandom(lowercase),
    pickRandom(lowercase),
    pickRandom(lowercase),
    pickRandom(lowercase),
    pickRandom(lowercase),
    pickRandom(lowercase),
    pickRandom(lowercase),
    pickRandom(lowercase),
    pickRandom(lowercase),
    pickRandom(lowercase),
    pickRandom(lowercase),
]
var funcNum = [
    pickRandom(numbers),
    pickRandom(numbers),
    pickRandom(numbers),
    pickRandom(numbers),
    pickRandom(numbers),
    pickRandom(numbers),
    pickRandom(numbers),
    pickRandom(numbers),
    pickRandom(numbers),
    pickRandom(numbers),
    pickRandom(numbers),
    pickRandom(numbers),
    pickRandom(numbers),
    pickRandom(numbers),
    pickRandom(numbers),
]
var funcSpCh = [
    pickRandom(specialCharacters),
    pickRandom(specialCharacters),
    pickRandom(specialCharacters),
    pickRandom(specialCharacters),
    pickRandom(specialCharacters),
    pickRandom(specialCharacters),
    pickRandom(specialCharacters),
    pickRandom(specialCharacters),
    pickRandom(specialCharacters),
    pickRandom(specialCharacters),
    pickRandom(specialCharacters),
    pickRandom(specialCharacters),
    pickRandom(specialCharacters),
    pickRandom(specialCharacters),
    pickRandom(specialCharacters),
]
var a = [
    pickRandom(funcUpp),
    pickRandom(funcLow),
    pickRandom(funcNum),
    pickRandom(funcSpCh),
    pickRandom(funcUpp),
    pickRandom(funcLow),
    pickRandom(funcNum),
    pickRandom(funcSpCh),
    pickRandom(funcUpp),
    pickRandom(funcLow),
    pickRandom(funcNum),
    pickRandom(funcSpCh),
    pickRandom(funcUpp),
    pickRandom(funcLow),
    pickRandom(funcNum),
    pickRandom(funcSpCh),
    pickRandom(funcUpp),
    pickRandom(funcLow),
    pickRandom(funcNum),
    pickRandom(funcSpCh),
    pickRandom(funcUpp),
    pickRandom(funcLow),
    pickRandom(funcNum),
    pickRandom(funcSpCh),
];
function generatePassword() {
    var password = pickRandom(a) +
        pickRandom(a) +
        pickRandom(a) +
        pickRandom(a) +
        pickRandom(a) +
        pickRandom(a) +
        pickRandom(a) +
        pickRandom(a);

    console.log(password);
    document.getElementById("pass")
    .innerHTML = password;
    document.getElementById(
    "mensaje").innerHTML =
    "免费随意使用这些密码！";
}