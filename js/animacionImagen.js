const contenedor = document.querySelector(".contenedorMain");

const imagen2Div = document.querySelector(".imagen2");


const elementos = [imagen2Div];
contenedor.addEventListener("mousemove", (event) => {
    const contenedorRect = contenedor.getBoundingClientRect();

    const centerX = contenedorRect.left + contenedorRect.width / 2;
    const centerY = contenedorRect.top + contenedorRect.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const rotateX = (mouseY - centerY) / contenedorRect.height * 100;
    const rotateY = (mouseX - centerX) / contenedorRect.width * -100;


    elementos.forEach((elemento) => {

        elemento.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    contenedor.addEventListener('mouseleave', () => {
        elemento.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});