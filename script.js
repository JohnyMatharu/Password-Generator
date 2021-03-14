//Plese check acceptance criteria 
var passwordLength;

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {var criteria = confirm("Your password criteria consists of uppercase, lowercase, numbers, and special characters, press OK to continue");
//Add digit confirmation, join oKay to continue to previous statement if possible

if (criteria == true) {
  passwordLength = prompt("Please enter the number of digits for your password, has to be between 8 to 128 characters");  
  createPassword();
} 
 else 
 { prompt("Your pressed Cancel,  GoodBye !"); }
});
//get error confirmed, until then finish rest of code

function createPassword ()
{

  var randomNumber = 0;

  let sc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let uc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  let nu = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5]
  let sp = ['!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','´','{','|','}','~']
  var scuc = sc.concat(uc);
  var ucnu = uc.concat(nu);
  var nusp = nu.concat(sp);
  var spsc = sp.concat(sc);
  var scucnu = scuc.concat(nu);
  var ucnusp = ucnu.concat(sp);
  var nuspsc = nusp.concat(sc);
  var spscuc = spsc.concat(uc);
  var scucnusp = scucnu.concat(sp);

if (passwordLength < 8 || passwordLength > 128) 
{prompt("You have entered an invalid number, please provide digit within 8 to 128");
createPassword();
}
  else if (passwordLength >= 8 || passwordLength <= 128) 
 {
  var scType = confirm("Please select the password mix, you have to choose atleast one character type, if don't want something, press CANCEL, if you wish to choose that option then you will press OK. PLease press OK now to continue");
  var ucType = confirm ("Would you like capital letters in the password?");
  var nuType = confirm ("Would you like small letters in the password?");
  var spType = confirm ("Would you like special characters in the password?");


if (!scType && !ucType && !nuType && !spType)
  {
    //ask user that they have to select atleast one type
  createPassword();
  }
  
if (scType && !ucType && !nuType && !spType)
{
  for (var i = 0; i < passwordLength; i++) {
  randomNumber = sc[Math.floor(math.random()*sc.length)];   
  }
}

if (!scType && ucType && !nuType && !spType)
{
  for (var i = 0; i < passwordLength; i++) {
     randomNumber = uc[Math.floor(math.random()*uc.length)];   
      }
}

if (!scType && !ucType && nuType && !spType)
{
  for (var i = 0; i < passwordLength; i++) {
     randomNumber = nu[Math.floor(math.random()*nu.length)];   
      }
}

if (!scType && !ucType && !nuType && spType)
{
  for (var i = 0; i < passwordLength; i++) {
     randomNumber = sp[Math.floor(math.random()*sp.length)];   
      }
}

if (scType && ucType && !nuType && !spType)
{
  for (var i = 0; i < passwordLength; i++) {
     randomNumber = scuc[Math.floor(math.random()*scuc.length)];   
      }
}

if (!scType && !ucType && nuType && spType)
{
  for (var i = 0; i < passwordLength; i++) {
     randomNumber = nusp[Math.floor(math.random()*nusp.length)];   
      }
}

if (!scType && ucType && nuType && !spType)
{
  for (var i = 0; i < passwordLength; i++) {
    randomNumber = ucnu[Math.floor(math.random()*ucnu.length)];   
      }
}

if (scType && !ucType && !nuType && spType)
{
  for (var i = 0; i < passwordLength; i++) {
     randomNumber = scsp[Math.floor(math.random()*scsp.length)];   
      }
}

if (scType && ucType && nuType && !spType)
{
  for (var i = 0; i < passwordLength; i++) {
     randomNumber = scucnu[Math.floor(math.random()*scucnu.length)];   
      }
}

if (!scType && ucType && nuType && spType)
{
  for (var i = 0; i < passwordLength; i++) {
     randomNumber = ucnusp[Math.floor(math.random()*ucnusp.length)];   
      }
}

if (scType && ucType && !nuType && spType)
{
  for (var i = 0; i < passwordLength; i++) {
     randomNumber = scucsp[Math.floor(math.random()*scucsp.length)];   
      }
}

if (scType && !ucType && nuType && spType)
{
  for (var i = 0; i < passwordLength; i++) {
    randomNumber = scnusp[Math.floor(math.random()*scnusp.length)];   
      }
}

if (scType && ucType && nuType && spType)
{
  for (var i = 0; i < passwordLength; i++) {
     randomNumber = scucnusp[Math.floor(math.random()*scucnusp.length)];   
      }
}

  
        var passwordChoice = passwordArray[randomNumber];
        var password = passwordChoice;
        var passwordText = document.querySelector("#password");
      // Here you can use something to display including .textcontent 
        passwordText.value = password;
      }
      else {passwordLenght = prompt(" You have entered an invalid number,has to be within 8 to 12 characters")
   //Here you can put the if statement for range, also anything entered except numerals is not valid and let the person try again for invalid numbers or letters
}
}


