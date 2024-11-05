/*
lab.js - This simiple JavaScript/jQuery script usese buttons to modify some elements on the page.

Requiremnets: JQuery must be loaded for this script to work.

 Author: JC Toringan
 Date: 31 October 2024
*/

console.log("JavaScript loaded!");

$(document).ready(function() {
    $("#myButton").click(function() {
        $("#textElement").text("HAHAH JC CAN CODE!");
    });
});

$(document).ready(function() {
     $('#myButton1').click(function() {
        alert('The buttons are working! Thankyou Kimberly and Dani from group 11');
    });
 });

 $(document).ready(function() {
    $('#myButton2').click(function() {
      $("#results").toggleClass(".special");
   });
});