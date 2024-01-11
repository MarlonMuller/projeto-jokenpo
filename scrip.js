const yourScore = document.querySelector("#yourScore")
const machineScore = document.querySelector("#machineScore")
const machineChoiceArrey = ["rock","paper","scissors"]

Math.random




const playGame = (userValue) => {
    console.log(userValue)
    const machineChoiceIndex = Math.floor(Math.random(machineChoiceArrey) * machineChoiceArrey.length)
    const machineChoice = machineChoiceArrey[machineChoiceIndex]
    machineScore.innerHTML = userValue

    console.log(machineChoice)
}