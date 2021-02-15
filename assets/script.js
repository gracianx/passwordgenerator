
//Arrays that include upper and lower case letters from the alphabet using Unicode Character Sets, numbers, and symbols

upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9','0'];

symbols = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

var length;
var yesupper;
var yeslower;
var yesnumbers;
var yessymbols;
// Assignment Code
function getpasswordCreate () {
  let length = parseInt(prompt("Choose length of password between 8 and 128 characters.")
  )

  if (!length) {alert("You must set length.");} 
  
    else if (length < 8 || length > 128) {
      length = parseInt(prompt("Choose between 8 and 128 only."));}

  let yesupper = confirm("Do you want to include uppercase letters?");
  let yeslower = confirm("Do you want to include lowercase letters?");
  let yesnumbers = confirm("Do you want to include numbers?");
  let yessymbols = confirm("Do you want to include special characters?");

  let passwordCreate = {
    length: length,
    yesupper: yesupper,
    yeslower: yeslower,
    yesnumbers: yesnumbers,
    yessymbols: yessymbols
  };

  return passwordCreate;
}

function randomize(options) {
  let randIndex = Math.floor(Math.random() * options.length);
  let randomEl = options[randIndex];

return randomEl;
}

function generatePassword() {
  let options = getpasswordCreate();

  let password = [];

  let possibleOptions = [];

  let trueOptions = [];
  if (!yesupper && !yeslower && !yesnumbers && !yessymbols)
  { 
    alert=("You must include at least one!");
  }
   else if (yesupper && yeslower && yesnumbers && yessymbols) {
      possibleOptions = password.concat(upper,lower,numbers,symbols);
      trueOptions.push(randomize(upper,lower,numbers,symbols));
    }

    else if (!yesupper && yeslower && yesnumbers && yessymbols) {
      options = password.concat(lower,numbers,symbols);
      trueOptions.push(randomize(lower,numbers,symbols));
    }

    else if (!yesupper && !yeslower && yesnumbers && yessymbols) {
      options = password.concat(numbers,symbols);
      trueOptions.push(randomize(numbers,symbols));
    }

    else if (!yesupper && !yeslower && !yesnumbers && yessymbols) {
      options = password.concat(symbols);
      trueOptions.push(randomize(symbols));
    }

    else if (!yesupper && !yeslower && yesnumbers && !yessymbols) {
      options = password.concat(numbers);
      trueOptions.push(randomize(numbers));
    }
    
    else if (!yesupper && yeslower && !yesnumbers && !yessymbols) {
      options = password.concat(lower);
      trueOptions.push(randomize(lower));
    }

    else if (yesupper && !yeslower && !yesnumbers && !yessymbols) {
      options = password.concat(upper);
      trueOptions.push(randomize(upper));
    }
}
for (let i=0; i < password.length; i++){
  let possibleOptions = randomize(possibleOptions);
    create.push(possibleOptions);
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
