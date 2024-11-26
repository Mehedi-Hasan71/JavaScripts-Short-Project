const DragArea = document.querySelector(".AppBody"),
        DragText=DragArea.querySelector("h3"),
        button=DragArea.querySelector("button"),
        input=DragArea.querySelector("input");  
        
        let myfile;
        button.onclick = () =>{
            input.click()
        }
        input.addEventListener("change",function(){
        myfile = this.files[0];
        DragArea.classList.add("active");
        showMe()
})
DragArea.addEventListener("dragover",(event)=>{
    event.preventDefault();
    DragArea.classList.add("active");
    DragText.textContent = "Release to Upload File";
})
DragArea.addEventListener("dragleave",()=>{
    DragArea.classList.remove("active");
    DragText.textContent = "Drag & Drop";
});
DragArea.addEventListener("drop",(event)=>{
    event.preventDefault();
    Myfile = event.dataTransfer.files[0];
    showMe()
})
function showMe(){
    let filetype = Myfile.type;
    let validEx = ["image/jpeg","image/jpg","image/png"];

    if(validEx.includes(filetype)){
        let fileReader = new FileReader();

        fileReader.onload = () => {
            let imgUrl = fileReader.result;
            let img = `<img src="${imgUrl}" alt="">`;

            DragArea.innerHTML = img
        }
        fileReader.readAsDataURL(Myfile); 
    }
    else{
        alert("This File Is Not Valid");
        DragArea.classList.remove("active"); 
        DragText.textContent = "Drag & Drop";
    }
}