/// alert("JavaScript works!");

//Jonathan Rosario
//Lab 8
//Problem 1

var myEmail = "jonathanrosario@fullsail.edu"

var emailChecker = function(stringToCheck) {
	
	var myAt = stringToCheck.indexof("@");
	
	var mySpace = stringToCheck.indexof(" ");
	
	var myPPeriod = stringToCheck.indexof(".");
	 
		for (var key in stringToCheck) {
		
			resOfEmail = "";
		
		for (var checkAt = ("@"); i < stringArray[key].length; i++) {
			
			if (i = 0) {
				
				var firstLetter = stringArray[key][i]();
				
			} else {
				
				restOfEmail = restOfEmail + stringArray[key][i];
				
			}
			
		
				
				
				
				
};
	
emailChecker();
	
console.log("The email is valid");

console.log("The email is not valid")

/*
//Problem 2

var myList = "Jonathan Alyssa Britney"

var spaceChanger = function(stringToChange) {
	
	var whereSpace = val.indexOf(" ");
	
	return whereSpace;
	
};

console.log(whereSpace)

/*
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



