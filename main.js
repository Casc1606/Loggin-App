window.onload = () => {
    iniciar();
}

function iniciar () {

    let button = document.getElementById("btn_login");

    button.onclick = () => {
        const user = document.getElementById("input_user").value;
        const password = document.getElementById("input_password").value;
        login(user, password)
    }

}

function login (user, password) {
    console.log("Logeando", user, password)
}
