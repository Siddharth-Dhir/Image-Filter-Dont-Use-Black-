
console.log(ImgName)
function preload(){

}
function setup(){
    Canvas = createCanvas(600,450)
    Canvas.position(100,300)
    Video=createCapture(VIDEO)
    Video.hide();
    Tint = "";

}

function draw(){
    image(Video,0,0,600,450);
    tint(Tint);

}
function Snap(){
    ImgName= "Image" +"_" + round(Math.random() * 1000000000)
    save(ImgName + ".png")
}
function Filter(){
    Tint = document.getElementById("Color").value;
}