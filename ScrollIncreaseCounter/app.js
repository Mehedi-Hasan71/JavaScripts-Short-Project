let hasScrolled = false;//for only one time show result this line
window.onscroll = function(){
  if (hasScrolled) return;//for only one time show result this line  // Exit if the animation has already run  
  hasScrolled = true; //for only one time show result this line
  var count = 0;
  var project1=setInterval(project1,10);
  
  function project1(){
    count++;
    var num1=document.querySelector("#count1");
    num1.innerHTML=count;
    if(count==200){
   
      clearInterval(project1);
    } 
  }
  
  var count2 = 0;
  var project2=setInterval(project2,10);
  
  function project2(){
    count2++;
    var num2=document.querySelector("#count2");
    num2.innerHTML=count2;
    if(count2==400){
   
      clearInterval(project2);
    } 
  }
  
  var count3 = 0;
  var project3=setInterval(project3,10);
  
  function project3(){
    count3++;
    var num3=document.querySelector("#count3");
    num3.innerHTML=count3;
    if(count3==512){
   
      clearInterval(project3);
    } 
  }
}
