


let player1 = {
	name:  "Player One",
	health: 100,
};

let player2 = {
	name: "Player Two",
	health: 100,
};

// beginMatch()


function rollDice(num1)
{
	let roll = Math.floor(Math.random()* num1 + 1)
	return (roll);
}

function beginMatch()
{
	let playerOneRoll = rollDice(12);
	let playerTwoRoll = rollDice(12);
	let result1 = "Player One rolls " + playerOneRoll + "!";
	let result2 = "Player Two rolls " + playerTwoRoll + "!";
	let overallResult = result1 + " " + result2;
	console.log(overallResult);
	while(player1.health > 0 && player2.health > 0)
	{

		//first players attack
		if(playerOneRoll >= playerTwoRoll)
		{
			alert("Player One take your turn!")
			let playerOneInput = prompt("Player One decide! Press 1 to attack or press 2 to heal yourself!")
			if(playerOneInput == "1")
			{
				player2.health -= launchAttack(player2)

					if(player2.health == 0)
						{
							break;
						}
					else
						{
							console.log("Player Two health is now " + player2.health)
						}	
			}
			else if(playerOneInput === "2")
			{
				if(player1.health >= 100)
				{
					player1.health = 100
					console.log("You cannot heal wounds you do not have. " + player1.name + "'s health is now " + player1.health)
				}
				else {
					let p1ExtraHealth = selfHeal(player1)
					console.log("You healed yourself! Player One health is now " + p1ExtraHealth)
					alert("Player One's turn has ended!")
					}
			}
			else
			{
				console.log("Please choose one of the options")
			}

		}
		else if(playerTwoRoll > playerOneRoll)
		{
			alert("Player Two take your turn!")
			let playerTwoInput = prompt("Player Two decide! Press 1 to attack or press 2 to heal yourself!")
			if(playerTwoInput == "1")
			{
				player1.health -= launchAttack(player1)
					if(player1.health == 0)
						{
							break;
						}
					else
						{	
							console.log("Player One health is now " + player1.health)
						}
			}
			else if(playerTwoInput == "2")
			{
				let p2ExtraHealth = selfHeal(player2)
				console.log("You healed yourself! Player Two health is now " + p2ExtraHealth)
				alert("Player Two's turn has ended")
			}
		}

		//second players attack

	if(playerOneRoll <= playerTwoRoll)
		{
			alert("Player One take your turn!")
			let playerOneInput = prompt("Player One decide! Press 1 to attack or press 2 to heal yourself!")
			if(playerOneInput == "1")
			{
				player2.health -= launchAttack(player2)
					if(player2.health <= 0)
						{
							break;
						}
					else
						{
							console.log("Player 2 health is now " + player2.health)
						}	
			}
			else if(playerOneInput === "2")
			{
				if(player1.health >= 100)
				{
					player1.health = 100
					console.log("You cannot heal wounds you do not have. " + player1.name + "'s health is now " + player1.health)
				}
				else {
					let p1ExtraHealth = selfHeal(player1)
					console.log("You healed yourself! Player One health is now " + p1ExtraHealth)
					alert("Player One's turn has ended!")
					}
			}
			else
			{
				console.log("Please choose one of the options")
			}

		}
	else if(playerTwoRoll < playerOneRoll)
		{
			alert("Player Two take your turn!")
			let playerTwoInput = prompt("Player Two decide! Press 1 to attack or press 2 to heal yourself!")
			if(playerTwoInput == "1")
			{
				player1.health -= launchAttack(player1)
					if(player1.health == 0)
						{
							break;
						}
					else
						{
							console.log("Player 1 health is now " + player1.health)
						}
			}
			else if(playerTwoInput == "2")
			{
				let p2ExtraHealth = selfHeal(player2)
				console.log("You healed yourself! Player Two health is now " + p2ExtraHealth)
				alert("Player Two's turn has ended")
			}

		}
	}	
}


