function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l','m','n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var letter = alpha[getRandomInt(1, alpha.length) - 1];

var guesses = 10;

var losses = 0;
 
var wins = 0;
var guesList = [];




	document.onkeyup = function(event){
	
		if(guesses > 0){
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			guesList.push(userGuess);
			if(userGuess == letter){
				wins++;
				letter = alpha[getRandomInt(1, alpha.length) - 1];
			}
			else if(userGuess != letter){
				losses++;
				guesses--;
			}
			document.getElementById("wins").innerHTML = "Wins: " + wins;
			document.getElementById("losses").innerHTML = "Losses: " + wins;
			document.getElementById("guesses").innerHTML = "Guesses: " + guesses;
			document.getElementById("list").innerHTML = "Letters guessed: " + guesList;
		} else{
			guesses = 10;
			losses = 0;
			wins = 0;
			guesList = [];
		}
	}
	
	
	
	// var guesList = userGuess;

