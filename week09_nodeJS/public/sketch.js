
//client code: send and recieve message to the server 


var socket;

function setup() {
  createCanvas(600, 600);
    background(255);


  textSize(24);
  text("drag the mouse across the canvas to draw.", 50, 570);

  socket = io.connect('http://localhost:4000');
  socket.on('mouse',newDrawing);
}


// event for when message come in 
function newDrawing(data){
  noStroke();
  fill(233,34,100);
  ellipse(data.x, data.y, 40,40);
}



function mouseDragged(){
  // console.log('Sending:' +mouseX+ ","+mouseY);
  fill(0);
  ellipse (mouseX,mouseY,40,40);


  // name for message -- string ; data for the message -- JS obj

var data = {
  x: mouseX,
  y:mouseY
}

socket.emit('mouse',data); // name:mouse
}






