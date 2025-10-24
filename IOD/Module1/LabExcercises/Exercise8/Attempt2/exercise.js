function RollDice() {
  const diceFace = document.getElementById("diceFace");
  const diceValue = document.getElementById("diceValue");
  if (diceFace.value == "Select a number") {
    diceValue.innerText = "Select again";
  } else {
    diceValue.innerText = Math.floor(Math.random() * diceFace.value) + 1;
  }
}
