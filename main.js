let event_heading = document.getElementById("heading");
let event_paragraph = document.getElementById("paragraph");
let event_image = document.getElementsByTagName("IMG");

// Q1: Part 1)
function increase(element) {
  if (event_heading.style.fontSize == "") event_heading.style.fontSize = "42px";
  else {
    let temp = event_heading.style.fontSize.split("");
    temp[temp.length - 4] = (parseInt(temp[temp.length - 4]) + 1).toString();
    if (temp.length > 4) {
      temp[temp.length - 3] = (2).toString();
      temp[temp.length - 4] = (9).toString();
      temp[temp.length - 5] = (0).toString();
    }
    event_heading.style.fontSize = temp.join("");
  }
}
function decrease(element) {
  if (event_heading.style.fontSize == "") event_heading.style.fontSize = "22px";
  else {
    let temp = event_heading.style.fontSize.split("");
    if (parseInt(temp[temp.length - 4]) - 1 > 0 && temp.length < 5) {
      temp[temp.length - 4] = (parseInt(temp[temp.length - 4]) - 1).toString();
    }
    console.log(temp);
    event_heading.style.fontSize = temp.join("");
  }
}

// Q1: Part 2)
function fonty(element) {
  event_paragraph.style.fontFamily == '"Times New Roman"' ||
  event_paragraph.style.fontFamily == ""
    ? (event_paragraph.style.fontFamily = "tahoma")
    : (event_paragraph.style.fontFamily = "'Times New Roman'");
}

// Q1: Part 3)
function highlight(element) {
  event_paragraph.style.backgroundColor == "initial" ||
  event_paragraph.style.backgroundColor == ""
    ? (event_paragraph.style.backgroundColor = "yellow")
    : (event_paragraph.style.backgroundColor = "initial");
}

// Q1: Part 4)
function hide(element) {
  event_image[0].style.display == "none"
    ? (event_image[0].style.display = "block")
    : (event_image[0].style.display = "none");
}

// Q1: Part 5)
function alternate(element) {
  event_image[0].src ==
  "https://static.javatpoint.com/csharp/images/c-sharp.png"
    ? (event_image[0].src =
        "http://www.javatpoint.com/images/javascript/javascript_logo.png")
    : (event_image[0].src =
        "https://static.javatpoint.com/csharp/images/c-sharp.png");
}

// Q2:
event_image[0].addEventListener("mouseover", function () {
  this.src == "https://static.javatpoint.com/csharp/images/c-sharp.png"
    ? (event_image[0].src =
        "http://www.javatpoint.com/images/javascript/javascript_logo.png")
    : (event_image[0].src =
        "https://static.javatpoint.com/csharp/images/c-sharp.png");
});

// Q3:
event_image[0].addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("WARNING! WARNING! WARNING!");
});

// Q4:
function form_reaction() {
  alert("Form content changed!");
}

// Q5:
function loadingFunction() {
  alert("Loaded!");
}

// Q6:
event_paragraph.addEventListener("mouseover", function () {
  event_paragraph.style.backgroundColor = "yellow";
});
event_paragraph.addEventListener("mouseout", function () {
  event_paragraph.style.backgroundColor = "initial";
});
