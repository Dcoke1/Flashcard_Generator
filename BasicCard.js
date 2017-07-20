
//Requirement Files
var inquirer = require("inquirer");
var flash_card = require("./ClozeCard.js");
var quiz = require("./questions.js");

var categories = [];
var facts = questions.categor
var A = [];
var count = 0;
var correct = 0;

// Goes through loop and gets category names for prompt
for (var i = 0; i < facts.length; i++) {
	categories.push(facts[i].name);

	 console.log(facts[i]);
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

		});
}


