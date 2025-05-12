let imgs = document.querySelectorAll("img.img");
let comment = document.getElementById("score");
let isClick = false;

for(let img of imgs){
    img.addEventListener("mouseover",mouseover);
    img.addEventListener("mouseout",mouseout);
    img.addEventListener("click",click);
    img.addEventListener("dblclick",dblclick);
}

function mouseover(){
    var star = document.getElementById(this.id);
    let no = this.id.substring(4);
    if(!isClick){
        for(let i = 0; i < no; i++)
            imgs[i].className = "img star";
        comment.innerHTML = `<p id="score">單擊星星可評分，雙擊星星可重置<br><br>您的評價為&nbsp;${no}&nbsp;顆星！</p>`;
    }
}

function mouseout(){
    var star = document.getElementById(this.id);
    let no = this.id.substring(4);
    for(let i = 0; i < no; i++)
        imgs[i].className = "img darkstar";
    if(!isClick)
        comment.innerHTML = `<p id="score">單擊星星可評分，雙擊星星可重置</p>`;
}

function click(){
    var star = document.getElementById(this.id);
    let no = this.id.substring(4);
    if(!isClick){
        for(let i = 0; i < no; i++)
            imgs[i].style.filter = "grayscale(0%)";
        comment.innerHTML = `<p id="score">單擊星星可評分，雙擊星星可重置<br><br>您的評價為&nbsp;${no}&nbsp;顆星！</p>`;
    }
    isClick = true;
}

function dblclick(){
    var star = document.getElementById(this.id);
    let no = this.id.substring(4);
    for(let i = 0; i < imgs.length; i++)
        imgs[i].style.filter = "";    
    comment.innerHTML = `<p id="score">單擊星星可評分，雙擊星星可重置</p>`;
    isClick = false;
}