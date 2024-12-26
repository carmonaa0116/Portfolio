const frontEndDiv = document.querySelector(".frontEnd");
const backEndDiv = document.querySelector(".backEnd");
const herramientasDiv = document.querySelector(".herramientas");

const stack = [frontEndDiv, backEndDiv, herramientasDiv];

// Bandera para controlar si la animación ya se ha ejecutado
let hasAnimated = false;

// Escuchar el evento de desplazamiento
window.addEventListener('scroll', () => {
    if (hasAnimated) return; // Si ya se animó, no hacer nada

    // Obtener la posición actual del scroll
    const scrollY = window.scrollY;
    // Reaplicar la animación cuando el scroll alcance una posición específica
    if (scrollY >= 570 && scrollY <= 949) { // Rango de tolerancia
        stack.forEach((parte, index) => {
            // Reinicia la animación para aplicar el retraso en cada uno
            parte.style.animation = "none";
            void parte.offsetWidth; // Fuerza el reflujo para reiniciarla

            // Establecer retraso en la animación y opacidad
            parte.style.animation = `aparecerStack 0.5s ease-in-out ${index * 0.5}s`; // Retraso basado en el índice
            parte.style.transition = `opacity 0.5s ease-in-out ${index * 0.5}s`; // Añadir retraso de 0.5s a la opacidad

            // Establecer la opacidad a 1 después de 0.5s
            setTimeout(() => {
                parte.style.opacity = 1;
            }, index * 200); // Retraso en función del índice

        });

        // Establecer la bandera a true para evitar que la animación se repita
        hasAnimated = true;
    }
});
