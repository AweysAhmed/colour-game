var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var displayColor = document.getElementById("colorDisplay");
displayColor.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("#header");
var resetGame = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");






  
  


easyBtn.addEventListener("click", function(){
  numSquare = 3;
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  colors = generateRandomColors(numSquare);
  pickedColor = pickColor();
  displayColor.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.display = "none";
    }
  }
  
});

hardBtn.addEventListener("click", function(){
  numSquare = 6;
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  colors = generateRandomColors(numSquare);
  pickedColor = pickColor();
  displayColor.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++){
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
    
  }
  
});

resetGame.addEventListener("click", function(){
  colors = generateRandomColors(numSquare);
  pickedColor = pickColor();
  displayColor.textContent = pickedColor;
  messageDisplay.textContent = "";
  header.style.backgroundColor = "steelblue";
  resetGame.textContent = "New Colors?";
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  
});





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




  
  