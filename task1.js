const headingChange = () => {
    let heading = document.getElementById("heading");
    heading.style = "font-size: 65px;";
}


let paragraph = document.getElementById("paragraph");
const paragraphChange = () => {
    paragraph.style = "font-style: italic;";
}
const paragraphHighlight = () => {
    paragraph.style = "background-color: #FFFF00";
}
const removeParagraphHighlight = () => {
    paragraph.style = null;
}
paragraph.addEventListener("mouseover", () => {
    paragraphHighlight();
})
paragraph.addEventListener("mouseout", () => {
    removeParagraphHighlight();
})

let image = document.getElementById("image");
const hideImage = () => {
    image.style = "display: none;";
}
const alternateImage = () => {
    image.style = "display: block;";
    if(image.src.includes("javascript")) return image.src = "https://media.istockphoto.com/photos/modern-skyline-of-riyadh-saudi-arabia-picture-id1220434009?b=1&k=20&m=1220434009&s=170667a&w=0&h=Q-3tf8iGrr9egU3I5GqXo1gIM8RULs8GTJH2DMMs2pA="
    image.src = "http://www.javatpoint.com/images/javascript/javascript_logo.png";
}
image.addEventListener("mouseover", () => {
    image.src = "https://pbs.twimg.com/profile_images/1343584679664873479/Xos3xQfk_400x400.jpg"
});
image.addEventListener("mouseout", () => {
    image.src = "http://www.javatpoint.com/images/javascript/javascript_logo.png";
});
image.addEventListener("click", (e) => {
   alert("user clicked on image")
});

form.addEventListener("input", (e) => {
});
window.onload = () => {
    alert("page loaded")
}