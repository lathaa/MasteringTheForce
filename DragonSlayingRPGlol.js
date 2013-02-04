var slaying = true;
var youHit = Math.floor(Math.random()*2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while(slaying){
	if(youHit){
		console.log("You did " + damageThisRound + " to the Dragon!");
		totalDamage += damageThisRound;
		if(totalDamage >= 8){
		console.log("...and with that, you have slain the mighty beast!");	
		slaying = false;
		}
	}else{
		console.log("Well... the Dragon burned you down...");
		slaying = false;
	}
	
	
	
}