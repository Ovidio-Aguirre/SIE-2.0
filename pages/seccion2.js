// Función para agregar una nueva fila
function agregarFila() {
    const tabla = document.getElementById('tabla-alcance').getElementsByTagName('tbody')[0];
    const nuevaFila = tabla.insertRow(tabla.rows.length);
    const numColumnas = tabla.rows[0].cells.length;
    for (let i = 0; i < numColumnas; i++) {
        const nuevaCelda = nuevaFila.insertCell(i);
        nuevaCelda.contentEditable = true;
    }
}


// Función para retroceder una página en el historial del navegador
function goBack() {
    window.history.back();
}