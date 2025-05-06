let speed = 0;

function increaseSpeed() {
  if (speed < 0.28) {
  speed += 0.04;
  document.getElementById("speed").textContent = "Speed: " + speed.toFixed(2) + "m/s";
  } else {
    document.getElementById("answer").textContent = "Perfect! The fastest tortoise in the world walked at the speed of 0.28 m/s (or 0.92 ft/s) - isn't that wild?";
  }
}

function showAnswer() {
  if (document.getElementById("showButton").textContent == "Show Answer"){
    document.getElementById("turtleAnswer").textContent = "This is an Ornate Box Turtle! Did you get it right?";
    document.getElementById("showButton").textContent = "Hide Answer";
  } else {
    document.getElementById("turtleAnswer").textContent = "";
    document.getElementById("showButton").textContent = "Show Answer";
  }
}
