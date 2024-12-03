//step:1-create onload handler
window.onload = () =>{
    main();
}
function main(){
const root = document.getElementById('root');
const btn = document.getElementById('change-btn');

btn.addEventListener('click',function(){
const bgcolor=genarateRGBColor();
root.style.backgroundColor=bgcolor;
});

}
//step:2-random color generator function
function genarateRGBColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`
}

//step:3-Collect all necessary refernce
