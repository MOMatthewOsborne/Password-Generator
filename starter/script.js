// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// var charOptions = [lowercaseCon, uppercaseCon, numericCon, specialCon];
var arrOptions = [lowerCasedCharacters, upperCasedCharacters, numericCharacters, specialCharacters]
var passOptions = [];


// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("Please enter your desired password length. Between 10 and 64")
  if (passwordLength >= 10 & passwordLength <= 64) {
    var lowercaseCon = confirm("Do you want to use Lowercase Characters? ")
    var uppercaseCon = confirm("Do you want to use Uppercase Characters? ")
    var numericCon = confirm("Do you want to use Numeric Characters? ")
    var specialCon = confirm("Do you want to use Special Characters? ")
    // for (i = 0; i < charOptions.length; i++) {
    //   if (charOptions[i]) {
    //     passOptions = passOptions.map.arrOptions[i];
    //     alert(passOptions)
    if (lowercaseCon) {
      passOptions = passOptions.concat(lowerCasedCharacters)
    }
    if (uppercaseCon) {
      passOptions = passOptions.concat(upperCasedCharacters)
    }
    if (numericCon) {
      passOptions = passOptions.concat(numericCharacters)
    }
    if (specialCon) {
      passOptions = passOptions.concat(specialCharacters)
    }

    alert(passOptions)


  } else {
    getPasswordOptions();
  }
}


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

getPasswordOptions()