/* Generate random number between 0 & 0.9... (infintely)
   Multiply it by a number and it will be less than that number (ex: 5.9...)
   Use Math.floor to round number down to a whole number
   Add 1 to the formula to get numbers from 1-6 (instead of 0-5)
*/
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

/* Concantenation of the ACTUAL file pathing w/ variable (ex: images/diceRandomNumber1.png)
   So store the random image w/ the random number, each time you run code, in a variable */
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

// Go to and select img1, then set and change it to the randomDiceImage
$("img:eq(0)").attr("src", randomDiceImage1);
$("img:eq(1)").attr("src", randomDiceImage2);

// Change the innerHTML (.html) words accordingly using the if conditional
if (randomDiceImage1 > randomDiceImage2) {
    $("h1").html("🚩Player 1 Wins! ");
}

else if (randomDiceImage1 < randomDiceImage2) {
    $("h1").html("Player 2 Wins!🚩");
}
else {
    $("h1").html("It's a tie! 🫱🏼‍🫲🏾");
}

// Reload the page function on the roll dice button
$("#roll-dice").click(function() {
    location.reload();
});

// Button press animation effect
$("#roll-dice").click(function() {
    $(this).css("transform", "scale(5)");
}, function() {
    $(this).css("transform", "scale(1)");
});