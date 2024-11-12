/*
lab.js - This simiple JavaScript/jQuery script usese buttons to modify some elements on the page.

Requiremnets: JQuery must be loaded for this script to work.

 Author: JC Toringan
 Date: 11 November 2024
*/

console.log("JavaScript loaded!");

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
// get value of input field
const userName = $("#user-name").val();
// now let's sort it
userNameSorted = sortString(userName);
// append a new div to our output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});