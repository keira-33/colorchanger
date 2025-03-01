const colors = ["#f1f5f8", "#00ff00", "#ff0000", "#ff00ff", "#0000ff", "#ffff00", 
                "#3d406e", "#9497d6", "#c8b0bf", "#c8b0bf", "#4273c6", "#4273c6", 
                "#32c1f2", "#32c1f2", "#b236e8", "#b236e8", "#c55f62","#63e823", 
                "#9fbfdc", "#cb4fe9", "#6d8e78", "#2dc3cf", "#b2bfc9","#f51e3b",
                "#c21f9d", "#cfd082", "#f4d7c6"];
const btn = document.getElementById("btn");

function randomize() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    document.getElementById("currentColor").innerHTML = colors[randomNumber];}

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}