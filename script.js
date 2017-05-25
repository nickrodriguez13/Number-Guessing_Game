/*
   Final Project

   Author:  	Nicholas Rodriguez
   Date:    	12/10/2016

   Filename: script.js
*/

var minimum, maximum, randomNumber;
var attempts = 0;
var guesses = [];
var outputNumbers = " ";

function startGame() {
	document.getElementById("from").focus();
}

function randomNumber() {
	document.getElementById("dialog").value = "Please guess a number, enter it, and press Guess.";
	
	minimum = document.getElementById("from").value; 
	maximum = document.getElementById("to").value;
	
	randomNumber = Math.ceil((Math.random() * maximum) + minimum);
		
	document.getElementById("guess").focus();
}

function guessNumber() {
	attempts++;
	outputNumbers = " ";
	
	var guess = document.getElementById("guess").value;

	/*
	if (guess > maximum || guess < minimum)
	{
		alert("The number you entered is not in the To-From range. Please enter a valid number.");
	}
	*/
	
	if (guess == randomNumber)
	{
		alert("Correct! It took you " + attempts + " attempts to guess this number.")
		location.reload();
	}
	else if (guess > randomNumber)
		document.getElementById("dialog").value = "My number is less than " + guess + ".";
	else if (guess < randomNumber)
		document.getElementById("dialog").value = "My number is greater than " + guess + ".";
	
	guesses.push(guess);
	
	for (var i = 0; i < guesses.length; i++)
		outputNumbers = outputNumbers + " " + guesses[i];		
	
	document.getElementById("output").value = "Number(s) Guessed:" + outputNumbers; 
	document.getElementById("guess").value = null;
}