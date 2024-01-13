const yourScore = document.querySelector("#yourScore")
const machineScore = document.querySelector("#machineScore")
const machineChoiceArrey = ["rock", "paper", "scissors"]
const result = document.querySelector("#result")
const buttonRock = document.querySelector(".rock")
const buttonPaper = document.querySelector(".paper")
const buttonScissors = document.querySelector(".scissors")

let yourScoreSum = 0
let machineScoreSum = 0



const playGame = (userValue) => {

    const machineChoiceIndex = Math.floor(Math.random(machineChoiceArrey) * machineChoiceArrey.length)
    const machineChoice = machineChoiceArrey[machineChoiceIndex]

    if ((userValue === "rock" && machineChoice === "scissors") ||
        (userValue === "paper" && machineChoice === "rock") ||
        (userValue === "scissors" && machineChoice === "paper")) {
        result.innerHTML = "Você ganhou!"
        yourScoreSum = yourScoreSum + 1  
    } else if (userValue === machineChoice) {
        result.innerHTML = "Empatou!"
    } else {
        result.innerHTML = "Você perdeu!"
        machineScoreSum = machineScoreSum + 1
    }
    yourScore.innerHTML = yourScoreSum
    machineScore.innerHTML = machineScoreSum
}

