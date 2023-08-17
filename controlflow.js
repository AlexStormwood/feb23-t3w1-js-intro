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