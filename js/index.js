var player1Name = document.querySelector(".player1");
var player2Name = document.querySelector(".player2");
player1Name.innerText = prompt("Please enter the name of player 1");
player2Name.innerText = prompt("Please enter the name of player 2");

function gameOn() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var image1 = document.querySelector(".img1");

  var image2 = document.querySelector(".img2");

  image1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  image2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩" + player1Name.innerText + " WIN !";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw !";
  } else {
    document.querySelector("h1").textContent = player2Name.innerText + " WIN ! 🚩";
  }
}
