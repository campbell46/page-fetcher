const fs = require("fs");
const request = require("request");

//get user input from terminal, slice first 2 elements
const userInput = process.argv.slice(2);
//create variables for each input
const url = userInput[0];
const fileName = userInput[1];

//request website content from url
request(url, function(error, response, body) {
  //write new file with user inputed url
  fs.writeFile(userInput[1], body, (error) => {
    //log error if true
    if (error) {
      console.log(error);
    } else {
      //log file info
      console.log(`Downloaded and saved ${body.length} bytes to ${fileName}`);
    }
  });
});