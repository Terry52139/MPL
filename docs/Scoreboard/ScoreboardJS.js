// JQuery laws

// $("Element/.className/#idName") will select the element or class or id
// .click means when element/class/id is clicked, execute function in brackets
// addClass will add the CSS class to the class or id or element MediaElementAudioSourceNode, brackets specifies class to add

// Local Storage, helps retain values even on refresh/reload
// localStorage.setItem("itemName",value);
// localStorage.getItem("itemName");


//Default Array Values

// Array for score
const score = [0, 0, 0, 0, 0];  
var ToggleState = false;
var negative = 50;
var positive = 50;

// Loads the previous scores and toggle state
$(document).ready(function() {
  // Once page (i.e., document) has been loaded
  // Using getItem we reload values from memory
  // ID.text is used to modify the text to value in brackets, value in brackets is retrieved value
  $("#score-1").text(localStorage.getItem("score0"));
  $("#score-2").text(localStorage.getItem("score1"));
  $("#score-3").text(localStorage.getItem("score2"));
  $("#score-4").text(localStorage.getItem("score3"));
  $("#score-5").text(localStorage.getItem("score4"));

  // Retrieve the ToggleState from localStorage, convert it to boolean
  ToggleState = (localStorage.getItem("ToggleState") === "true");

  // Set the initial state based on ToggleState
  if (ToggleState) {
    $(".front").css("left", "20px");  
    $(".back").css("background-color", "lightgreen");
    negative = 100;
    positive = 100;
  } else {
    $(".front").css("left", "-45px");   
    $(".back").css("background-color", "lightcoral");
    negative = 50;
    positive = 50;
  }
});

// Toggle functionality
$(document).ready(function() {
  $(document).on("click", ".front", function() {
    if ($(".front").position().left != -45) {
      $(".front").css("left", "-45px");   
      $(".back").css("background-color", "lightcoral");
      negative = 50;
      positive = 50;
      ToggleState = false;
      localStorage.setItem("ToggleState", "false");  // Store "false" as string
    } else {
      $(".front").css("left", "20px");  
      $(".back").css("background-color", "lightgreen");
      negative = 100;
      positive = 100;
      ToggleState = true;
      localStorage.setItem("ToggleState", "true");  // Store "true" as string
    }
  });
});

// Reset button
$(".btn-reset").click(function() {
  $(".popup").addClass("open-popup");  
});

// Power-up button
$(".btn-powerup").click(function() {
  var chance = Math.floor(Math.random() * 100) + 1;

  if (chance < 30) {
    $(".powerup-text").text("You obtained the Skip powerup");
  } else if (30 <= chance && chance < 60) {
    $(".powerup-text").text("You obtained the Redo powerup");
  } else if (60 <= chance && chance < 70) {
    $(".powerup-text").text("You obtained the Boosted Points powerup");
  }
  else if (70 <= chance && chance < 80) {
    $(".powerup-text").text("You obtained the Skip Others powerup");
  }
  else if (80 <= chance && chance < 100) {
    $(".powerup-text").text("You obtained the Steal powerup");
  }
  $(".popup1").addClass("open-popup");
});

// Working of popup
$(".btn-proceed").click(function() {
  // Reset popup, just set all scores to 0
  for (var i = 0; i < 5; i++) {
    localStorage.setItem("score" + i, 0);
  }
  // After reset, refresh the page
  location.reload();
});

$(".btn-cancel").click(function() {
  // Remove the class thus hiding popup when button clicked
  $(".popup").removeClass("open-popup");
});

$(".btn-accept").click(function() {
  $(".popup1").removeClass("open-popup");
});

// Reducing points
$(".score-negative-1").click(function() {
  score[0] = localStorage.getItem("score0");
  score[0] -= negative;
  localStorage.setItem("score0", score[0]);
  $("#score-1").text(score[0]);
});

$(".score-negative-2").click(function() {
  score[1] = localStorage.getItem("score1");
  score[1] -= negative;
  localStorage.setItem("score1", score[1]);
  $("#score-2").text(score[1]);
});

$(".score-negative-3").click(function() {
  score[2] = localStorage.getItem("score2");
  score[2] -= negative;
  localStorage.setItem("score2", score[2]);
  $("#score-3").text(score[2]);
});

$(".score-negative-4").click(function() {
  score[3] = localStorage.getItem("score3");
  score[3] -= negative;
  localStorage.setItem("score3", score[3]);
  $("#score-4").text(score[3]);
});

$(".score-negative-5").click(function() {
  score[4] = localStorage.getItem("score4");
  score[4] -= negative;
  localStorage.setItem("score4", score[4]);
  $("#score-5").text(score[4]);
});

// Increasing points by 100
$(".score-positive-1").click(function() {
  score[0] = parseInt(localStorage.getItem("score0"));
  score[0] += positive;
  localStorage.setItem("score0", score[0]);
  $("#score-1").text(score[0]);
});

$(".score-positive-2").click(function() {
  score[1] = parseInt(localStorage.getItem("score1"));
  score[1] += positive;
  localStorage.setItem("score1", score[1]);
  $("#score-2").text(score[1]);
});

$(".score-positive-3").click(function() {
  score[2] = parseInt(localStorage.getItem("score2"));
  score[2] += positive;
  localStorage.setItem("score2", score[2]);
  $("#score-3").text(score[2]);
});

$(".score-positive-4").click(function() {
  score[3] = parseInt(localStorage.getItem("score3"));
  score[3] += positive;
  localStorage.setItem("score3", score[3]);
  $("#score-4").text(score[3]);
});

$(".score-positive-5").click(function() {
  score[4] = parseInt(localStorage.getItem("score4"));
  score[4] += positive;
  localStorage.setItem("score4", score[4]);
  $("#score-5").text(score[4]);
});
