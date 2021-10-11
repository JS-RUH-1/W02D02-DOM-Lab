
// change head size
function headingChange (){
    document.getElementById("heading").style.fontSize = "x-large";
}
//
function fontstylechange (){
    document.getElementById("paragraph").style.fontStyle = "italic";
}
function higlitechange (){
    document.getElementById("paragraph").style.fontWeight = "900";
}

//hide image 
function hideimage (){
    document.getElementById("image").style.visibility = "hidden";
}
//change image 
function changeimage (){
    document.getElementById("image").src="https://media.istockphoto.com/photos/commercial-jet-flying-over-clouds-picture-id155380716?k=20&m=155380716&s=612x612&w=0&h=MlVD8PFPPat21yCmZY4KBLLaV0koQrc_Sn-I2Ar5LoI=";
}
//Restore image 
function restoreme (){
    document.getElementById("image").src="http://www.javatpoint.com/images/javascript/javascript_logo.png"
}
document.getElementById("image").addEventListener("mouseover", function(){
    document.getElementById("image").src="https://media.istockphoto.com/photos/commercial-jet-flying-over-clouds-picture-id155380716?k=20&m=155380716&s=612x612&w=0&h=MlVD8PFPPat21yCmZY4KBLLaV0koQrc_Sn-I2Ar5LoI=";


})

document.getElementById("image").addEventListener("mouseout", function(){
    document.getElementById("image").src="http://www.javatpoint.com/images/javascript/javascript_logo.png"


})
document.getElementById("image").addEventListener("click", function(){
    alert("hi");
})

document.getElementById("name").addEventListener('change', function() {
    alert('i am the form !');
});
document.getElementById("course").addEventListener('change', function() {
    alert('i am the form !');
});



document.getElementById("paragraph").addEventListener('mouseover', function() {
    document.getElementById("paragraph").style.fontWeight = "900";
});
document.getElementById("paragraph").addEventListener('mouseout', function() {
    document.getElementById("paragraph").style.fontWeight = "";
});





