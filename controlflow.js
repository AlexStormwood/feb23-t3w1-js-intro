if (true){
	console.log("controlflow file loaded");
}

// if (0 || (0 && 1)){

/*

result1 = true && true 
result2 = true && false 

result3 = false || true
result4 = false || false

result5 = 0 && 1


*/

let shortCircuitExperiment = null ?? 2
console.log(shortCircuitExperiment);

let authResponse = null;
let errorResponse = {
	code: 401,
	message: "Auth went bad."
}
let someAuthExample = authResponse ?? errorResponse;
console.log(someAuthExample);
if (someAuthExample.code == 401){
	console.error("Login error occured!"); 
}


if (0 || false){
	console.log("controlflow short cirtcuit condition");
} else {
	console.log("if was given a 'false' so it didn't run");
}

let someValue = "true";

// truthy checking
if (someValue){
	console.log("someValue has a message!! It is: \n" + someValue);
}

// equality checking 
if (someValue == true){
	console.log("the someValue string equalled a true boolean value");
} else {
	console.log("the someValue string did NOT equal a true boolean value");
}


/*
syntax for our if
if someValue
	print("tada!")

if (someValue) {
	console.log("tada!")
}
*/

// let choice = prompt("What is your favourite colour?")
// function switchFunction(choiceInput){
// 	switch(choiceInput) {
// 		case "blue":
// 			alert("No way! That's the colour of the sky!");
// 			return "blue";
// 		case "green":
// 			alert("That's not very creative.");
// 			break;
// 		case "red":
// 			alert("That's a speedy colour!");
// 			// return "some value returned";
// 			break;
// 		default: 
// 			alert("...That doesn't seem like a cool colour");
// 			return false;
// 			break;
// 	}
// }
// let result = switchFunction(choice);


let ternaryResult = true ? 
console.log("true is truthy") 
: 
console.log("it was falsy!");


let ifElseResult = null;
if (true){
	ifElseResult = console.log("true is truthty");
} else {
	ifElseResult = console.log("it was falsy");
}

/* 

return isUserLoggedIn() ?
<html for true>
 blah blah whatever user is logged in, show their account details
</html>
:
<html for false>
redirect to login screen 
</html>
*/



/*

function returnSomeValue(){
	return someComplexCalculation() ? successMessage : errorMessage
}

*/
