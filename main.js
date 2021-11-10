noseX = 0;
noseY = 0;

function setup() {
    canvas = createCanvas(350,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,300); 
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function preload() {
 clown_nose = loadImage("https://i.postimg.cc/fbFjbgkb/mm.png");
}

function take_snapshot() {
    save("myFilterIMG.png");
}
function draw() {
    image(video, 0, 0, 350, 300);
    circle(noseX, noseY, 25);
    fill(18, 164, 255);
    stroke(18, 164, 255);
    image(clown_nose, noseX-15, noseY-15, 30, 30);
}
function modelLoaded() {
    console.log("PoseNet has Successfully Loaded!")
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose-x = " + results[0].pose.nose.x)
        console.log("nose-y = " + results[0].pose.nose.y)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

    }
}


