const request = require('request');
const fs = require('fs');
const { Buffer } = require('safe-buffer');
let url = process.argv[2];
let filePath = process.argv[3];
request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(filePath, body, function(err) {
    if(err) {
        return console.log(err);
    }
    let size = Buffer.byteLength(body,'utf8');
    console.log(`Downloaded and saved ${size} to ${filePath}`);
    }); 

});