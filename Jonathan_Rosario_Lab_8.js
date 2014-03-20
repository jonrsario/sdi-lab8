/// alert("JavaScript works!");

//Jonathan Rosario
//Lab 8
//Problem 1

var myEmail = "jonathanrosario@fullsail.edu"

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

		console.log("The email address has a period in the wrong place!");

	}

	if (mySpace > 0) {

		console.log("The email address has no spaces, therefore, so far seems to be correct!");

	}
	
};

emailChecker();



