// index.js - purpose and description here
// Author: JC Toringan
// Date: 22 October 2024

// Define Variables
myTransportation = ["B-Cycle", "Metro Buses", "Walking", "Friends' car"];

//create an object for my main ride
myMainRide= {
    make: "Jeep",
    model: "G-Wagon",
    color: "Sage Green",
    year: "2017",
    // we can define a function wityhin our object (called a method)
    // that uses the value of year above (using this.year)
    age: function () {
       return 2024 - this.year;
    }
  }

  //output
  document.writeln("kinds of transportation I use:", myTransport, "</br>");
  // this little trick allows us to write an object to the document
  document.writeln ("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '/t'), "</pre>");

