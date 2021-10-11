let myH1 = document.getElementById("heading");
let myParagraph = document.getElementById("paragraph");
let myIMG = document.getElementById("myIMG");
let myIMG2 = document.getElementById("myIMG2");
let myIMG3 = document.getElementById("myIMG3");

function hundleClick() {
  myH1.style = "font-size:120px";
  myParagraph.style = "font-style:italic; background-color: #FFFF00; ";
  myIMG.style = "display: none;";
  myIMG2.style = "display: none;";
  myIMG3.style = "display: block;";
}
function hunldeMouseOver() {
  myIMG.style = "display:none;";
  myIMG3.style = "display: block;";
}
function hundleMouseOut() {
  myIMG.style = "display:block;";
  myIMG3.style = "display: none;";
}
function hundleRightClick() {
  alert("don't steel our img ):");
}
function hundleInput() {
  alert("Don't forget to enter right data");
}

function hundleLoad() {
  alert("Page is loaded!");
}

function hundleMouseOverParagraph() {
  myParagraph.style = " background-color: red; ";
}
function hundleMouseOutParagraph() {
  myParagraph.style = " background-color: white; ";
}
