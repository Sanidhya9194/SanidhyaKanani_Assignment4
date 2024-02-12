"use strict";

let playersArr = [];
let scoresArr = [];

const displayScores = (scores, scoresString) => {
  let sum = 0;
  scores.map((num) => (sum += num));

  const avg = sum / scores.length;
  $("#avr_score").text(avg);

  // Display student names and scores
  let displayStr = "";
  for (let i = 0; i < scores.length; i++) {
    displayStr += scoresString[i] + "\n";
  }
  $("#scores").val(displayStr);
};

$(document).ready(() => {
  $("#add_button").click(() => {
    const firstName = $("#first_name").val();
    const lastName = $("#last_name").val();
    const score = $("#score").val();

    if (!firstName || !lastName || isNaN(score)) {
      alert("Please enter valid data.");
      return;
    }
    scoresArr.push(Number(score));

    const playerStr = `${firstName}, ${lastName}: ${score}`;
    playersArr.push(playerStr);

    // Redisplay updated data
    displayScores(scoresArr, playersArr);

    // get the add form ready for next entry
    $("#first_name").val("");
    $("#last_name").val("");
    $("#score").val("");
    $("#first_name").focus();
  }); // end click()

  $("#clear_button").click(() => {
    playersArr = [];
    scoresArr = [];

    // remove the score data from the web page
    $("#avr_score").text("");
    $("#scores").val("");

    $("#first_name").focus();
  }); // end click()

  $("#sort_button").click(() => {
    playersArr.sort((a, b) => {
      const playerA = a.split(" ")[1];
      const playerB = b.split(" ")[1];
      return playerA.localeCompare(playerB);
    });

    // Redisplay sorted data
    displayScores(scoresArr, playersArr);
  }); // end click()

  $("#first_name").focus();
}); // end ready()
