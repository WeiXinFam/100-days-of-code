const path = require('path');

// Base file name
// console.log(__filename) //gives entire path
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename)); //call on property by .base

//Concatenate paths
console.log(path.join(__dirname,'test','hello.html'));
