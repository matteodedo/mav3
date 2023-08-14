// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);
//nascondo immagini
document.getElementById("myImg").style.visibility = "hidden";



function hideElem() {
    document.getElementById("myImg").style.visibility = "hidden"; 
    document.getElementById("myImg2").style.visibility = "hidden";
    document.getElementById("myImg3").style.visibility = "hidden"; 
    document.getElementById("myImg4").style.visibility = "hidden"; 
}

function piazza() {
    document.getElementById("myImg").style.visibility = "visible"; 
    document.getElementById("myImg2").style.visibility = "hidden";
    document.getElementById("myImg3").style.visibility = "hidden"; 
    document.getElementById("myImg4").style.visibility = "hidden";
}
function cimaloreto() {
    document.getElementById("myImg").style.visibility = "hidden"; 
    document.getElementById("myImg2").style.visibility = "visible";
    document.getElementById("myImg3").style.visibility = "hidden"; 
    document.getElementById("myImg4").style.visibility = "hidden";
}
function yale() {
    document.getElementById("myImg").style.visibility = "hidden"; 
    document.getElementById("myImg2").style.visibility = "hidden";
    document.getElementById("myImg3").style.visibility = "visible"; 
    document.getElementById("myImg4").style.visibility = "hidden";
}
function campon() {
    document.getElementById("myImg").style.visibility = "hidden"; 
    document.getElementById("myImg2").style.visibility = "hidden";
    document.getElementById("myImg3").style.visibility = "hidden"; 
    document.getElementById("myImg4").style.visibility = "visible";
}