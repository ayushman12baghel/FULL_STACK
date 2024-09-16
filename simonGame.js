let gameSeq=[];
let userSeq=[];
let buttons=["yellow","red","purple","green"];

let started=false;
let level=0;
document.addEventListener("keypress",function(){
    console.log("game started");
    started=true;
    levelUp();
});

let h2=document.querySelector("h2");

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIndex=Math.floor(Math.random()*3);
    let color=buttons[randomIndex];
    let randomButton=document.querySelector(`.${color}`);
    gameSeq.push(color);
    console.log(gameSeq);
    gameFlash(randomButton);
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000/4);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },1000/4);
}

function checkAns(index){
    // console.log("curr Level: ",level);
    // let index=level-1;
    if(userSeq[index]==gameSeq[index]){
        console.log("same value");
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}


function btnPress(){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}