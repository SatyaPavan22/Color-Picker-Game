var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor  = pickColor();
var display = document.getElementById("colordisplay")
var msgDisplay = document.querySelector("#message");
var h1=document.querySelector("h1");
var refresh = document.querySelector("#refresh");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var numSquares = 6;

easyButton.addEventListener("click",function(){
easyButton.classList.add("selected");
hardButton.classList.remove("selected");
numSquares = 3;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
display.textContent = pickedColor;
for(var i=0;i<squares.length;i++)
{
	if(colors[i])
		squares[i].style.backgroundColor = colors[i];
	else
		squares[i].style.display = "none";
}
h1.style.backgroundColor = "steelblue";
});

hardButton.addEventListener("click",function(){
hardButton.classList.add("selected");
easyButton.classList.remove("selected");
numSquares = 6;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
display.textContent = pickedColor;
for(var i=0;i<squares.length;i++)
{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
}
h1.style.backgroundColor = "steelblue";
});

display.textContent = pickedColor;
for(var i=0;i<squares.length;i++){
squares[i].style.backgroundColor=colors[i];

squares[i].addEventListener("click",function(){
  var clickedColor = this.style.backgroundColor;
  if(clickedColor == pickedColor){
  		msgDisplay.textContent = "Correct" ;
  		changeColors(clickedColor);
  		h1.style.backgroundColor = clickedColor;
  		refresh.textContent = "PLAY AGIAIN";
  	}
  	else{
  		this.style.backgroundColor="#232323";
  		msgDisplay.textContent = "Try Again";
  		refresh.textContent = "NEW COLORS";

  	}
});
}
function changeColors(color){
	for(var i=0;i<squares.length;i++){
squares[i].style.backgroundColor=color;

}}
function pickColor(){
	var colorsrand = Math.floor(Math.random()*colors.length);
	return colors[colorsrand];
}
function generateRandomColors(num){
	var arr = [];
	for(var i=0;i<num;i++)
	{
		arr[i]="rgb("+Math.floor((Math.random()*256)+1).toString()+", "+Math.floor((Math.random()*256)+1).toString()+", "+Math.floor((Math.random()*256)+1).toString()+")";

	}
	console.log(arr);
	return arr;
}
refresh.addEventListener("click",function(){
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
display.textContent = pickedColor;
for(var i=0;i<squares.length;i++){
squares[i].style.backgroundColor=colors[i];
}
h1.style.backgroundColor = "steelblue";
msgDisplay.textContent = "";
});