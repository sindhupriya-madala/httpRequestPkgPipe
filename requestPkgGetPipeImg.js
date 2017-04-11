var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')              // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {
          response.on('data', (chunk) => {
            console.log("on receiving data in chunks");
          });
          response.on('end', () => {
            console.log("on end of response");
            console.log('Response Status Code: ', response.statusCode);
            console.log('Response message is : ', response.statusMessage);
            console.log('Response Content-Type : ', response.headers['content-type']);

          })
                //console.log(Object.keys(response));

       })
       .pipe(fs.createWriteStream('./future.jpg'));               // Note 4
