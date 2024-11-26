/*
lab.js - This simiple JavaScript/jQuery script usese buttons to modify some elements on the page.

Requiremnets: JQuery must be loaded for this script to work.

 Author: JC Toringan
 Date: 25 November 2024
*/

// Using the core $.ajax() method
$(document).ready(function() {
  $("#activate").click(function() {
    $.ajax({
      // The URL for the request (from the API docs)
      url: "https://api.nasa.gov/planetary/apod", 
      // The data to send (will be converted to a query string)
      data: { 
        api_key: "07hpSQv63xeRJHEIQxjxFpcVX76TAUy1Ssdk3Dc7"
      },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType: "json",
      // What do we do when the API call is successful
      success: function(data) {
        let mediaElement; 
        if (data.media_type === "image") {
          mediaElement = `<img src="${data.url}" alt="Pokemon pictures" style="max-width: 100%;">`;
        } else if (data.media_type === "video") {
          mediaElement = `<iframe src="${data.url}" frameborder="0" allowfullscreen style="width: 100%; height: 500px;"></iframe>`;
        } else {
          mediaElement = `<p>Unsupported media type: ${data.media_type}</p>`;
        }
        
        // Display the media
        $("#output").html(
          `<h3>${data.name}</h3>
          ${mediaElement}
          <p>${data.explanation}</p>`
        );
      },
      // What we do if the API call fails
      error: function(jqXHR, textStatus, errorThrown) {
        // Display error message
        $("#output").text("An error occurred: " + textStatus);
        console.log("Error:", textStatus, errorThrown);
      }
    });
  });
});
