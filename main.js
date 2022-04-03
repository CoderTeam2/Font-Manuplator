var difference = 0;
var leftWristX = 0;
var rightWristX = 0;




function setup(){
    video = createCapture(VIDEO);
    video.position();
    video.size();
    canvas = createCanvas(500,500);
    canvas.position();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", getPoses);
}

function modelLoaded(){
    console.log("Posenet is ready to rock!");
}

function draw(){
    background("white");
    textSize(difference);
    fill("black");
    text("Aman", 50, 400);
}

function getPoses(results){
    if(results.length > 0){
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX)
    }
}