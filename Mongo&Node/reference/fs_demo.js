const fs = require('fs');
const path = require('path');

//Create folder
fs.mkdir(path.join(__dirname,'/test'),{},function(err){  //two ways of function: use function method and the fat arrow method
    if (err) throw err;
    console.log('Folder created');
}) //asynchronous