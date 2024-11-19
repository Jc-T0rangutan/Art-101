/*
lab.js - This simiple JavaScript/jQuery script usese buttons to modify some elements on the page.

Requiremnets: JQuery must be loaded for this script to work.

 Author: JC Toringan
 Date: 18 November 2024
*/

document.getElementById("runButton").addEventListener("click", fizzBuzzBoom);

function fizzBuzzBoom() {
  const maxNumberInput = document.getElementById("maxNumber");
  const maxNumber = parseInt(maxNumberInput.value, 10);
  const outputDiv = document.getElementById("output");

  outputDiv.innerHTML = ""; // clear past output

  //validate user imput
  if (isNaN(maxNumber) || maxNumber <=0) {
    outputDiv.innerHTML = "<p>Please enter a valid positive number.</p>";
    return;
  }

  for (let i = 1; i <= maxNumber; i++) {
    let result = "";

    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    if (i % 7 === 0) result += "Boom";

    if (result === "") result = i;

    // Append the reult to the output div
    const paragraph = document.createElement("p");
    paragraph.textContent = result;
    outputDiv.appendChild(paragraph);
  }
}