function makeBubble(){
    var clutter="";

for (var i=1;i<=168;i++){
    var rn=Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}
var Timer=60;
var hitrn=0;
function runtimer(){
    var Timerint = setInterval(function(){
        if(Timer>0){
            Timer--;
            document.querySelector("#timervar").textContent = Timer;
        }
        else{
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`
            clearInterval(Timerint);
        }
        
    },1000);
}

function getnewhit(){
    hitrn =Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

var score=0;
function increasescore(){
    score+=10;
    document.querySelector("#scorevar").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedno = Number(dets.target.textContent);

    if(clickedno === hitrn){
        increasescore();
        getnewhit();
        makeBubble();
    }
});


// increasescore();
getnewhit();
runtimer();
makeBubble();
