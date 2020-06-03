const fs = require('fs');
const path = require('path');

//Comment out as the folder is created
// Create folder
// fs.mkdir(path.join(__dirname,'/test'),{},err=>{  //two ways of function: use function method and the fat arrow method
//     if (err) throw err;
//     console.log('Folder created');
// }) //asynchronous



//Create and write to file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),
//     'Hello World!',
//     err=>{      
//         if (err) throw err;
//         console.log('File created');

//         //File append, else will overwrite orginal file with write file
//         //Create and write to file
//         fs.appendFile(path.join(__dirname,'/test','hello.txt'),
//             'I love Node.JS!',
//             err=>{      
//                 if (err) throw err;
//                 console.log('File created');
// }) 
// }) 

//Read File
// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });

//Rename File
fs.rename(
    path.join(__dirname,'/test','hello.txt'),
    path.join(__dirname,'/test','hello.txt'),
    err=>{
        if (err) throw err;
        console.log('File rename');
});