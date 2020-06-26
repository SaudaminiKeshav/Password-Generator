// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generates random password 
function generatePassword(){
  customPromptGenerator()
  
}

function customPromptGenerator(){

  // Get the div in which the dialog will be displayed 
  var card = document.querySelector(".card-body");

  // Get the textarea that has to be replaced with the welcome dialog
    var textArea = document.querySelector("textarea");

  // Create the elements to be displayed in the welcome dialog 
    var welcomeDialogDiv = document.createElement("div");
    var welcomeDialogHeading = document.createElement("h4");
    var welcomeDialogBody = document.createElement("p");
}