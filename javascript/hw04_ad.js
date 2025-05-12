const imgTotal = 6;
let currentImg = 0;

imgDisplay();
let gameAd = window.setInterval(()=>{
    currentImg = (currentImg + 1 + imgTotal) % imgTotal;
    imgDisplay();
}, 10000);

document.getElementById("pause").addEventListener("click", ()=>{
    window.clearInterval(gameAd);
});

document.getElementById("back").addEventListener("click", ()=>{
    currentImg = (currentImg - 1 + imgTotal) % imgTotal;
    imgDisplay();
});

document.getElementById("forward").addEventListener("click", ()=>{
    currentImg = (currentImg + 1 + imgTotal) % imgTotal;
    imgDisplay();
});

function imgDisplay(){
    for(let i = 0; i < imgTotal; i++){
        const adImg = document.getElementById(`ad0${i}`);
        const adNum = document.getElementById(`sp${i+1}`);

        adImg.style.display = (i === currentImg) ? "block" : "none";
        adNum.className = (i === currentImg) ? "isNum" : "num";
    }
}