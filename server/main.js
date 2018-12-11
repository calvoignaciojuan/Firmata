const fs = require("fs");
const util = require('util');
const exec = util.promisify(require('child_process').exec);

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/',function(req,res){
	res.status(200).send("Hola");
});

var five = require("johnny-five"),board = new five.Board({repl: false,debug: false,});

var Ejecutar = false;
var code='';
var led;

board.on('ready', function () {	

	led = new five.Led(2);

	io.on('connection',function(socket){

			console.log("Alguien se ha conectado");	
			 
			socket.on('mensaje-web-serv-play',function(data){

			 	Ejecutar =true;
			 	code=data;
			 	eval(code);
			 	console.log(code);
			 	
			 	//if (Ejecutar){
			 		//code=data;
			 	//	console.log("llego el dato");
			 	//	eval(code);
			 	//	eval("led.on();");
					//eval('board.on("ready", function() {var led = new five.Led(2); if ('+ ((Ejecutar)) +'){ led.strobe();}else{led.off();} });');
				//	console.log("Ejecutando");
				//}
					//console.log("ejecutando");
					//ejecutar('cd C:/Users/Juan/Desktop/sockets/server/codigo/ & echo ' + ((data)) + '>Codigo.js & node C:/Users/Juan/Desktop/sockets/server/codigo/Codigo.js & ');	
					//exec('node C:/Users/Juan/Desktop/sockets/Codigo/Codigo1.js & ');
					//console.log("listo");		

			});	

			socket.on('mensaje-web-serv-stop',function(data){	

			 	Ejecutar =false;
			 	code='';

			 	//if(!Ejecutar){
				//	console.log("stopping");
				//	eval("led.off();");
					//eval(code);
					//eval('board.on("ready", function() {var led = new five.Led(2); if ('+ ((Ejecutar)) +'){ led.strobe();}else{led.off();} });');
				//	console.log("Ejecutando");
					//ejecutar('taskkill /im node.exe /F & ');	
					//exec('killall node --harmony Codigo1.js');
					//console.log("listo");
				//}
					
			});	 				
	});
			
});

/*board.loop(1, function codigo(){

	eval(code);
});*/


//async function escribirArchivo(data){
//	var path ="C:/Users/Juan/Desktop/sockets/server/Codigo.js"
//	fs.writeFileSync(path, data,function(error,body){
//	});
//}

async function ejecutar(cmd) {
  const { stdout, stderr } = await exec(cmd);
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
  console.log("listo");
}


server.listen(8080,function(){
	console.log("ok");

});
