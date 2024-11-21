// --- Modal de la carta ---
const modalNote = document.getElementById('modal-note');
const btnSurprise = document.getElementById('btn-surprise');
const closeNote = modalNote.querySelector('.close');

// Abrir el modal de la carta
btnSurprise.addEventListener('click', () => {
    modalNote.style.display = 'flex';
});

// Cerrar el modal de la carta
closeNote.addEventListener('click', () => {
    modalNote.style.display = 'none';
});

// Cerrar el modal de la carta si se hace clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === modalNote) {
        modalNote.style.display = 'none';
    }
});

// --- Modal para las fotos ---
const photos = document.querySelectorAll('.photos img');
const modal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const modalText = document.getElementById('modalText');
const closeButton = modal.querySelector('.close');

// Abrir el modal al hacer clic en una foto
photos.forEach(photo => {
    photo.addEventListener('click', () => {
        modal.style.display = 'flex'; // Mostrar modal
        modalImage.src = photo.src; // Asignar la imagen al modal
        modalText.textContent = 'Te quiero Rocío'; // Texto del modal
    });
});

// Cerrar el modal al hacer clic en la 'X'
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
