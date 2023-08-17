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
document.getElementById("HotspotAnnotation").style.visibility = "hidden";



function hideElem() {
    document.getElementById("piazza").style.visibility = "hidden"; 
    document.getElementById("cima").style.visibility = "hidden";
    document.getElementById("yale").style.visibility = "hidden"; 
    document.getElementById("campon").style.visibility = "hidden"; 
}

function piazza() {
    document.getElementById("piazza").style.visibility = "visible";
    document.getElementById("cima").style.visibility = "hidden";
    document.getElementById("yale").style.visibility = "hidden"; 
    document.getElementById("campon").style.visibility = "hidden";
}
function cimaloreto() {
    document.getElementById("piazza").style.visibility = "hidden"; 
    document.getElementById("cima").style.visibility = "visible";
    document.getElementById("yale").style.visibility = "hidden"; 
    document.getElementById("campon").style.visibility = "hidden";
}
function yale() {
    document.getElementById("piazza").style.visibility = "hidden"; 
    document.getElementById("cima").style.visibility = "hidden";
    document.getElementById("yale").style.visibility = "visible"; 
    document.getElementById("campon").style.visibility = "hidden";
}
function campon() {
    document.getElementById("piazza").style.visibility = "hidden"; 
    document.getElementById("cima").style.visibility = "hidden";
    document.getElementById("yale").style.visibility = "hidden"; 
    document.getElementById("campon").style.visibility = "visible";
}
//-----------------------------------------------------------------------
function gal_piazza() {
    document.getElementById("gal_piazza").style.visibility = "visible"; 
}
function gal_cima() {
    document.getElementById("gal_cima").style.visibility = "visible"; 
}
function gal_yale() {
    document.getElementById("gal_yale").style.visibility = "visible"; 
}
function gal_campon() {
    document.getElementById("gal_campon").style.visibility = "visible"; 
}
function nascondi() {
    document.getElementById("gal_piazza").style.visibility = "hidden"; 
    document.getElementById("gal_cima").style.visibility = "hidden";
    document.getElementById("gal_yale").style.visibility = "hidden";
    document.getElementById("gal_campon").style.visibility = "hidden";
}

