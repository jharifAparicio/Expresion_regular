function validarCorreo() {
    const correo = document.getElementById("email").value;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const resultadoEmail = document.getElementById("resultadoEmail");

    if (regexEmail.test(correo)) {
        resultadoEmail.innerText = "Correo válido";
        resultadoEmail.style.color = "green";
    } else {
        resultadoEmail.innerText = "esto no es un correo";
        resultadoEmail.style.color = "red";
    }
}

function validarNumero() {
    const Numero = document.getElementById("numero").value;
    const regexNum = /^(7[0-9]{7,8}|6[0-9]{7,8}|5[0-9]{7,8}|8[0-9]{7,8}|4[0-9]{7,8}|3[0-9]{7,8}|2[0-9]{7,8})$/;
    const resultadoNum = document.getElementById("resultadoNum");

    if (regexNum.test(parseInt(Numero))) {
        resultadoNum.innerText = "Número válido";
        resultadoNum.style.color = "green";
    } else {
        resultadoNum.innerText = "este numero no es de Bolivia";
        resultadoNum.style.color = "red";
    }
}

function validarPassword() {
    const pass = document.getElementById("password").value;
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const resultadoPass = document.getElementById("resultadoPass");

    if (regexPass.test(pass)) {
        resultadoPass.innerText = "contraseña segura";
        resultadoPass.style.color = "green";
    } else {
        resultadoPass.innerText = "contraseña insegura";
        resultadoPass.style.color = "red";
    }
}