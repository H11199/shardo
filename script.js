const videoElement = document.getElementById("video");
const button = document.querySelector(".button");

async function selectMediaStream() {
  const mediaStream = await navigator.mediaDevices.getDisplayMedia();
  videoElement.srcObject = mediaStream;
  videoElement.onloadedmetadata = () => {
    videoElement.play();
  };
}
const handleClick = () => {
  videoElement.requestPictureInPicture();
};

selectMediaStream();
