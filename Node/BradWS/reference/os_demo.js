const os = require('os');

//Platform
console.log(os.platform());

//CPU Arch
console.log(os.arch());

//CPU Core Info
console.log(os.cpus());

//Memory information
console.log(os.freemem());  //Free memory
console.log(os.totalmem()); //Total memory

//Home Dir
console.log(os.homedir())

//Uptime
console.log(os.uptime())