function handleClick(element) {
  element.style = "font-size : 60px;";
}

//paragraph
let paragraph = document.getElementById("paragraph");

paragraph.addEventListener("mouseover", function () {
  this.style = "font-style: italic; background-color: yellow;";
});

paragraph.addEventListener("mouseout", function () {
  this.style = "font-size= 20px orange";
  this.style = "background-color: pink;";
});

//img1

let img1 = document.getElementById("img1");

img1.addEventListener("mouseover", function () {
  this.style = "width: 0.1px;";
});

img1.addEventListener("mouseout", function () {
  this.style = "opacity: 0;";
  this.style = "width:350px";
});

//img2

let img2 = document.getElementById("img2");

img2.addEventListener("mouseover", function () {
  document.getElementById("img2").src = "html.jpeg";
});

img2.addEventListener("mouseout", function () {
  document.getElementById("img2").src = "img.jpeg";
  this.style = "width:350px";
});

//img3
let img3 = document.getElementById("img3");

img3.addEventListener("mouseover", function () {
  alert("hello");
});
