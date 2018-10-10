/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var basics = require('./promiseConstructor.js');
var githubStuff = require('./promisification.js');
var writeFile = Promise.promisify(fs.writeFile);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  //console.log(basics);
  return basics.pluckFirstLineFromFileAsync(readFilePath)
    .then((user) => {return githubStuff.getGitHubProfileAsync(user);
    })
    .then((profile)=>{
    //console.log(writeFilePath);
      return writeFile(writeFilePath, JSON.stringify(profile), 'utf8');
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
