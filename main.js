//https://teachablemachine.withgoogle.com/models/Kl91i83n1/


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
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Kl91i83n1/model.json",modelLoaded);
function modelLoaded() {
      console.log("model loaded");
}
function check (){
    var captured = document.getElementById("captured_img") ;
    classifier.classify(captured,getResult) ;

}
function getResult (error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(4);
    }
}