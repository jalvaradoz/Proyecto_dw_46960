document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector(".overlay");
    const logo = document.querySelector(".logo");

    // Agregamos un evento para detectar el final de la animación del logo
    logo.addEventListener("animationend", function() {
        // Iniciamos la animación de desvanecimiento de la superposición
        overlay.style.animation = "fade-out-overlay 1s 1.8s forwards";
    });
});
