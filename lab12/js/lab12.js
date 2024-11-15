/*
lab.js - This simiple JavaScript/jQuery script usese buttons to modify some elements on the page.

Requiremnets: JQuery must be loaded for this script to work.

 Author: JC Toringan
 Date: 14 November 2024
*/

console.log("JavaScript loaded!");

function sortingHatLength(str) {
  let len = str.length;
  let mod= len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }

  else if (mod == 1) {
    return "Ravenclaw"
  }

  else if (mod == 2) {
    return "Slytherin"
  }

  else if (mod == 3) {
    return "Hufflepuff"
  }
}

$("#button").click(function(){
  console.log("Name: " + name);
  var name = $("#name").val()
  console.log("House: " + house);
  var house = sortingHat(name);
  $("#output").html("<h1>" + house + "</h>");
});