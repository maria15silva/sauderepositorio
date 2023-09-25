document.getElementById("increase-font-size").addEventListener("click", function() {
    changeFontSize(1);
});

document.getElementById("decrease-font-size").addEventListener("click", function() {
    changeFontSize(-1);
});

function changeFontSize(step) {
    var currentFontSize = parseFloat(getComputedStyle(document.body).fontSize);
    var newFontSize = currentFontSize + step;
    document.body.style.fontSize = newFontSize + "px";
}

const animateGif = document.getElementById("animated-gif");
const pauseButton = document.getElementById("pause-button");
let isPaused = false;
let gifSrc = animateGif.scroll;

pauseButton.addEventListener("click", () => {
    if(isPaused){
        animateGif.src = gifSrc;
        pauseButton.textContent = "Pause";
    }
    else {
        gifSrc = animateGif.src;
        animateGif.src = "";
        pauseButton.textContent = "Play";
    }
    isPaused = !isPaused;
})