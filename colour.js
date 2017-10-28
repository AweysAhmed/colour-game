var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var displayColor = document.getElementById("colorDisplay");
displayColor.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("#header");
var resetGame = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");


init();

function init() {
  modeButtons();
  setSquares();
  reset();
}




function modeButtons() {
  for (var i = 0; i < mode.length; i++){
    mode[i].addEventListener("click", function(){
    mode[0].classList.remove("selected");
    mode[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numSquare = 3;
        
      } else {
        numSquare = 6;
      }
      reset();
    });
    }
  }

resetGame.addEventListener("click", function(){
reset();
  
});

function reset() {
  colors = generateRandomColors(numSquare);
  pickedColor = pickColor();
  displayColor.textContent = pickedColor;
  messageDisplay.textContent = "";
  header.style.backgroundColor = "steelblue";
  resetGame.textContent = "New Colors";
  for(var i = 0; i < squares.length; i++){
      if (colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
      } else {
        squares[i].style.display = "none";
      }
  }
}


function setSquares() {
for(var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  
  
  
  squares[i].addEventListener("click", function(){
var clickedColor = this.style.backgroundColor;
    
  if (clickedColor === pickedColor){
    messageDisplay.textContent = "Correct!";
    resetGame.textContent = "Play Again?";
    changeColors(clickedColor);
    header.style.backgroundColor = clickedColor;
  }
    else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
      }
    });
  }
}

function changeColors(color){
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + b + ", " + g + ")";
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random]; 
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  
  return arr;
  
}


  
  