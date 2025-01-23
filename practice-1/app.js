let inc=document.querySelector("#increment");
let dec=document.querySelector("#decrement");
let result=document.querySelector("#result");
let res=document.querySelector("#restart");

let count=0;
 inc.onclick=function(){
count +=1;
result.innerHTML=count;
inc.style.backgroundColor="green";
 }
dec.onclick=function(){
    count -=1;
    result.innerHTML=count;
    dec.style.backgroundColor="red";
}
res.onclick=function(){
    count=0;
    result.innerHTML=count; 
}

