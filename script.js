// Assignment Code
var generateBtn = document.querySelector("#generate");
var body = document.querySelector("body");

// Add event listener to load pwd choice section 
body.onload = displayPasswordInputChoices();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generates random password 
function generatePassword() {
  
}

// Creates and displays pwd choice section
function displayPasswordInputChoices() {

  // Get the div in which the dialog will be displayed 
  var card = document.querySelector(".card-body");

  // Get the textarea that has to be replaced with the welcome dialog
  var textArea = document.querySelector("textarea");

  // Create the elements to be displayed in the welcome dialog 
  var welcomeDialogDiv = document.createElement("div");
  var welcomeDialogHeading = document.createElement("h5");
  var welcomeDialogBody = document.createElement("p");

  // Add classes to style dialog in bootstrap 
  welcomeDialogDiv.setAttribute("class", "alert");
  welcomeDialogDiv.setAttribute("role", "alert");
  welcomeDialogHeading.setAttribute("class", "alert-heading");

  // Add content to the dialog heading and body 
  welcomeDialogHeading.textContent = "Please choose from options below and click \"Generate Password\"!";
  welcomeDialogBody.textContent = "Please select options below  ";
  
  // Append the elements to the container 
  card.appendChild(welcomeDialogDiv);
  welcomeDialogDiv.appendChild(welcomeDialogHeading);
  welcomeDialogDiv.appendChild(welcomeDialogBody);

  displayCheckboxItem("cb1","Uppercase", welcomeDialogDiv);
  displayCheckboxItem("cb2","Lowercase", welcomeDialogDiv);
  displayCheckboxItem("cb3","Numbers", welcomeDialogDiv);
  displayCheckboxItem("cb4","Special characters", welcomeDialogDiv);
 
  // Replace the textarea with welcome dialog 
  card.replaceChild(welcomeDialogDiv, textArea);
}

function displayCheckboxItem(checkboxID, checkboxText, welcomeDialogDiv){
  var checkbox = document.createElement('input');
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("value", " Uppercase letters");
  checkbox.id = checkboxID;

  var label = document.createElement("label");
  var textNode = document.createTextNode(checkboxText);

  label.htmlFor = checkboxID
  label.appendChild(textNode);
  welcomeDialogDiv.appendChild(checkbox);
  welcomeDialogDiv.appendChild(label);
  welcomeDialogDiv.appendChild(document.createElement("br"));

  return checkbox;
}