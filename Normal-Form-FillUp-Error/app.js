let username= document.querySelector("#username");
let email= document.querySelector("#email");
let password= document.querySelector("#password");
let password2= document.querySelector("#password2");
let Form = document.querySelector("#Form");

function showError(input,message){
    const FormControl = input.parentElement
    FormControl.ClassName = "form-control error";
   const small = FormControl.querySelector("small");
   small.innerText = message;   
}

function showSuccess(input){
    const FormControl = input.parentElement;
    FormControl.ClassName = "form-control success";   
}

function checkMail(input){
    const RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@ ((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.) +[a-zA-Z]{2,}))$/;
    if (RegEx.test(input.value)){
        showSuccess(input);
    }
    else{
        showError(input,"Email Is Not Vailed");
    }
}
function CheckInputLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${GetFieldName(input)}You Much Be At Least ${min} Characters`)
    }
    else if(input.value.length>max){
        showError(input,`${GetFieldName(input)}You Much Be less then ${max} characters`)
    }
    else{
        showSuccess(input);
    }
}

function GetFieldName(input){
    return input.id.charAt(0).toUppercase() + input.id.slice(1);

}

function CheckPasswordMatch(input1,input2){
    if(input1.value !== input.value){
        showError(input2,"Password Is Not Same");
    }
}
Form.addEventListener("submit",(e)=>{
 e.preventDefault();
 CheckInputLength(username,3,20);
 CheckInputLength(password,6,30);
 checkMail(email);
 CheckPasswordMatch(password,password2);

})