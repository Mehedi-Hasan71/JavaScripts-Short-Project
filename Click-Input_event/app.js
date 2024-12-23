const lang = document.querySelector("#lang");
const btn = document.querySelector("#btn");

btn.onclick = (e) => {
e.preventDefault();
const OptionsValue = [].filter
.call(lang.options, (option) => option.selected)

.map((option) => option.text);

alert(OptionsValue);
}

const message=document.querySelector("#message");
const result = document.querySelector("#result");
const b = document.querySelector("#b");

b.addEventListener("click",()=>{
    result.textContent=message.value;
})
