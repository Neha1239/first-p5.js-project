function preload() {

}
function setup() {
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0,0,640,480);
    fill(255,0,0)
    circle(580,50,70)
    circle(60,50,70)
    circle(60,430,70)
    circle(580,430,70)
    fill(0,128,0)
    rect(95, 35, 450, 30);
    rect(95,415, 450, 30);
    rect(45, 85, 30, 310);
    rect(565, 85, 30, 310);
}
function take_snapshot() {
    save('student_name.png')
}
