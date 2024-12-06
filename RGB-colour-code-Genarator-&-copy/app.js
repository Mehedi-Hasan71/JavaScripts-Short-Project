window.onload = () =>{
    main();
}
function rgbcolourgenarator(){
    const red =Math.floor(Math.random() *255);
    const green =Math.floor(Math.random() *255);
    const blue =Math.floor(Math.random() *255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

function main(){
    const hasan =document.getElementById('root');
    const ridoy = document.getElementById('Change-btn');
    const mehedi =document.getElementById('output');
    const chumpok = document.getElementById('copy-btn');

    ridoy.addEventListener('click',function(){
    hasan.style.backgroundColor=rgbcolourgenarator();
    ridoy.style.backgroundColor=rgbcolourgenarator();
    mehedi.value=rgbcolourgenarator();
    });
    chumpok.addEventListener('click',function(){
     navigator.clipboard.writeText(mehedi.value);
    });

}