function launchAttack(defendingPlayer)
{
	let aa = attackAccuracy();
	let ap = attackPower(aa);
	let attackScore = ap + aa;
	let defenseScore = defenseStrength()
	console.log(attackScore);
	let playerTwoInput = prompt(defendingPlayer.name +  " you decide! Press 1 to Defend yourself or press 2 to trash talk the enemy")
	if(playerTwoInput == "1")
	{
		console.log("Your Defense strength is " + defenseScore)
	}
	else if(playerTwoInput == "2")
	{
		let shitTalk = trashTalk()
		defenseScore = 0
		//console.log(shitTalk)
	}
	else
	{
		console.log("Please choose one of the options")
	}

	let ds = defenseScore
	let finalAttackScore = attackScore - ds;
	
	if (finalAttackScore <= 0){
		console.log("WEAKLING! Your enemy was unaffected by your attack!")
	}
	else if(finalAttackScore <=10)
	{
		console.log("Your attack caused " + finalAttackScore + " damage points! " + "The enemy laughs at your insignificant attacks!")
	}
	else
	{
		console.log("Your attack caused " + finalAttackScore + " damage points! " + "You crushed that puny little worm!")
	}
	if(finalAttackScore < 0)
	{
		finalAttackScore = 0
	}


	return finalAttackScore;
}

// launchAttackP1()

function selfHeal(player)
{
	let healScore = rollDice(10);
	let addHealth = player.health += healScore;
	if(player.health >= 100)
	{
		player.health = 100
		console.log("You cannot heal wounds you do not have!")
	}
	return addHealth;
}


function attackPower(aa)
{

	let attackRollScore = rollDice(8) + rollDice(18)
	let attackResult = "Attack Power is " + attackRollScore + "!"
	// console.log(attackResult);
	return(attackRollScore);
}



function attackAccuracy()
{
	let totalScore;
	let spokenWord = " "
	let accuracyRollScore = rollDice(6)
	
	switch(accuracyRollScore)
	{
		case 1:
		spokenWord = "Maybe try opening your eyes next time!!!"	
		totalScore =  -10
		console.log(spokenWord + " " + "Accuracy Score " + totalScore + "!?!");
		break;
		case 2:
		spokenWord = "Smh. Just go home, before you hurt yourself!"
		totalScore =  -6
		console.log(spokenWord + " " + "Accuracy Score " + totalScore + "!?!");
		break;
		case 3:
		spokenWord = "The only thing you can hit is the road, Jack!"
		totalScore = -2
		console.log(spokenWord + " " + "Accuracy Score " + totalScore + "?");
		break;
		case 4: 
		spokenWord = "You only dealt a glancing blow. Try harder next time!"
		totalScore =  2	
		console.log(spokenWord + " " + "Accuracy Boost +" + totalScore + ".");
		break;
		case 5:
		spokenWord = "Your Aim is true!"
		totalScore =  3
		console.log(spokenWord + " " + "Accuracy Boost +" + totalScore + "!");
		break;
		default:
		spokenWord = "You pierced mind, body, and soul with that one!"
		totalScore =  5
		console.log(spokenWord + " " + "Accuracy Boost +" + totalScore + "!!!");
		break;

	}
	// console.log(accuracyResult)
	return(totalScore);
}



function defenseStrength()
{
	let defenseRollScore = rollDice(20)
	let defenseResult = defenseRollScore
	// console.log("Defense strength is " + defenseResult)
	return(defenseRollScore);
}



// function totalAttackScore(ap, aa, ds)
// {
// 	let ap1 = attackPower()
// 	let aa1 = attackAccuracy()
// 	let ds1 = defenseStrength()
// 	let attackEffectiveness = (ap1 + aa1) - ds1;
	
// }

function trashTalk()
{
	let ttRoll = rollDice(10)
	let quote = " "
	switch(ttRoll)
	{
		case 1:
		quote = "Maybe try hitting the gym, Noodle Arms!"
		console.log(quote)
		break;
		case 2:
		quote = "Your Mother was a hampster, and your Father smelt of Elderberries!"
		console.log(quote)
		break;
		case 3:
		quote = "Indegestion is scarier than you!"
		console.log(quote)
		case 4:
		quote = "Where did you get those clothes? The toilet store?"
		console.log(quote)
		break;
		case 5:
		quote = "Well you're gonna be in dead place when I'm done with you!"
		console.log(quote)
		break;
		case 6:
		quote = "Yeah, I remember my first fight!"
		console.log(quote)
		break;
		case 7:
		quote = "Can we wrap this up? I have a lunch date in 5 minutes."
		console.log(quote)
		break;
		case 8:
		quote = "I took your mother out to a nice seafood dinner and then NEVER CALLED HER BACK!"
		console.log(quote)
		break;
		case 9:
		quote = "Did you shower today?"
		console.log(quote)
		break;
		default:
		quote = "do the math. My fist + your face - your life!"
		console.log(quote)
		break;
	}


}










