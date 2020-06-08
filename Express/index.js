const express = require('express');
const path = require('path');
const members = require('./Members')
const logger = require('./middleware/logger')

const app = express();

//Initialise middleware
// app.use(logger);

//API
app.get('/api/members', (req,res) => {
    res.json(members); //to return json
}); // does not need curly brackets if only one line
//check on POSTMAN http://localhost:5000/api/members

//Get Single Member
app.get('/apu/members/:id', (req,res) => {
    // res.send(req.params.id);
    res.json(members.filter(member => member.id === parseInt(req.params.id)));// req.params.id is a string
})


//Create route
//This is not ideal as have to create a route for a single page
//Use express to make this static
// app.get('/', (req, res) =>{
//     // res.send('Hello World');
//     res.sendFile(path.join(__dirname,'public','index.html'))
// });

//Set static folder
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000; //check port in environment variable and see if it's available
app.listen(PORT, () => console.log(`Server started on Port ${PORT}`)); //run web server
