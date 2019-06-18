
let number = 30
let intervalId;

$("#start").on("click", start);

function start() {
    $("#start").hide();
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $("#questions").show();
  }

  function decrement() {
    number--;
    $("#timeRemaining").html("<h2>" + number + "</h2>");

    if (number === 0) {
      stop();
      alert("Time Up!");
    }
  }

  function stop() {
    clearInterval(intervalId);
  }

  run();