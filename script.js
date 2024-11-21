// Obtener los elementos del DOM
const modal = document.getElementById("modal-note");
const btnSurprise = document.getElementById("btn-surprise");
const closeBtn = document.querySelector(".close");

// Mostrar el modal al hacer clic en el botón
btnSurprise.addEventListener("click", function () {
    modal.style.display = "flex";
});

// Cerrar el modal al hacer clic en la "X"
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
