
let rpsArray = [
"Rock",
"Paper",
"Scissors"
];

let computerPlay = rpsArray[Math.floor(Math.random()*rpsArray.length)];

for (let i = 0; i < 5; i++) {
    // your code here!
 

let playerSelection = prompt("Rock, Paper, or Scissors?");
/* it's case sensitive. */ 
if (computerPlay === playerSelection){
    console.log("Tie." + "Round: " + i);
} else if (computerPlay === "Rock" && playerSelection === "Scissors"){
    console.log ("Computer wins." + "Round: " + i);
}else if (computerPlay === "Rock" && playerSelection === "Paper"){
    console.log ("Player wins." + "Round: " + i);
}
else if  (computerPlay === "Scissors" && playerSelection === "Rock"){
    console.log ("Player Wins." + "Round: " + i);
}
else if  (computerPlay === "Paper" && playerSelection === "Rock"){
    console.log ("Computer wins." + "Round: " + i);
}

else if  (computerPlay === "Paper" && playerSelection === "Scissors"){
    console.log ("Player wins." + "Round: " + i);
}


else if  (computerPlay === "Scissors" && playerSelection === "Paper"){
    console.log ("Player wins." + "Round: " + i);
}

console.log ("Computer chose: " + computerPlay);
console.log ("Player chose: " + playerSelection);



}

