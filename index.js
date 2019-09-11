//Instantierea de variabile
var hPlayerWinner = document.querySelector("h1");

var dice_One = document.querySelectorAll(".circle-diceOne");
var dice_two = document.querySelectorAll(".circle-diceTwo");


document.querySelectorAll(".circle-diceOne")[1].classList.add("visibility");
document.querySelectorAll(".circle-diceOne")[4].classList.add("visibility");
document.querySelectorAll(".circle-diceOne")[7].classList.add("visibility");

//Dice Two

document.querySelectorAll(".circle-diceTwo")[1].classList.add("visibility");
document.querySelectorAll(".circle-diceTwo")[4].classList.add("visibility");
document.querySelectorAll(".circle-diceTwo")[7].classList.add("visibility");

function startGame() {

    var diceOne = Math.floor(Math.random() * 6) + 1;
    console.log(diceOne);
    var diceTwo = Math.floor(Math.random() * 6) + 1;
    console.log(diceTwo);

    if (diceOne === 1) {
        
        dice_One[0].classList.add("visibility");
        dice_One[1].classList.add("visibility");
        dice_One[2].classList.add("visibility");
        dice_One[3].classList.add("visibility");
        dice_One[4].classList.remove("visibility");
        dice_One[5].classList.add("visibility");
        dice_One[6].classList.add("visibility");
        dice_One[7].classList.add("visibility");
        dice_One[8].classList.add("visibility");
    }
    else if (diceOne == 2) {

        dice_One[0].classList.remove("visibility");
        dice_One[1].classList.add("visibility");
        dice_One[2].classList.add("visibility");
        dice_One[3].classList.add("visibility");
        dice_One[4].classList.add("visibility");
        dice_One[5].classList.add("visibility");
        dice_One[6].classList.add("visibility");
        dice_One[7].classList.add("visibility");
        dice_One[8].classList.remove("visibility");
    }
    else if (diceOne == 3) {

        dice_One[0].classList.remove("visibility");
        dice_One[1].classList.add("visibility");
        dice_One[2].classList.add("visibility");
        dice_One[3].classList.add("visibility");
        dice_One[4].classList.remove("visibility");
        dice_One[5].classList.add("visibility");
        dice_One[6].classList.add("visibility");
        dice_One[7].classList.add("visibility");
        dice_One[8].classList.remove("visibility");
    } else if (diceOne == 4) {

        dice_One[0].classList.remove("visibility");
        dice_One[1].classList.add("visibility");
        dice_One[2].classList.remove("visibility");
        dice_One[3].classList.add("visibility");
        dice_One[4].classList.add("visibility");
        dice_One[5].classList.add("visibility");
        dice_One[6].classList.remove("visibility");
        dice_One[7].classList.add("visibility");
        dice_One[8].classList.remove("visibility");
    }
    else if (diceOne == 5) {
        dice_One[0].classList.remove("visibility");
        dice_One[1].classList.add("visibility");
        dice_One[2].classList.remove("visibility");
        dice_One[3].classList.add("visibility");
        dice_One[4].classList.remove("visibility");
        dice_One[5].classList.add("visibility");
        dice_One[6].classList.remove("visibility");
        dice_One[7].classList.add("visibility");
        dice_One[8].classList.remove("visibility");

    } else if (diceOne == 6) {

        dice_One[0].classList.remove("visibility");
        dice_One[1].classList.add("visibility");
        dice_One[2].classList.remove("visibility");
        dice_One[3].classList.remove("visibility");
        dice_One[4].classList.add("visibility");
        dice_One[5].classList.remove("visibility");
        dice_One[6].classList.remove("visibility");
        dice_One[7].classList.add("visibility");
        dice_One[8].classList.remove("visibility");
    }
    if (diceTwo === 1) {
        document.querySelectorAll(".circle-diceTwo")[0].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[1].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[2].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[3].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[4].classList.remove("visibility");
        document.querySelectorAll(".circle-diceTwo")[5].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[6].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[7].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[8].classList.add("visibility");
    }
    else if (diceTwo == 2) {

        document.querySelectorAll(".circle-diceTwo")[0].classList.remove("visibility");
        document.querySelectorAll(".circle-diceTwo")[1].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[2].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[3].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[4].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[5].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[6].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[7].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[8].classList.remove("visibility");
    }
    else if (diceTwo == 3) {

        document.querySelectorAll(".circle-diceTwo")[0].classList.remove("visibility");
        document.querySelectorAll(".circle-diceTwo")[1].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[2].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[3].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[4].classList.remove("visibility");
        document.querySelectorAll(".circle-diceTwo")[5].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[6].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[7].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[8].classList.remove("visibility");
    } else if (diceTwo == 4) {

        document.querySelectorAll(".circle-diceTwo")[0].classList.remove("visibility");
        document.querySelectorAll(".circle-diceTwo")[1].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[2].classList.remove("visibility");
        document.querySelectorAll(".circle-diceTwo")[3].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[4].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[5].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[6].classList.remove("visibility");
        document.querySelectorAll(".circle-diceTwo")[7].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[8].classList.remove("visibility");
    }
    else if (diceTwo == 5) {
        document.querySelectorAll(".circle-diceTwo")[0].classList.remove("visibility");
        document.querySelectorAll(".circle-diceTwo")[1].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[2].classList.remove("visibility");
        document.querySelectorAll(".circle-diceTwo")[3].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[4].classList.remove("visibility");
        document.querySelectorAll(".circle-diceTwo")[5].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[6].classList.remove("visibility");
        document.querySelectorAll(".circle-diceTwo")[7].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[8].classList.remove("visibility");

    } else if (diceTwo == 6) {

        document.querySelectorAll(".circle-diceTwo")[0].classList.remove("visibility");
        document.querySelectorAll(".circle-diceTwo")[1].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[2].classList.remove("visibility");
        document.querySelectorAll(".circle-diceTwo")[3].classList.remove("visibility");
        document.querySelectorAll(".circle-diceTwo")[4].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[5].classList.remove("visibility");
        document.querySelectorAll(".circle-diceTwo")[6].classList.remove("visibility");
        document.querySelectorAll(".circle-diceTwo")[7].classList.add("visibility");
        document.querySelectorAll(".circle-diceTwo")[8].classList.remove("visibility");
    }

    if (diceOne > diceTwo) {

        hPlayerWinner.innerHTML = "Player 1 wins the game!";

    }
    else if (diceTwo > diceOne) {
        hPlayerWinner.innerHTML = "Player 2 wins the game!";

    }
    else {
        hPlayerWinner.innerHTML = "It's a draw!";
    }


}