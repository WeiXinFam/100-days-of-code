const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host
console.log(myUrl.host); //root domain
console.log(myUrl.hostname); //HostName

//Pathname
console.log(myUrl.pathname);

//Serialized Query
console.log(myUrl.search);

//Params
console.log(myUrl.searchParams); //Params Object
myUrl.searchParams.append('abc','123'); //Add Param
myUrl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`)); //Loop through params
