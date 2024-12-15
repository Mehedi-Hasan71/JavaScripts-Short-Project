const group=document.querySelector(".group");
const output = document.querySelector(".output");
const sizes = ["Xs","S","M","L","XL","XXL"];

group.innerHTML = sizes.map((size)=>
`<div><input type="radio" id="" value="${size}" name="size">
<label for="">${size}</label></div>`
).join("");

const RadioButton = document.querySelectorAll("input[name='size']");
for(const radioBtn of RadioButton){
    radioBtn.addEventListener("change",ShowOutput)
}

function ShowOutput(e){
    if(this.checked){
        output.innerHTML=`You Selected ${this.value}`
    }
}