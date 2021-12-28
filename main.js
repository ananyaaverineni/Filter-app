function preload(){
}
function setup(){
 canvas=createCanvas(650,400); 
 canvas.position(400,250);
 video=createCapture(VIDEO)
 video.hide()
 tint_colour=""
}

function draw(){
image(video,0,0,650,400)    
tint(tint_colour);
}

function apply_filter(){
tint_colour=document.getElementById("tint_colour").value
}
 function take_snapshot(){
save("selfie.png")
 }