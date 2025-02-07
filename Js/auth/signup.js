//Implémente le JS de la page

const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassowrd = document.getElementById("PasswordInput");
const inputValidaionPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");
const formInscription = document.getElementById("formulaireInscription");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassowrd.addEventListener("keyup", validateForm);
inputValidaionPassword.addEventListener("keyup", validateForm);

btnValidation.addEventListener("click", InscrireUtilisateur);

//Function (validateForm) valide le formulaire
function validateForm(){

    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const mailOk = valideMail(inputMail);
    const passwordOk = validePassword(inputPassowrd);
    const passwordConfirmOk = validateConfirmationPassword(inputPassowrd, inputValidaionPassword);

    if(nomOk && prenomOk && mailOk && passwordOk){
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
    }
    else{
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
    }

}

function validePassword(input){
    // Définir le regex
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


function valideMail(input){
    // Définir le regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;

    if(mailUser.match(emailRegex)){
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


function validateRequired(input){
    if(input.value != ''){
        //c ok
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        // c pa ok
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }

}

function InscrireUtilisateur(){
    let dataForm = new FormData(formInscription);

    let name = dataForm.get("name");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "firstName": dataForm.get("nom"),
      "lastName": dataForm.get("prenom"),
      "email": dataForm.get("email"),
      "password": dataForm.get("mdp")
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    
    fetch(apiUrl+"/registration", requestOptions)
      .then((response) => {
        if(response.ok){
            return response.json();
        }
        else{
            alert("Erreur lors de l'inscription");
        }
        
      })
      .then((result) => {
        alert(dataForm.get("prenom")+" Inscription réussi")
        document.location.href="/signin"
    })
      .catch((error) => console.error(error));
}

