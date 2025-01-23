const player1ScoreDisplay=document.querySelector("#p1Score");
const player2ScoreDisplay=document.querySelector("#p2Score");
const wScoreDisplay=document.querySelector("p span");

const inputScore=document.querySelector("#inputScore");

const p1Btn=document.querySelector("#p1Btn");
const p2Btn=document.querySelector("#p2Btn");
const resetBtn=document.querySelector("#resetBtn");

let p1Score=0;
let p2Score=0;
let winingScore=5;//problem:Why I can not input their random value?
let gameOver=false;

p1Btn.addEventListener("click",()=>{
    if(!gameOver){
        p1Score++;
        if(p1Score===winingScore){
           
            gameOver=true;
            console.log("game is over");
            p1Btn.setAttribute('disabled','disabled');//you can skip this line
            p2Btn.setAttribute('disabled','disabled');//you can skip this line
        }
        player1ScoreDisplay.textContent=p1Score;
            
    }

})
p2Btn.addEventListener('click',()=>{ 
    if(!gameOver){
        p2Score++;
        if(p2Score===winingScore){   
            gameOver=true;  
            console.log("game is over");
            p1Btn.setAttribute('disabled','disabled');//you can skip this line
            p2Btn.setAttribute('disabled','disabled');//you can skip this line
        } 
       player2ScoreDisplay.textContent=p2Score;
    } 
   
 });
 inputScore.addEventListener('change',()=>{
    wScoreDisplay.textContent=inputScore.value;
    winingScore = inputScore.value;
    inputScore.value=" ";
  

 })

resetBtn.addEventListener('click',()=>{
    let p1Score=0;
    let p2Score=0;
    let gameOver=false;
    player1ScoreDisplay.textContent=0;
    player2ScoreDisplay.textContent=0;
    p1Btn.removeAttribute('disabled');
    p2Btn.removeAttribute('disabled');
});

