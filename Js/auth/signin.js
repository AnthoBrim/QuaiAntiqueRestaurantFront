const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("passwordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    // info faux , il faudre appeler 'L'API pour vérifier les credentials en BDD

    if(mailInput.value == "tes@gmail.com" && passwordInput.value == "123"){

        // il faudra recup le token
        const token = "TESTfuidsp5qac2zuhrjqso1q9nwzcuwyiuanghsvqwiojaps";
        setToken(token);

        setCookie(RoleCookieName, "client", 7);

        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}