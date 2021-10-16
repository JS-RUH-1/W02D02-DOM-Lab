//The functions for the buttons:  

// Change the size of a heading
function ChangeFontSize(){
    text = document.getElementById("heading");
    text.style.fontSize = 60 + "px";
 }
 
 // Change the font style of a paragraph
 function ChangeFontStyle(){
     text = document.getElementById("paragraph");
     text.style.fontFamily = "Comic Sans MS";
 }
 
 // Highlight a paragraph
 function Highlight(){
     text = document.getElementById("paragraph");
     text.style.backgroundColor = "#FFFF00";
 }
 
 // Hide an Image
 function HideImage(){
     img = document.getElementById("image");
     img.style.visibility = "hidden";
 }
 
 // Alternate between two images
 function Alternate(){
     img = document.getElementById("image");
     if(img.src == "http://www.javatpoint.com/images/javascript/javascript_logo.png"){
         img.src = "https://library.kissclipart.com/20180925/yoe/kissclipart-javascript-clipart-javascript-library-jquery-0fb817622aa27de4.png"
     }else{
         img.src = "http://www.javatpoint.com/images/javascript/javascript_logo.png"
     }
 }
 
 // Change an image when the mouse moves onto it
 document.getElementById("image").addEventListener("mouseover", ()=>{
     document.getElementById("image").src = "https://library.kissclipart.com/20180925/yoe/kissclipart-javascript-clipart-javascript-library-jquery-0fb817622aa27de4.png"
 
 });
 document.getElementById("image").addEventListener("mouseout", ()=>{
     document.getElementById("image").src = "http://www.javatpoint.com/images/javascript/javascript_logo.png"
 
 });
 
 
 // creates an alert on the page when a user right clicks on a speciﬁc imag
 document.getElementById("image").addEventListener("contextmenu", (e)=>{
     e.preventDefault();
     alert("You right clicked on this image");
 });
 
 
 // Create an alert on the page when a user enters data into a form
 document.getElementById("form").addEventListener("keyup",()=>{
     alert("You have entered some data ");
 });
 
 
 // Create an alert to let the user know when the page has loaded
 window.addEventListener("load",()=>{
     alert("The page has loaded");
 });
 
 
 // Highlight all paragraphs when the mouse moves over them 
 const elements = document.querySelectorAll("p");
 
 elements.forEach(element=>{
     element.addEventListener("mouseover", ()=> {
         element.style.backgroundColor = "#FFFF00"})
     
     element.addEventListener("mouseout", ()=> {
         element.style.backgroundColor = "transparent"})
 });
 
  