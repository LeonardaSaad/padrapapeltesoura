var pedra = document.getElementById("img-pedra")
var papel = document.getElementById("img-papel")
var tesoura = document.getElementById("img-tesoura")
var count = document.getElementById("count")
var res = document.getElementById("res")

var iaScore = 0
var pScore = 0

function play(pChoice) {
  var iaChoice = Math.floor(Math.random()*3) + 1

  if( (iaChoice == 1 && pChoice == 3) ||
      (iaChoice == 2 && pChoice == 1) ||
      (iaChoice == 3 && pChoice == 2) ) {

    iaScore++
    winner = "IA"
    res.innerHTML = "GANHADOR: " + winner
    count.innerHTML = "Player | " + pScore + " X " + iaScore + " | IA"
    
  } else if(iaChoice == pChoice) {
    winner = "NONE"
    res.innerHTML = "GANHADOR: " + winner
    count.innerHTML = "Player | " + pScore + " X " + iaScore + " | IA"
    
  } else {
    pScore++
    winner = "PLAYER"
    
    res.innerHTML = "GANHADOR: " + winner
    count.innerHTML = "Player | " + pScore + " X " + iaScore + " | IA"
  }
  
}