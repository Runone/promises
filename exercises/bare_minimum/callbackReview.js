/**
 * Implement these functions following the node style callback pattern
 */
//const readline = require('readline');
var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  //console.log(callback);
  // const rl = readline.createInterface({
  //   input: fs.createReadStream(filePath),
  //   crlfDelay: 1
  // });

  // rl.on('line', (line, err) => {
  //   var counter = 0;
  //   counter++;
  //   if (counter === 1) {
  //     rl.close();
  //   }
  //   //rl.on('close')
     
  // })

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (data) {
      var firstLine = data.split('\n')[0];
    }
    //sconsole.log(firstLine);
    if (err) {
      callback(err);
    } else {
      callback(null, firstLine);
    }
  });
  // console.log(filePath);
  // var firstLine;


};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, (err, response, body) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
