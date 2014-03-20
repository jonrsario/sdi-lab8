/// alert("JavaScript works!");

//Jonathan Rosario
//Lab 8
//Problem 1
//Email Checker


//variables
/*
var myEmail = "jonathanrosario@fullsailedu"

//function

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

var myList = 'Jonathan Alyssa Britney';

var listChanger = function(myList) {

	var replaced = myList.split(' ').join(',');
	console.log(replaced)

	var replaced = myList.split(' ').join('/');
	console.log(replaced)

};

listChanger()



