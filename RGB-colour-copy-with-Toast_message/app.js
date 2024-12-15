let div = null;
window.onload = () =>{
    main();
}
function rgbcolourgenarator(){
    const red =Math.floor(Math.random() *255);
    const green =Math.floor(Math.random() *255);
    const blue =Math.floor(Math.random() *255);
return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
function genarateTosteMesseage(msg){
    div = document.createElement('div');
    div.innerHTML = msg;
    div.className='toast-message toast-message-slide-in';
    document.body.appendChild(div);
 
    div.addEventListener('click',function(){
     div.classList.remove('toast-message-slide-in');
     div.classList.add('toast-message-slide-out');
 
     div.addEventListener('animationend',function(){
         div.remove();
         div=null;
     })
    })
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
     if(div !=null){
        div.remove();
        div = null;
     }
     genarateTosteMesseage(`${output.value}copied`)
    
    });
}


