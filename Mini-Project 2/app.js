let gameSeq =[];
let userSeq =[];
let level = 0;
let started = false;

let btns = ["green", "red", "yellow", "blue"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(!started){
        started = true;
        console.log("game started");
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function btnFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerHTML = "Level " + level;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    //console.log(randIdx, randColor, randBtn);
    gameSeq.push(randColor);
    //console.log(gameSeq);
    gameFlash(randBtn);
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);
    //console.log(userSeq);
    checkSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function checkSeq(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp(), 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b></br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        gameSeq = [];    
        userSeq = [];    
        started = false; 
        level = 0;      
    }
}