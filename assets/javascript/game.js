$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  var totalScoreCounter = 0;
  var crystalValue1;
  var crystalValue2;
  var crystalValue3;
  var crystalValue4;
  var random;

  //function to Generate a random numbers
  function generateRandoms() {
    //Generate a random number between 19 and 120 for Random #
    //Math.floor(Math.random() * (max - min + 1)) + min
    random = Math.floor(Math.random() * 102) + 19;
    //Populate the random number into random-number div.
    $("#target-score").html(random);
    //Generate random numbers between 1-12 for Crystals
    crystalValue1 = Math.floor(Math.random() * 12) + 1;
    crystalValue2 = Math.floor(Math.random() * 12) + 1;
    crystalValue3 = Math.floor(Math.random() * 12) + 1;
    crystalValue4 = Math.floor(Math.random() * 12) + 1;
  }

  //function to check for a win
  function checkWin() {
    if (totalScoreCounter === random) {
      wins++;
      $("#wins-text").html(wins);
      alert("You Won!");
      reset();
    } else if (totalScoreCounter > random) {
      losses++;
      $("#losses-text").html(losses);
      alert("You lost...Try Again!");
      reset();
    }
  }

  //On Document Load Generate all the random Numbers you need
  generateRandoms();

  //On-Click event when user clicks on each crystal
  //Crystal 1
  $("#crystal-1").on("click", function() {
    $("#totScore").html(
      (totalScoreCounter = totalScoreCounter + crystalValue1)
    );
    checkWin();
  });
  //Crystal 2
  $("#crystal-2").on("click", function() {
    $("#totScore").html(
      (totalScoreCounter = totalScoreCounter + crystalValue2)
    );
    checkWin();
  });
  //Crystal 3
  $("#crystal-3").on("click", function() {
    $("#totScore").html(
      (totalScoreCounter = totalScoreCounter + crystalValue3)
    );
    checkWin();
  });
  //Crystal 4
  $("#crystal-4").on("click", function() {
    $("#totScore").html(
      (totalScoreCounter = totalScoreCounter + crystalValue4)
    );
    checkWin();
  });

  //reset function
  function reset() {
    //reset score to 0 and populate text
    totalScoreCounter = 0;
    $("#totScore").text(totalScoreCounter);
    //generate new random numbers
    generateRandoms();
  }
});
