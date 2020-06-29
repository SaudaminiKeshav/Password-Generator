// Assignment Code
var generateBtn = document.querySelector("#generate");
var body = document.querySelector("body");
var pwdUserInput = [];
var upperCaseChars = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var lowerCaseChars = ['abcdefghijklmnopqrstuvwxyz'];
var numbers = ['0123456789'];
var specialChars = ['\!\#\$\%\&\(\)\*\+\-\.\:\;\=\?\@\[\]\^\_\{\|\}'];
var pwdSliderRange = 64;
var result = "";

// Get the div in which the dialog will be displayed 
var card = document.querySelector(".card-body");

// Get the textarea that has to be replaced with the welcome dialog
var textArea = document.querySelector("#password");

// Create the elements to be displayed in the welcome dialog 
var welcomeDialogDiv = document.createElement("div");
var welcomeDialogHeading = document.createElement("h5");
var welcomeDialogBody = document.createElement("p");

// Add event listener to load pwd choice section 
body.onload = displayPasswordInputChoices();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  generatePassword();
  if (result != "") {
    console.log("Not empty");
    card.replaceChild(textArea, welcomeDialogDiv);
    textArea.value = result;
  }
}

// Creates and displays pwd choice section
function displayPasswordInputChoices() {

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

  createAndDisplayCheckboxItem("UppercaseCB", "Uppercase", welcomeDialogDiv);
  createAndDisplayCheckboxItem("LowercaseCB", "Lowercase", welcomeDialogDiv);
  createAndDisplayCheckboxItem("NumbersCB", "Numbers", welcomeDialogDiv);
  createAndDisplayCheckboxItem("SpecialCharactersCB", "Special characters", welcomeDialogDiv);
  createAndDisplaySlider(welcomeDialogDiv);

  // Replace the textarea with welcome dialog 
  card.replaceChild(welcomeDialogDiv, textArea);
}

function createAndDisplayCheckboxItem(checkboxID, checkboxText, welcomeDialogDiv) {
  var checkbox = document.createElement('input');
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", "checkbox");
  checkbox.id = checkboxID;

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      pwdUserInput.push(checkbox.id)
      console.log(`${checkbox.id} checked`)
      console.log(`${pwdUserInput} `)
    }
  });

  var label = document.createElement("label");
  var textNode = document.createTextNode(checkboxText);

  label.htmlFor = checkboxID
  label.appendChild(textNode);
  welcomeDialogDiv.appendChild(checkbox);
  welcomeDialogDiv.appendChild(label);
  welcomeDialogDiv.appendChild(document.createElement("br"));
}

function createAndDisplaySlider(welcomeDialogDiv) {
  var sliderElement = document.createElement("input");
  sliderElement.setAttribute("type", "range");
  sliderElement.setAttribute("class", "slider");

  sliderElement.setAttribute("min", "8");
  sliderElement.setAttribute("max", "128");
  sliderElement.setAttribute("value", "64");

  var pTag = document.createElement("p");

  sliderElement.oninput = function () {
    pTag.textContent = `Value: ${sliderElement.value} `
    pwdSliderRange = sliderElement.value;
  }

  welcomeDialogDiv.appendChild(pTag);
  welcomeDialogDiv.appendChild(sliderElement);

  console.log(sliderElement.value);
}

// Generates random password 
function generatePassword() {
  var pwd = [];

  if (pwdUserInput === undefined || pwdUserInput.length == 0) {
    displayPromptIfNoInput();
  } else {
    if (pwdUserInput.includes("UppercaseCB")) {
      pwd = pwd + upperCaseChars;
    }
    if (pwdUserInput.includes("LowercaseCB")) {
      pwd = pwd + lowerCaseChars;
    }
    if (pwdUserInput.includes("NumbersCB")) {
      pwd = pwd + numbers;
    }
    if (pwdUserInput.includes("SpecialCharactersCB")) {
      pwd = pwd + specialChars;
    }

    while (result.length < pwdSliderRange) {
      result += pwd[Math.floor(Math.random() * pwd.length)];
    }
    console.log(`Password -> ${result}`);
  }
}

function displayPromptIfNoInput() {
  window.alert("Please select an option below to create password")
}