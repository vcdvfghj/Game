var SpeechRecognition= window.webkitSpeechRecognition
var recognition= new SpeechRecognition()
function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}
recognition.onresult= function (event)
{
  console.log(event)
  var text= event.results[0][0].transcript
  console.log(text)
  document.getElementById("textbox").innerHTML=text
  if (text=="take my selfie")
  {
    speak()
  }
}
function speak(){
  var synth =window.speechSynthesis
  speak_data= "Taking your selfie in 5 seconds"
  var speakThis= new SpeechSynthesisUtterance(speak_data)
  synth.speak(speakThis)
  Webcam.attach(camera)
  setTimeout(function(){
    take_selfie()
  },5000)
}
Webcam.set({
  height:250,
  width:330,
  image_format:"png",
  png_quality:100
});
camera = document.getElementById("webcam")

function take_selfie()
{
  Webcam.snap(function(data_url){
    document.getElementById("selfie").innerHTML="<img id='result'src='"+data_url+"'>"
    console.log("Selfie Taken")
  })
}
function save(){
  link=document.getElementById("link")
  image=document.getElementById("result").src
  link.href=image
  link.click()
}


