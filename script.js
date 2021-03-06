// Region Variable assignment
var generateBtn = document.querySelector("#generate");
var body = document.querySelector("body");
var pwdUserInput = [];
var upperCaseChars = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var lowerCaseChars = ['abcdefghijklmnopqrstuvwxyz'];
var numbers = ['0123456789'];
var specialChars = ['\!\#\$\%\&\(\)\*\+\-\.\:\;\=\?\@\[\]\^\_\{\|\}'];
var pwdSliderRange = 64;
var result = "";
var buttonStyle = document.getElementById("generate").style.cssText;
// EndRegion 

// Region Event listener
generateBtn.addEventListener("click", writePassword);

//Region HTML element creation
var card = document.querySelector(".card-body");
var cardDiv = document.querySelector(".card");
var cardFooter = document.querySelector(".card-footer");
var textArea = document.querySelector("#password");

// Create the elements to be displayed in the welcome dialog 
var welcomeDialogDiv = document.createElement("div");
var welcomeDialogHeading = document.createElement("h5");
var welcomeDialogBody = document.createElement("p");

// p tag for label of slider 
var pTag = document.createElement("p");

// New footer buttons 
var backButton = document.createElement("button");
backButton.setAttribute("id", "backBotton");

var copyButton = document.createElement("button");
copyButton.setAttribute("id", "copyButton");

// End region 

loadPasswordInputArea();

// Write password to the #password input
function writePassword() {
  generatePassword();
  if (result != "") {
    console.log("Not empty");
    clearInputPreSelections();
    card.replaceChild(textArea, welcomeDialogDiv);
    footerDisplayLogic();
    cardFooter.replaceChild(backButton, generateBtn);
    cardFooter.appendChild(copyButton);
    textArea.value = result;
  }
}

// Region to Create a div with a back and a copy button
function footerDisplayLogic() {
  backButton.setAttribute("class", "footerbtn");
  backButton.value = "Back";
  backButton.textContent = "Back";

  backButton.style.cssText = buttonStyle;
  backButton.addEventListener('click', function () {
    pwdUserInput = [];
    result = "";
    card.replaceChild(welcomeDialogDiv, textArea);
    cardFooter.replaceChild(generateBtn, backButton);
    cardFooter.removeChild(copyButton);
  })

  copyButton.setAttribute("name", "Copy Password");
  copyButton.setAttribute("class", "footerbtn");
  copyButton.value = "Copy Password";
  copyButton.textContent = "Copy";
  copyButton.style.cssText = buttonStyle;
  copyButton.addEventListener('click', function () {
    textArea.select();
    document.execCommand("copy");
  })
}
// End region 

function loadPasswordInputArea() {
  displayPasswordInputChoices();
}

// Region creates and displays pwd choice section
function displayPasswordInputChoices() {

  // Add classes to style dialog in bootstrap 
  welcomeDialogDiv.setAttribute("class", "alert");
  welcomeDialogDiv.setAttribute("role", "alert");
  welcomeDialogHeading.setAttribute("class", "alert-heading");

  // Add content to the dialog heading and body 
  welcomeDialogHeading.textContent = "Please choose from options below and click \"Generate Password\"!";


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
// End region 

// Region create and display check box items 
function createAndDisplayCheckboxItem(checkboxID, checkboxText, welcomeDialogDiv) {
  var checkbox = document.createElement('input');
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", "checkbox");
  checkbox.id = checkboxID;

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      pwdUserInput.push(checkbox.id);
      console.log(`${checkbox.id} checked`);
      console.log(`${pwdUserInput} `);
    }
    if (this.checked == false) {
      pwdUserInput.pop(checkbox.id);
      console.log(`${checkbox.id} un-checked`);
      console.log(`${pwdUserInput} `);
    }
  });

  var label = document.createElement("label");
  var textNode = document.createTextNode(checkboxText);

  label.htmlFor = checkboxID
  label.appendChild(textNode);
  welcomeDialogDiv.appendChild(checkbox);
  welcomeDialogDiv.appendChild(label);
  welcomeDialogDiv.appendChild(document.createElement("br"));
  return checkbox;
}
// End region 

// Region create and display slider 
function createAndDisplaySlider(welcomeDialogDiv) {
  var sliderElement = document.createElement("input");
  sliderElement.setAttribute("type", "range");
  sliderElement.setAttribute("class", "slider");
  sliderElement.setAttribute("id", "sliderElement");
  sliderElement.setAttribute("min", "8");
  sliderElement.setAttribute("max", "128");
  sliderElement.setAttribute("value", "64");

  sliderElement.oninput = function () {
    pTag.setAttribute("id", "sliderLabel");
    pTag.textContent = `Range: ${sliderElement.value} `;
    pwdSliderRange = sliderElement.value;
  }

  welcomeDialogDiv.appendChild(pTag);
  welcomeDialogDiv.appendChild(sliderElement);

  console.log(sliderElement.value);
}
// End region 

// Region generate random password 
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
// End region 

// Region no input prompt 
function displayPromptIfNoInput() {
  window.alert("Please select an option below to create password");
}
// End region 

// Region reset checkboxes, slider, and slider text on clicking back button  
function clearInputPreSelections() {
  document.getElementById("UppercaseCB").checked = false;
  document.getElementById("LowercaseCB").checked = false;
  document.getElementById("NumbersCB").checked = false;
  document.getElementById("SpecialCharactersCB").checked = false;
  document.getElementById("sliderElement").value = "64";
  pwdSliderRange = 64;
  pTag.textContent = "";
}
// End region