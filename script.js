const personas = [
    { usuario: "lalo", contrasena: "12345"},
    { usuario: "mike", contrasena: "mike" },
];

function mostrarSpinner() {
    document.getElementById("spinner").style.display = "inline-block";
    document.getElementById("loginButton").disabled = true;
    document.getElementById("registerButton").disabled = true;

    document.body.classList.add("blur-background");
}

function ocultarSpinner() {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("loginButton").disabled = false;
    document.getElementById("registerButton").disabled = false;

    document.body.classList.remove("blur-background");
}

function iniciarSesion() {
    const usuarioInput = document.getElementById("usuarioInput").value;
    const contrasenaInput = document.getElementById("contrasenaInput").value;

    if (!usuarioInput || !contrasenaInput) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    mostrarSpinner(); // Mostrar el spinner durante la autenticación

    setTimeout(() => {
        const usuarioEncontrado = personas.find(
            (persona) => persona.usuario === usuarioInput && persona.contrasena === contrasenaInput
        );

        if (usuarioEncontrado) {
            alert(`Inicio de sesión exitoso. Bienvenido, ${usuarioEncontrado.usuario}!`);

            console.log("Genial");
            console.log(personas);
        } else {
            alert("Credenciales incorrectas. Intente de nuevo.");
            console.log("No genial");
        }

        ocultarSpinner(); // Ocultar el spinner después de la autenticación
        limpiarCampos();

    }, 2000); // Simulación de inicio de sesión de 2 segundos
}

function registrarUsuario() {
    const usuarioInput = document.getElementById("usuarioInput").value;
    const contrasenaInput = document.getElementById("contrasenaInput").value;

    if (!usuarioInput || !contrasenaInput) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    mostrarSpinner(); // Mostrar el spinner durante el registro

    setTimeout(() => {
        const usuarioExistente = personas.some((persona) => persona.usuario === usuarioInput);

        if (usuarioExistente) {
            alert(`El usuario ya existe. Inicie sesión en lugar de registrarse.`);
        } else {
            personas.push({ usuario: usuarioInput, contrasena: contrasenaInput });
            alert("Registro exitoso. Ahora puede iniciar sesión.");
        }

        ocultarSpinner(); // Ocultar el spinner después del registro
        limpiarCampos();

    }, 2000); // Simulación de registro de 2 segundos
}
function limpiarCampos() {
    document.getElementById("usuarioInput").value = "";
    document.getElementById("contrasenaInput").value = "";
}
