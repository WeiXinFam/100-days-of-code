// console.log('Hello From Node.js')
// Run JS file in terminal by: node <filename>

// const Person = require('./person');
// const p1 = new Person('John',28)
// p1.greeting();
// to get specific person attribute, put person.name

const Logger = require('./logger');

const logger = new Logger();

logger.on('message',(data)=>console.log('Called Listener: ', data));
logger.log('Hello World');

//To try tmr: using these modeules to key in and listen to what the user is writing