canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeight = 90;

backgroundImage = "mars.jpg";

roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src = backgroundImage;   // carregar a imagem

	roverImgTag = new Image(); //definindo uma variável com uma nova imagem
	roverImgTag.onload = uploadrover; // ajustando uma função, ao carregar essa variável
	roverImgTag.src = roverImage;   // carregar a imagem
}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}


window.addEventListener("keydown", myKeyDown);

//comece o seu código aqui 
function myKeyDown(e){
	KeyPressed=e.KeyCode;
	console.log(KeyPressed);
	if(KeyPressed=='38'){
		up();
		console.log("cima");
	}
	if(KeyPressed=='40'){
		down();
		console.log("baixo");
	}
	if(KeyPressed=='37'){
		left();
		console.log("esquerda");
	}
	if(KeyPressed=='39'){
		right();
		console.log("direita");
	}
}
function up(){
	if(roverY>=0){
		roverY=roverY-10;
		console.log("quando direcional cima for precionado, x= "+ roverX+"y="+ roverY);
		uploadBackground();
		uploadrover();
	}
}
function down(){
	if(roverY<=500){
		roverY=roverY+10;
		console.log("quando direcional baixo for precionado, x= "+ roverX+"y="+ roverY);
		uploadBackground();
		uploadrover();
	}
}
function left(){
	if(roverX>=0){
		roverX=roverX-10;
		console.log("quando direcional esquerda for precionado, x= "+ roverX+"y="+ roverY);
		uploadBackground();
		uploadrover();
	}
}
function right(){
	if(roverX<=700){
		roverX=roverX+10;
		console.log("quando direcional direita for precionado, x= "+ roverX+"y="+ roverY);
		uploadBackground();
		uploadrover();
	}
}