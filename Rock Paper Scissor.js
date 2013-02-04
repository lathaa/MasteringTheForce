var yourHand = prompt("rock paper scissor?");
var rockPaperScissor = function(computerHand){
if((yourHand === "rock" && computerHand === "scissor")||(yourHand === "scissor" && computerHand === "paper")||(yourHand === "paper" && computerHand === "rock")){
	return "You win!";
}else if(yourHand === computerHand){
	return "It's a tie!";
}else{
	return "You lost...";
}
};
rockPaperScissor("rock");