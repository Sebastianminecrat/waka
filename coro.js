function preload() {

  }
  
  function setup() {
 canvas=createCanvas (500,600);
    canvas.position(140,100);
    video=createCapture(VIDEO);video.hide();
     patatatus="";
  }
  function draw() {
 image(video,0,0,500,600);
 tint(patatatus);
  }
function lelelelechon(){patatatus=document.getElementById("patatata").value;}
  function wawawalalas(){save("wakawakalala.png")}