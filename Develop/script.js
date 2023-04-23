// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
}

  ///added criteria variables for user password options//
  
  var passwordText = document.querySelector("#password");
  var chars = "012345678abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //altered the password variable to allow parameters based on character variable//
  var passwordLength= (i=8; i<chars; i++);
  passwordText.value = password;
  for (var i=passwordLength; i<chars; i++){

  }

//generate If statements for password options //


//creating random password algorithm//
var randomPassword=getRandomValueFromArray(chars);
console.log(randomPassword);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn);

//console logged the input variable//
console.log(writePassword);