const nextStep = document.getElementById('nextstep');
console.log(nextStep);
nextStep.addEventListener('click', function() {
    document.getElementById('select-eyes-card').style.display = "block";
    document.getElementById('select-skin-card').style.display = 'none';

})
document.getElementById("show-skin-card").addEventListener('click', () => {
    document.getElementById('select-skin-card').style.display = 'block';
    document.getElementById('select-eyes-card').style.display = "none";

})
document.getElementById("show-mouth-card").addEventListener('click', () => {
    document.getElementById('select-mouth-card').style.display = 'block';
    document.getElementById('select-eyes-card').style.display = "none";

})
document.getElementById("previouscard").addEventListener('click', () => {
    document.getElementById('select-eyes-card').style.display = 'block';
    document.getElementById('select-mouth-card').style.display = "none";

})

// skin section 
document.getElementById("yellow-skin").addEventListener('click', () => {
    document.getElementById('skin').src = "./assets/skin/yellow.png";
})
document.getElementById("green-skin").addEventListener('click', () => {
    document.getElementById('skin').src = "./assets/skin/green.png";
})
document.getElementById("red-skin").addEventListener('click', () => {
    document.getElementById('skin').src = "./assets/skin/red.png";
})


// eye section
document.getElementById("eye-normal").addEventListener('click', () => {
    document.getElementById("eyes").src = "./assets/eyes/normal.png";
})
document.getElementById("eye-closed").addEventListener('click', () => {
    document.getElementById("eyes").src = "./assets/eyes/closed.png";
})
document.getElementById("eye-long").addEventListener('click', () => {
    document.getElementById("eyes").src = "./assets/eyes/long.png";
})
document.getElementById("eye-laughing").addEventListener('click', () => {
    document.getElementById("eyes").src = "./assets/eyes/laughing.png";
})
document.getElementById("eye-rolling").addEventListener('click', () => {
    document.getElementById("eyes").src = "./assets/eyes/rolling.png";
})
document.getElementById("eye-winking").addEventListener('click', () => {
    document.getElementById("eyes").src = "./assets/eyes/winking.png";
})

// mouth section..
document.getElementById('mouth-open').addEventListener('click', () => {
    document.getElementById('mouth').src = "./assets/mouth/open.png";
})
document.getElementById('mouth-smiling').addEventListener('click', () => {
    document.getElementById('mouth').src = "./assets/mouth/smiling.png";
})
document.getElementById('mouth-straight').addEventListener('click', () => {
    document.getElementById('mouth').src = "./assets/mouth/straight.png";
})
document.getElementById('mouth-sad').addEventListener('click', () => {
    document.getElementById('mouth').src = "./assets/mouth/sad.png";
})
document.getElementById('mouth-teeth').addEventListener('click', () => {
    document.getElementById('mouth').src = "./assets/mouth/teeth.png";
})