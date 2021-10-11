// First 
function chnageSize() {
    let heading = document.getElementById("heading")
    heading.style.fontSize = "15px"
}

// Second
let para = document.getElementById("paragraph");
function chnageFont() {
    para.style.fontStyle = "italic";
}

// Three
function highlightPara() {
    para.style.backgroundColor = "#cdcdcd"
}

// Four
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")

// Hide Image
function hide() {
    img1.style.display = "none"
    img2.style.display = "none"
}

// Alternate between images
function alternateImages() {
    let url = document.getElementById("img1").src
    if(url == 'http://www.javatpoint.com/images/javascript/javascript_logo.png') {
        img1.src = './gambol.jpeg'
        console.log(url);
    } else if (url == './gambol.jpeg') {
        img1.src = 'http://www.javatpoint.com/images/javascript/javascript_logo.png'
        console.log(url);
    }
}

// mouseover && mouseout
img1.addEventListener("mouseover", () => {
    img1.style.display = "none"
    img2.style.display = "block"
})
img2.addEventListener("mouseout", () => {
    img1.style.display = "block"
    img2.style.display = "none"
})


// Right Click
img2.addEventListener("contextmenu", () => {
    alert("img2")
})









// Show user info in alert
function handleInfo() {
    let input1 = document.getElementById("name").value
    let input2 = document.getElementById("course").value
    alert("Welcome " + input1 + "\n" + "Your Course " + input2)
}



// onLoad
window.onload = () => {
    alert("this page will loaded")
}




// Last task
let p = document.getElementsByTagName("p") 
p.addEventListener("mouseover", () => {
    p.style.color = "green"
})
p.addEventListener("mouseout", () => {
    p.style.color = "black"
})
