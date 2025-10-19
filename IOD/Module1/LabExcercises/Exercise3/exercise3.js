//I tried to use class instead of id but the code didn't work. Can one function not work for both?//

function changeColor1() {
  document.getElementById("column1").style.backgroundColor = "#ff9b9b";
  document.getElementById("heading1").innerText =
    "Changed the first heading and the background color!";
}
function changeColor2() {
  document.getElementById("column2").style.backgroundColor = "#f77e7eff";
  document.getElementById("heading2").innerText =
    "Changed the second heading and the background color!";
}
