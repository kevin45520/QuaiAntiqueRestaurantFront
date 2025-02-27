//implementer mon js
const NomInput = document.getElementById("NomInput");
const PrenomInput = document.getElementById("PrenomInput");
const EmailInput = document.getElementById("EmailInput");
const PasswordInput = document.getElementById("PasswordInput");
const ValidatePasswordInput = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-Validation-inscription");

NomInput.addEventListener("keyup",ValidateForm);
PrenomInput.addEventListener("keyup",ValidateForm);
EmailInput.addEventListener("keyup",ValidateForm);
PasswordInput.addEventListener("keyup",ValidateForm);
ValidatePasswordInput.addEventListener("keyup",ValidateForm);

function ValidateForm(){
    const nomOk = ValidateRequired(NomInput);
    const prenomOK = ValidateRequired(PrenomInput);
    const mailOK = ValidateMail(EmailInput);
    const passwordOK = validatePassword(PasswordInput);
    const confirmPwdOK = validateConfirmationPassword(PasswordInput, ValidatePasswordInput);

    if(nomOk && prenomOK && mailOK && passwordOK && confirmPwdOK){
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }
}

function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}

function validatePassword(input){
        //Définir mon regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
        const passwordUser = input.value;
        if(passwordUser.match(passwordRegex)){
            input.classList.add("is-valid");
            input.classList.remove("is-invalid"); 
            return true;
        }
        else{
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
            return false;
        }
    }

function ValidateMail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function ValidateRequired(input){
    if(input.value != ""){
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        return true;

    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}
