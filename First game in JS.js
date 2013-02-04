//Check if the user is ready to play!
var age = prompt("Dafuq is your age, OP?");
if(age >= 18){
	console.log("Welcome \/b\/ro");
}else{
	console.log("You should be playing Call of Duty but if you insist, we'll let you play");
}

console.log("\nSnow White and Batman were hanging out at the bus stop, waiting to go to the shops. There was a sale on and both needed some new threads. You've never really liked Batman. You walk up to him.");
console.log("\nBatman glares at you and asks");
var userAnswer = prompt("Are you feeling lucky, punk?");
if(userAnswer === "yes"){
	console.log("\nBatman hits you very hard. It's Batman and you're you! Of course Batman wins!");
}else{
	console.log("\nYou did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by Batman.");
}

var feedback = prompt("Rate my cheesy game outta 10!");
if(feedback > 8){
	console.log("\nThis is just the beginning of my game empire. Stay tuned for more!");
}else{
	console.log("\nI slaved away at this game and you gave me that score?! The nerve! Just you wait!");
}