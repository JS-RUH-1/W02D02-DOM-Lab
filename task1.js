function doSize(Element) {
  //   Element.preventDefault();
  let heading = document.getElementById("heading");
  heading.style = "font-size:50px;";
}
function doStyle() {
  let par = document.getElementById("paragraph");
  par.style.fontStyle = "italic";
}
function doHighlight() {
  let par = document.getElementById("paragraph");
  par.style.backgroundColor = "yellow";
}
function doImg() {
  let img = document.getElementById("image");
  img.style.display = "none";
}

function doAlt() {
  let img = document.getElementById("image");
  let img2 = document.getElementById("image2");
  if (img.style.display == "none") {
    img.style = "display:block;";
    img2.style = "display:none;";
  } else {
    img.style = "display:none;";
    img2.style = "display:block;";
  }
}

// -----------
let img = document.getElementById("image");
let img2 = document.getElementById("image2");
img.addEventListener("mouseover", function () {
  this.style = "display:none;";
  img2.style = "display:block;";
});
img.addEventListener("mouseout", function () {
  this.style = "display:block;";
  img2.style = "display:none;";
});
// -------------
img.addEventListener("contextmenu", function () {
  alert("HELLO, YOU ARE DO RIGHT CLICK!");
});
img2.addEventListener("contextmenu", function () {
  alert("HELLO, YOU ARE DO RIGHT CLICK!");
});

function alertWrite() {
  alert("YOU ARE WRITING");
}
function alertLoad() {
  alert("THE PAGE IS LOADED!");
}
// -----------
let par = document.getElementsByTagName("p");
for (let i = 0; i < par.length; i++) {
  par[i].addEventListener("mouseover", function () {
    this.style.backgroundColor = "yellow";
  });
  par[i].addEventListener("mouseout", function () {
    this.style.backgroundColor = "white";
  });
}
