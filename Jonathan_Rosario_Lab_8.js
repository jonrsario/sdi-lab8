/// alert("JavaScript works!");

//Jonathan Rosario
//Lab 8
//Problem 1
//Email Checker


//variables

var myEmail = "jonathanrosario@fullsailedu"

//function
/*
var emailChecker = function(stringToCheck) {

	var AtLocation = myEmail.lastIndexOf("@");
	
	var myAt = myEmail.indexOf("@");

	var mySpace = myEmail.indexOf(" ");

	var myPeriod = myEmail.indexOf(".");

	if (AtLocation > 1) {

		console.log("You have included an @ symbol as required.");

	} else {

		console.log("Not a valid email address!");

	}
	
	if (myAt < AtLocation) {
		
		console.log("Revise the number of symbols in your email address.");
		
	}

	if (myPeriod < 1) {

		console.log("Revise your period location!");

	}

	if (mySpace > 0) {

		console.log("The email address has no spaces, therefore, so far seems to be correct!");

	}
	
};

emailChecker();

*/


//Problem 2

var myList = "Jonathan Alyssa Britney";

var spaceChanger = function(stringToChange) {
	
	stringToChange = stringToChange.toLowerCase();
	
	var restOfWord = "";
	var stringArray = stringToChange.split(" ");
	
	for (var key in stringArray) {
		
		resOfWord = "";
		
		for (var i = 0; i < stringArray[key].length; i++) {
			
			if (i = 0) {
				
				var firstLetter = stringArray[key][i]touppercase();
				
			} else {
				
				restOfWord = restOfWord + stringArray[key][i];
				
			};
			
		};
	
		if (TitleWord == "") {
	
		titleWord = firstLetter + restOfWord;
	
		} else {
	
		titleWord = titleWord + " " + firstLetter + restOfWord;
		
		}
		
	};
	
	return titleWord;
	
};

var fixedString = spaceChanger(toTitleCase);
console.log("The fixed title is\"" + fixedString + "\"");



