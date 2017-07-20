
//Requirement Files
var inquirer = require("inquirer");
var flash_card = require("./ClozeCard.js");
var quiz = require("./questions.js");

var categories = [];
var facts = questions.categor
var A = [];
var count = 0;
var correct = 0;

for (var i = 0; i < facts.length; i++) {
	categories.push(facts[i].name);

	 console.log(facts[i]);
}

