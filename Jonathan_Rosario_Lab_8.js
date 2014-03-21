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

var myList = "Alyssa Britney Lauren Angel Joe Katie";
var myComma = ","
var mySlash = "/"

var listChanger = function(firstReplaced, secondReplaced) {

	firstReplaced = myList.split(' ').join(myComma);
	console.log("These are my friends: " + firstReplaced)

	secondReplaced = myList.split(' ').join(mySlash);
	console.log("These are my friends: " + secondReplaced)

};

listChanger()



