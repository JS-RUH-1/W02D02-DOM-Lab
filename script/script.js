function size (){
    let head =document.getElementById("heading")
    head.style.fontSize = "60px";
}
function font (){
    let head =document.getElementById("paragraph")
    head.style.fontStyle= "italic";
}



function highlight (){
    let head =document.getElementById("paragraph")
    head.style.backgroundColor= "blue";


}

function hide (){
    let img =document.getElementById("image")
   if (img.style.display == "none")
   img.style.display= "block";
    else 
    img.style.display= "none";

}
function alternate (){
    let image2 =document.getElementById("image2")
    let image =document.getElementById("image")
    if (image2.style.display == "none"){
        image2.style.display= "block";
        image.style.display= "none";
        
    }
     else{  image2.style.display= "none";
   image.style.display= "block";
  } 

}
let image =document.getElementById("image")
let image2 =document.getElementById("image2")

image.addEventListener("mouseover", function(){
    this.style.display= "none";

})
image.addEventListener("mouseout", function(){
    this.style.display= "block";
})
image.addEventListener("contextmenu", function(){
  alert("out")
})

let paragraph=document.getElementsByTagName("p");
for (let i=0;i<paragraph.length;i++){
    paragraph[i].addEventListener("mouseover",function(){

        this.style.backgroundColor="blue";
    })
    paragraph[i].addEventListener("mouseout",function(){

        this.style.backgroundColor="white";
    })
}
