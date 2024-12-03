/*
lab.js - This simiple JavaScript/jQuery script usese buttons to modify some elements on the page.

Requiremnets: JQuery must be loaded for this script to work.

 Author: JC Toringan
 Date: 2 December 2024
*/

// Function to get and display comic data
function getAndPutData(comicNum) {
  $.ajax({
    url: `http://xkcd.com/${comicNum}/info.0.json`, // Dynamically includes comicNum
    dataType: "json",
    success: function(data) {
      // Update webpage with comic image and title
      $('#comic-title').text(data.title);
      $('#comic-image').attr('src', data.img);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
    }
  });
}

// Initial call to Display the first comic
getAndPutData(comicNum);

// Event Listener for next button
$('#next-button').click(function() {
  comicNum++;
  getAndPutData(comicNum);

});

// Event Listner for previous button
$('#prev-button').click(function() {
  comicNum--;
  if(comicNum < 1) {
    comicNUm = 1; //Enusre comic number dosent go below 1
  }
  getAndPutData(comicNum);
});

