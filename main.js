noseX=0;
noseY=0;

function preload(){
    img=loadImage("hat.png");
}
function setup(){
    Canvas=createCanvas(700,500);
    video=createCapture(VIDEO);
    video.size(700,700);
    video.hide();
    Canvas.center();
    posenet=ml5.poseNet(video,modeloaded);
    posenet.on('pose',gotReslults);

}
function modeloaded(){
    console.log("Model Ready")
}
function draw(){
    image(video,0,0,700,500);
    image(img,noseX-130,noseY-350,250,250)
    
}
function gotReslults(results){
if (results.length>0){
    
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("X_Cords = "+noseX+"    Y_cords = "+noseY)

}
}

function take_snapshot(){
    save("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE.png");
}
