//Configurar SW
let swLocation = "sw.js";
// "/beerjs/sw.js";

if (navigator.serviceWorker) {
    if (window.location.href.includes("localhost")) swLocation = "/sw.js"; //Varia según el host
    navigator.serviceWorker.register(swLocation);
}

//Logic of web app
console.log("Hello world!!");

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los valores de los campos de entrada
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aquí puedes realizar la lógica de autenticación, como enviar los datos a un servidor o verificarlos localmente
        // Por ahora, simplemente mostraremos los valores en la consola
        console.log('Nombre de usuario:', username);
        console.log('Contraseña:', password);

        // Limpia los campos del formulario después del envío
        loginForm.reset();
    });
});