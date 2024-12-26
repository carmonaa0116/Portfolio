const grid = document.querySelector('.imagen2');
grid.innerHTML = "";

// Obtener las dimensiones del contenedor
const gridWidth = grid.offsetWidth;
const gridHeight = grid.offsetHeight;

// Calcular el tamaño de cada celda
const columns = 10; // Número de columnas en el grid
const rows = 10; // Número de filas en el grid
const cellWidth = gridWidth / columns;
const cellHeight = gridHeight / rows;

// Establecer la imagen de fondo en el contenedor
grid.style.backgroundImage = 'url("./img/miFoto.jpg")';
grid.style.backgroundSize = `${gridWidth}px ${gridHeight}px`; // La imagen cubre todo el grid
grid.style.backgroundRepeat = 'no-repeat';

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        const divNuevo = document.createElement("div");
        divNuevo.classList.add("item");

        // Calcular la posición de cada celda en el fondo
        const bgPositionX = (j * cellWidth); // Posición X en la imagen, según la columna
        const bgPositionY = (i * cellHeight); // Posición Y en la imagen, según la fila

        // Establecer la imagen de fondo para cada celda y su posición exacta
        divNuevo.style.backgroundImage = 'url("./img/miFoto.jpg")';
        divNuevo.style.backgroundSize = `${gridWidth}px ${gridHeight}px`; // La imagen cubre todo el grid
        divNuevo.style.backgroundPosition = `-${bgPositionX}px -${bgPositionY}px`; // Ajustamos la posición del fondo
        divNuevo.style.backgroundRepeat = 'no-repeat'; // Aseguramos que no haya repetición de la imagen

        // Asegurar que las celdas tengan el tamaño exacto
        divNuevo.style.width = `${cellWidth}px`;
        divNuevo.style.height = `${cellHeight}px`;

        grid.appendChild(divNuevo);
    }
}

const items = document.querySelectorAll(".item");

const botonLimpiar = document.querySelector(".botonLimpiar");

items.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.transform = "scale(1.5)";
        item.style.border = "1px solid white";
    });
    item.addEventListener("mouseout", () => {
        item.style.transform = "scale(1)";
    });
});

botonLimpiar.addEventListener("click", () => {
    items.forEach((item) => {
        item.style.border = "none";
    });
});



// Función para detectar en qué celda está el ratón y hacer zoom en esa celda


