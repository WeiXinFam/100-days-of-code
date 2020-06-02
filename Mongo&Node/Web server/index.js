const http = require('http')   //to start the server by using the library http
const fs = require('fs') //to read file
const port = 3000

const server = http.createServer(function(req,resp){
    resp.writeHead(200,{'Content-Type': 'text/html'}) //for writing in HTML 
    fs.readFile('index.html',function(error,data){
        if(error){
            resp.writeHead(404)
            resp.write('Error File Not Found')
        }else{
            resp.write(data)
        }
        resp.end()
    })
    // resp.write('Hello Node')
    // resp.end()
})

// to respond to requests from server

server.listen(port, function(error){
    if (error){
        console.log('Something went wrong', error)
    }
    else{
        console.log('Server is listening on port ', port)
    }
})