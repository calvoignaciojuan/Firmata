
var socket = io.connect('http://localhost:8080',{'forceNew': true});

function play(e){

	
		socket.emit('mensaje-web-serv-play',document.getElementById("codigo").value);

		console.log("codigo enviado play");

	return false;
}

function stop(e){

	
		socket.emit('mensaje-web-serv-stop',document.getElementById("codigo").value);

		console.log("codigo enviado stop");
	
	return false;
}


             //'var five = require("johnny-five"),'+
		     //'board = new five.Board();'+
             //'board.on("ready", function() {'+
		     //'var led = new five.Led(2);'+
		     //'led.strobe();});'