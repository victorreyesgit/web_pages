document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita que la página se recargue
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    if (nombre && email) {
        alert(`Gracias por tu mensaje, ${nombre}!`);
        document.getElementById("formulario").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
