
//running server
//recieving socket messages
//send it back out to clients


var express = require ('express'); 	// importing the module and access it; variable acting as a function call

var app = express(); 			 	//make a express application ; create app

const port = process.env.PORT || 4000;
var server = app.listen(port,() => {
	console.log('Starting server at ${port}');
});
 	// run server on port

app.use(express.static('public'));  //host file that are static


console.log("My socket server is running");

var socket = require('socket.io'); // socket - a function

var io = socket(server); // obj track input and output messages

io.sockets.on('connection', newConnection);

function newConnection(socket){
	console.log('new connection' + socket.id); // auto assigned id number

	//server code for message
	socket.on('mouse',mouseMsg); // if there is a message called mouse, trigger mouseMessage

	function mouseMsg(data){
		socket.broadcast.emit('mouse',data); // when the message come in, send it back out 
		//io.sockets.emit(mouse,data); send back to everyone
	// console.log(data);

	}


}

