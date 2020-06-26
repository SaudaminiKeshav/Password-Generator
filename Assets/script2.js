var generateBtn = document.querySelector("#generate");

var randLetter = "abcdefghijklmnopqrstuvwxyz";
var randNum = "0123456789";
var randChar = ".,!@#$%^&*-<>/?:;+"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  chooseLet = randLetter.split();
  chooseNum = randNum.split();
  chooseChar = randChar.split();

  function generatePassword() {
    for (var i = 0; i < 9; i++) {      
      let x = toString(Math.random(chooseLet));
      let y = toString(Math.random(chooseNum));
      let z = toString(Math.random(chooseChar));
      var s = x.concat(y);
      var t = s.concat(z);
      console.log(t);
    }
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);