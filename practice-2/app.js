window.onload=()=>{
    main();
}

function rgbColorgenarator(){
    let red=Math.random()*255;
    let green=Math.random()*255;
    let blue=Math.random()*255;
    return `rgb(${red},${green},${blue})`;
}
function main(){
    let root=document.querySelector("#root");
    let btn=document.querySelector("#Color-change");

    btn.addEventListener("click",function(){
     root.style.backgroundColor=rgbColorgenarator();
    })
}