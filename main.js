//https://teachablemachine.withgoogle.com/models/yxfJb1O9A/


Webcam.set({width:350,height:300,img_format:"png",png_quality:90});
 
var camera = document.getElementById("camera");
 
Webcam.attach("#camera");

function camera_on(){
    console.log("hi");
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
});
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yxfJb1O9A/model.json",modelLoaded);
function modelLoaded() {
      console.log("model loaded");
}