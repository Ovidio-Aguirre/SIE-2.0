// Función para alternar la selección de una tarjeta
function toggleSelection(cardId) {
    const card = document.getElementById(`card${cardId}`);
    card.classList.toggle("selected");
}

// Función para retroceder una página en el historial del navegador
function goBack() {
    window.history.back();
}