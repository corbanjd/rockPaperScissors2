
let rpsArray = [
"Rock",
"Paper",
"Scissors"
];

let computerPlay = rpsArray[Math.floor(Math.random()*rpsArray.length)];



let playerSelection = prompt("Rock, Paper, or Scissors?");
/* it's case sensitive. */ 
if (computerPlay === playerSelection){
    console.log("Tie.");
} else if (computerPlay === "Rock" && playerSelection === "Scissors"){
    console.log ("Computer wins.");
}else if (computerPlay === "Rock" && playerSelection === "Paper"){
    console.log ("Player wins.");
}
else if  (computerPlay === "Scissors" && playerSelection === "Rock"){
    console.log ("Player Wins.");
}
else if  (computerPlay === "Paper" && playerSelection === "Rock"){
    console.log ("Computer wins.");
}

else if  (computerPlay === "Paper" && playerSelection === "Scissors"){
    console.log ("Player wins.");
}


else if  (computerPlay === "Scissors" && playerSelection === "Paper"){
    console.log ("Player wins.");
}

console.log ("Computer chose: " + computerPlay);
console.log ("Player chose: " + playerSelection);