$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var totalScoreCounter = 0;      

//Generate a random number between 19 and 120 for Random #
//Math.floor(Math.random() * (max - min + 1)) + min

             
var random = Math.floor(Math.random() * 102) + 19;
               
console.log(random);

//Populate the random number into random-number div.
$("#target-score").html(random);


//Generate a random number between 1-12 for Crystals
var crystalValue1 = Math.floor(Math.random () * 12) + 1;
console.log(crystalValue1);

var crystalValue2 = Math.floor(Math.random () * 12) + 1;
console.log(crystalValue2);

var crystalValue3 = Math.floor(Math.random () * 12) + 1;
console.log(crystalValue3);

var crystalValue4 = Math.floor(Math.random () * 12) + 1;
console.log(crystalValue4);
         
//On-Click event when user clicks on each crystal
//Crystal 1
 $("#crystal-1").on("click", function () {
     $("#totScore").html(totalScoreCounter = totalScoreCounter + crystalValue1);
     if (totalScoreCounter === random) {
         wins++;
         $("#wins-text").html(wins);
         alert("You Won!")
         reset();
     }
     else if (totalScoreCounter > random) {
         losses++;
         $("#losses-text").html(losses);
         alert("You lost...Try Again!")
         reset();
     }
    });
//Crystal 2
$("#crystal-2").on("click", function () {
     $("#totScore").html(totalScoreCounter = totalScoreCounter + crystalValue2);
     if (totalScoreCounter === random) {
         wins++;
         $("#wins-text").html(wins);
         alert("You Won!")
         reset();
     }
     else if (totalScoreCounter > random) {
         losses++;
         $("#losses-text").html(losses);
         alert("You lost...Try Again!")
         reset();
     }
    });
//Crystal 3
$("#crystal-3").on("click", function () {
     $("#totScore").html(totalScoreCounter = totalScoreCounter + crystalValue3);
     if (totalScoreCounter === random) {
         wins++;
         $("#wins-text").html(wins);
         alert("You Won!")
         reset();
     }
     else if (totalScoreCounter > random) {
         losses++;
         $("#losses-text").html(losses);
         alert("You lost...Try Again!")
         reset();
     }
    });
//Crystal 4
$("#crystal-4").on("click", function () {
     $("#totScore").html(totalScoreCounter = totalScoreCounter + crystalValue4);
     if (totalScoreCounter === random) {
         wins++;
         $("#wins-text").html(wins);
         alert("You Won!")
         reset();
     }
     else if (totalScoreCounter > random) {
         losses++;
         $("#losses-text").html(losses);
         alert("You lost...Try Again!")
         reset();
     }
});

//reset function
function reset() {
    //reset score to 0 and populate text
    totalScoreCounter = 0;
    $("#totScore").text(totalScoreCounter);
    //generate new random number populate text
    random = Math.floor(Math.random() * 102) + 19;
    $("#target-score").text(random);
    //generate new random #s for each crystal
    crystalValue1 = Math.floor(Math.random () * 12) + 1;
    crystalValue2 = Math.floor(Math.random () * 12) + 1;
    crystalValue3 = Math.floor(Math.random () * 12) + 1;
    crystalValue4 = Math.floor(Math.random () * 12) + 1;
    console.log(crystalValue1);
    console.log(crystalValue2);
    console.log(crystalValue3);
    console.log(crystalValue4);
    console.log(random);
};


});
