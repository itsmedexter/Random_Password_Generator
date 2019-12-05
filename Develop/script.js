// have a container that holds all the upper lower alphabet, numbers, special characters
// *This changed quickly when I started to the whole string, modified approach

// tell the computer to randomly pick characters from the variable  

// then place the randomly picked character in another container until it reaches the min or max point

// when it reaches min or max, display random generated password




var char = [ "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];

var abcLow = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var abcUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numb = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var spCh = ["!", "@", "#", "$", "%", "^", "&", "(", ")", "_", "-", "~", ":", ";", "/", "?", "{", "}", "|", "[", "]"];


var resultsA = "";
var resultsB = "";
var resultsC = "";
var resultsD = "";
var resultsE = resultsA + resultsB + resultsC + resultsD;
var finalResults = "";

// var spChPrompt = confirm("Must have Special Characters");
// var numbPrompt = confirm("Must be have Numbers");
// var abcLowPrompt = confirm("Must have lowercase characters");
// var abcUpPrompt = confirm("Must have uppercase characters");
var howLong = prompt("How many characters would you like your password to contain.");

if ( howLong < 8 ) {
  alert("Password length must be 8 characters long..");
}

else if ( howLong > 8 ) {
  alert("Click OK to confirm including special characters.");
  alert("Click OK to confirm including number characters.");
  alert("Click OK to confirm including lowercase characters.");
  alert("Click OK to confirm including uppercase characters.");

}




// }

// for (var a = 0; a < abcUp.length; a++){
//   if (abcUp[a].charAt(0) === "D"){
//     console.log("Starts with a D " + studentsRow2[a]);
//   }
// }


// var emptyString = "";
// var alphabet = "abcdefghijklmnopqrstuvwxyz";


function generatePassword(){

// Loop for lowercase 
while (resultsA.length < 10) {
 resultsA += abcLow[Math.floor(Math.random() * abcLow.length)];
} 
console.log(resultsA);

// Loop for uppercase 
while (resultsB.length < 10) {
 resultsB += abcUp[Math.floor(Math.random() * abcUp.length)];
} 
console.log(resultsB);

// Loop for numbers 
while (resultsC.length < 10) {
 resultsC += numb[Math.floor(Math.random() * numb.length)];
} 
console.log(resultsC);

// Loop for special characters 
while (resultsD.length < 10) {
 resultsD += spCh[Math.floor(Math.random() * spCh.length)];
} 
console.log(resultsD);

// Loop to add all four to get final result  
while (finalResults.length < 10) {
 finalResults += resultsE[Math.floor(Math.random() * resultsE.length)];
} 
console.log("password is " + finalResults);

onclick.getElementById("buttonG").value = finalResults;
console.log("2" + finalResults);

document.getElementById("forminput").value = finalResults;
console.log("this " + finalResults);

// copy command
function myFunction() {
  var copyText = document.getElementById("copyb");
  copyText.select();
  copyText.setSelectionRange(0, 128)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}


}


// text content, words, html for document value
