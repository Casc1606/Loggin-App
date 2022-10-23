window.onload = () => {
    iniciar();
}

function iniciar () {

    let button = document.getElementById("btn_login");

    button.onclick = () => {
        const user = $("#input_user").val();
        const password = document.getElementById("input_password").value;
        login(user, password)
    }

}

function login (user, password) {
    if (user === "Camilo" && password === "1234") {
        alert("Datos correctos, bienvenido!")
        window.location.href="Cam.html";
    } else {
        $("#exampleModal").modal("show")
    }
    console.log("Logeando", user, password)
}
