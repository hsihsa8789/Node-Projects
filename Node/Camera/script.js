let video = document.querySelector("video");
let captureBtncount = document.querySelector("capture-btn-cont");
let captureBtn = document.querySelector(".capture-btn");
let transparentColor = "transparent";

let recorder;
let constraints = {
    video: true,
    audio: false
}

navigator.mediaDevices.getUserMedia(constraints)
.then((stream)=> {
    video.srcObject = stream;
});

// click photo

captureBtncount.addEventListener("click",() => {
    let canvas = document.createElement("canvas");
    let tool = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    tool.drawImage(video,0,0,canvas.width,canvas.height);

    // applying filters on photo

    tool.fillStyle = transparentColor;
    tool.fillRect(0,0,canvas.width,canvas.height);
     

    let imageURL = canvas.toDataURL();
})