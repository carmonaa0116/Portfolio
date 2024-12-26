const fondo = document.querySelector(".fondo");

const filas = 20;
const columnas = 20;

for (let i = 0; i < filas * columnas; i++) {
    const cuadrado = document.createElement("div");
    cuadrado.classList.add("cuadrado");
    fondo.appendChild(cuadrado);
}

const cuadrados = document.querySelectorAll(".cuadrado");

function aplicarAnimacion() {
    const cuadradoAleatorio = cuadrados[Math.floor(Math.random() * cuadrados.length)];

    cuadradoAleatorio.style.animation = "cambiarColor 0.8s";

    cuadradoAleatorio.addEventListener("animationend", function () {
        cuadradoAleatorio.style.animation = "";
    });
}

setInterval(aplicarAnimacion, 1);