
//Requirement Files
var inquirer = require("inquirer");
var flash_card = require("./ClozeCard.js");
var quiz = require("./questions.js");

var categories = [];
var facts = quiz.categor
var Q = [];
var count = 0;
var correct = 0;

// Goes through loop and gets category names for prompt
for (var i = 0; i < facts.length; i++) {
	categories.push(facts[i].name);

	 // console.log(facts[i]);
}

console.log("*********************************************************");

//inquirer function for choosing a category
function Game () {
	inquirer.prompt([
	{
		type: "list",
		message: "** Choose a Topic for your quiz =] **",
		choices: categories,
		name: "Game"
	},
		]).then(function(response) {
			var loc;

			for (var i = 0; i < facts.length; i++) if (facts[i].name === response.categor) loc = i;
			for (var i = 0; i < 5; i++) Q[i] = new flash_card(facts[loc][i].Q, facts[loc][i].A);

			trivia();
		});
}

//Restart Function
function restart () {
	inquirer.prompt([
	{
		type: "confirm",
		message: "** Play Again? =] **",
		default: true,
		name: "restart"

	},

		]).then(function(response) {
			if(response.restart){
				count = 0; correct = 0; Game();
			}
		});
}

//Run flash_card trivia
function trivia () {

	if (count < 5) {
		
		Q[count].clozeDone();
		
		console.log("\nQuestion " + (count + 1))
		console.log("***************");

//Prompt Question
		inquirer.prompt([
		    {
		      	type: "input",
		      	message: Q[count].partial,	
		      	name: "answer"
		    },

				]).then(function(response) {
	
		if (response.answer.trim().toLowerCase() == Q[count].cloze){
			console.log("\nCorrect!\n" + Q[count].fullText);
			correct++
		} 
		else console.log("\nIncorrect!\n" + Q[count].fullText);
		count++ 
		
		trivia();			
		});
	}
		else {
		console.log("\nResults\n----------------\nYou Answered " + correct + " correct.\n");
		//Ask to restart game 
		restart();
	}
}

//Run App
Game();



