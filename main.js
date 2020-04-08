const die1 = document.createElement("img")
const die2 = document.createElement("img")
const die3 = document.createElement("img")
const die4 = document.createElement("img")
const die5 = document.createElement("img")
const die6 = document.createElement("img")
const dieDiv = document.querySelector(".die")
const button = document.querySelector("button")

die1.setAttribute("src", "src/noun_One Dice_1986609.png")
die2.setAttribute("src", "src/noun_two dice_1986607.png")
die3.setAttribute("src", "src/noun_Three Dice_1986612.png")
die4.setAttribute("src", "src/noun_four dice_1986605.png")
die5.setAttribute("src", "src/noun_five dice_1986606.png")
die6.setAttribute("src", "src/noun_six dice_1986608.png")

let dice = [die1, die2, die3, die4, die5, die6]

button.addEventListener("click", rollDie)

function rollDie(){
    let timeRun = 0;
    let intervalID = setInterval(function(){
        const currentDie = dieDiv.children[0];
        dieDiv.removeChild(currentDie);
        let dieNumber = Math.floor(Math.random()*6);
        addDie(dieDiv, dice[dieNumber]);
        timeRun++;
        if(timeRun>40){
            clearInterval(intervalID)
        }
    },20)
}

function changeDie(){
    const currentDie = dieDiv.children[0];
    dieDiv.removeChild(currentDie)
    let dieNumber = Math.floor(Math.random()*6)
    addDie(dieDiv, dice[dieNumber])
}

function addDie(div, die){
    div.appendChild(die)
}
