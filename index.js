const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15
let includeNumbers = true, includeSymbols = true
// console.log(characters[62])

let password1EL = document.querySelector("#password-1")
let password2EL = document.querySelector("#password-2")


// Get the switch container
let numberSwitch = document.getElementById('numSwitch');

numberSwitch.addEventListener('click', function() {
  let numInput = numberSwitch.querySelector('input');

  if (numInput.checked) {
    numSwitchOn();
  } else {
    numSwitchOff();
  }
});

// Method to execute when the switch is ON
function numSwitchOn() {
  includeNumbers = true
  // Add your logic for when the switch is ON
}

// Method to execute when the switch is OFF
function numSwitchOff() {
    includeNumbers = false
  // Add your logic for when the switch is OFF
}



let symbolSwitch = document.getElementById('symSwitch');

symbolSwitch.addEventListener('click', function() {
  let symInput = symbolSwitch.querySelector('input');

  if (symInput.checked) {
    symSwitchOn();
  } else {
    symSwitchOff();
  }
});

// Method to execute when the switch is ON
function symSwitchOn() {
  includeSymbols = true
  // Add your logic for when the switch is ON
}

// Method to execute when the switch is OFF
function symSwitchOff() {
    includeSymbols = false
  // Add your logic for when the switch is OFF
}




function setLength(){
    passwordLength = document.querySelector("#length-input").value
}

 function updateElementLength() {
    // Get the user's input value
    var userInput = document.getElementById('lengthInput').value;

    // Get the dynamic element
    var dynamicElement = document.getElementById('dynamicElement');

    // Update the width of the dynamic element based on the user's input
    dynamicElement.style.width = userInput + 'px';
  }

function generatePassword(){
    let password = ""
    let i = 0
    while (i < passwordLength) {
        let index = Math.floor(Math.random()*91)
        if (!includeNumbers){
            if(index <= 61 && index >= 52){
                continue;
            }
        }
        if (!includeSymbols){
            if(index >= 62){
                continue;
            }
        }
            if (characters[index] === undefined) {
                console.log(index);
            }
        password += characters[index]
        i++
    }
    return password
}


function makePassword(){
    password1EL.textContent = generatePassword()
    password2EL.textContent = generatePassword()
}

// Function to copy the generated password to the clipboard
function copyToClipboard(buttonId) {
  // Get the text content of the button
  let generatedPasswordButton = document.getElementById(buttonId);
  let passwordText = generatedPasswordButton.textContent.trim();

  // Create a temporary textarea element to copy the text
  let textarea = document.createElement('textarea');
  textarea.value = passwordText;
  document.body.appendChild(textarea);

  // Select the text in the textarea
  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices

  // Execute the copy command
  try {
    document.execCommand('copy');
    console.log('Password copied to clipboard');
  } catch (err) {
    console.error('Unable to copy password to clipboard', err);
  }

  // Remove the temporary textarea
  document.body.removeChild(textarea);
}