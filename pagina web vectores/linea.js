//PUNTO 1
function X(){
	// Obtener el elemento canvas y su contexto
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	
	// Definir el vector
	var vector =[-400, 400]; // Vector [x1, y1]
	
	// Calcular la escala del gráfico
	var escala = 50; // Cada unidad del vector representa 50 píxeles en el 		canvas
	
	// Calcular las coordenadas finales del vector
	var x1 = vector[0] * escala + canvas.width / 2;
	var y1 = -vector[1] * escala + canvas.height / 2;
	
	// Dibujar el vector en el canvas
	ctx.beginPath();
	ctx.moveTo(canvas.width / 2, canvas.height / 2);
	ctx.lineTo(x1, y1);
	ctx.strokeStyle = "red";
	ctx.lineWidth = 2;
	ctx.stroke();
	
	//Distancia entre los puntos
	var start = [0, 0];
 	var end = [-400, 400];
 	var distance = Math.sqrt(Math.pow(end[0] - start[0], 2) + Math.pow(end[1] - start[1], 2));
 	var coordinates = document.getElementById("var vector");
 	coordinates.textContent = "La distancia del punto 1 es: " + distance;
}


//PUNTO 2
function XX(){
	// Obtener el elemento canvas y su contexto
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	
	// Definir el vector
	var vector =[10, -6]; // Vector [x2, y2]
	
	// Calcular la escala del gráfico
	var escala = 50; // Cada unidad del vector representa 50 píxeles en el 	canvas
	
	// Calcular las coordenadas finales del vector
	var x2 = vector[0] * escala + canvas.width / 2;
	var y2 = -vector[1] * escala + canvas.height / 2;
	
	// Dibujar el vector en el canvas
	ctx.beginPath();
	ctx.moveTo(canvas.width / 2, canvas.height / 2);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = "green";
	ctx.lineWidth = 2;
	ctx.stroke();
	
	//Distancia entre los puntos
	var start1 = [0, 0];
 	var end1 = [10, -6];
 	var distance1 = Math.sqrt(Math.pow(end1[0] - start1[0], 2) + Math.pow(end1[1] - start1[1], 2));
 	var coordinates = document.getElementById("var vector");
 	coordinates.textContent = "La distancia del punto 2 es: " + distance1;
}


//PUNTO 3
function XXX(){
	// Obtener el elemento canvas y su contexto
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	
	// Definir el vector
	var vector =[5, 14]; // Vector [x3, y3]
	
	// Calcular la escala del gráfico
	var escala = 50; // Cada unidad del vector representa 50 píxeles en el 		canvas
	
	// Calcular las coordenadas finales del vector
	var x3 = vector[0] * escala + canvas.width / 2;
	var y3 = -vector[1] * escala + canvas.height / 2;
	
	// Dibujar el vector en el canvas
	ctx.beginPath();
	ctx.moveTo(canvas.width / 2, canvas.height / 2);
	ctx.lineTo(x3, y3);
	ctx.strokeStyle = "pink";
	ctx.lineWidth = 3;
	ctx.stroke();
	
	//Distancia entre los puntos
	var start2 = [0, 0];
 	var end2 = [5, 14];
 	var distance2 = Math.sqrt(Math.pow(end2[0] - start2[0], 2) + Math.pow(end2[1] - start2[1], 2));
 	var coordinates = document.getElementById("var vector");
 	coordinates.textContent = "La distancia del punto 3 es: " + distance2;
}


//PUNTO 4
function XXXX(){
	// Obtener el elemento canvas y su contexto
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	
	// Definir el vector
	var vector =[-17, 1]; // Vector [x4, y4]
	
	// Calcular la escala del gráfico
	var escala = 50; // Cada unidad del vector representa 50 píxeles en el 	canvas

	// Calcular las coordenadas finales del vector
	var x4 = vector[0] * escala + canvas.width / 2;
	var y4 = -vector[1] * escala + canvas.height / 2;
	
	// Dibujar el vector en el canvas
	ctx.beginPath();
	ctx.moveTo(canvas.width / 2, canvas.height / 2);
	ctx.lineTo(x4, y4);
	ctx.strokeStyle = "black";
	ctx.lineWidth = 2;
	ctx.stroke();
	
	//Distancia entre los puntos
	var start3 = [0, 0];
 	var end3 = [-17, 1];
 	var distance3 = Math.sqrt(Math.pow(end3[0] - start3[0], 2) + Math.pow(end3[1] - start3[1], 2));
 	var coordinates = document.getElementById("var vector");
 	coordinates.textContent = "La distancia del punto 4 es: " + distance3;	
}


// Función para borrar las líneas de la gráfica
function borrarLineas(){
	//Obtener el elemento canvas y su contexto
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	//Limpiar el canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(0, 0);
	ctx.stroke();
}