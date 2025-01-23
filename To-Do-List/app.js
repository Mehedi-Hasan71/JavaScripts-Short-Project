const inputBox =document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You Must Write SomeThing!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        // span.innerHTML = '<img src="\images/uncheked.png" alt="Checked"  style="width: 26px; height: 26px;">'; 
         span.innerHTML="\u00d7"; //it indicates the cross symbols
         li.appendChild(span);
    }
    inputBox.value= "";
    savaData()
}

// listContainer.addEventListener("click",function(e){
//     if(e.target.tagName==="LI"){
//         e.target.classList.toggle("checked");
//     }
//     else if(e.target.tagName ==="SPAN"){
//         e.target.parentElement.remove();
//     }
// },false);

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savaData()

    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savaData()
    }
},false);//false not mandatory

//important of save data memorry

function savaData(){
 localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask()