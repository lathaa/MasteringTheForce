var userChoice = prompt("Do you choose rock [r], paper [p] or scissors [s]?");
var computerChoice = Math.random();
if (computerChoice <0.34){
	computerChoice = "r";
}else if(computerChoice <=0.67){
	computerChoice = "p";
}else{
	computerChoice = "s";
}
var compare = function(choice1, choice2){
if(choice1 === choice2){
	return "Computer chose the same. \nThe result is a tie!";
}
if(choice1 === "r"){
		if(choice2 === "s"){
			return "Computer chose Scissors. \nYou win.";
		}else{
			return "Computer chose Paper. \nYou lose.";
		}
	}
	if(choice1 === "p"){
		if(choice2 === "r"){
			return "Computer chose Rock. \nYou win.";
		}else{
			return "Computer chose Scissors. \nYou lose.";
		}
	}	
		if(choice1 === "s"){
		if(choice2 === "r"){
			return "Computer chose Rock. \nYou lose.";
		}else{
			return "Computer chose Scissors. \nYou win.";
		}
	}
};
console.log("\n"+compare(userChoice,computerChoice));