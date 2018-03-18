/*
calculates the 2 possible ages based on the years provided.
For example a person born in 2013 may be either 3 or 4 years old at the moment!
outputs the result to the screen like so: "You are either NN or NN"
bonus: instead of passing in the current year as an argument, find a way to get it automatically with JavaScript.
*/


var calcAge = function(Hyear, Lyear){

	return Hyear - Lyear;
}

var d = new Date();
var year = d.getFullYear();
var age = calcAge(year, 1989);
console.log("You are either " + age + " or " + (age - 1) ); 