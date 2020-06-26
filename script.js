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
function generatePassword() {
  customPromptGenerator()

}

function customPromptGenerator() {

  // Get the div in which the dialog will be displayed 
  var card = document.querySelector(".card-body");

  // Get the textarea that has to be replaced with the welcome dialog
  var textArea = document.querySelector("textarea");

  // Create the elements to be displayed in the welcome dialog 
  var welcomeDialogDiv = document.createElement("div");
  var welcomeDialogHeading = document.createElement("h4");
  var welcomeDialogBody = document.createElement("p");

  // Add classes to style dialog in bootstrap 
  welcomeDialogDiv.setAttribute("class", "alert alert-success")
  welcomeDialogDiv.setAttribute("role", "alert")
  welcomeDialogHeading.setAttribute("class", "alert-heading")

  // Add content to the dialog heading and body 
  welcomeDialogHeading.textContent = "Welcome to Password Generator";
  welcomeDialogBody.textContent = "Please click on \"Generate Password\" button for a new password! ";

  // Append the elements to the container 
  card.appendChild(welcomeDialogDiv);
  welcomeDialogDiv.appendChild(welcomeDialogHeading);
  welcomeDialogDiv.appendChild(welcomeDialogBody);

  // Replace the textarea with welcome dialog 
  card.replaceChild(welcomeDialogDiv, textArea)
}