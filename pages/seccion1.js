// @ts-nocheck
/**
 * @type {import('w3c-lazy-test').WritableStream}
 */

// Definir las preguntas y las opciones de respuesta
const questions = [{
        question: "¿Cuál es el tamaño de tu empresa?",
        options: ["Pequeña", "Mediana", "Grande"]
    },
    {
        question: "¿Qué tipo de productos/servicios ofreces?",
        options: ["Productos físicos", "Servicios", "Ambos"]
    },
    {
        question: "¿Quién es tu público objetivo principal?",
        options: ["Niños/adolescentes", "Adultos jóvenes", "Adultos mayores"]
    },
    {
        question: "¿En qué área geográfica operas principalmente?",
        options: ["Local", "Regional", "Nacional", "Internacional"]
    },
    {
        question: "¿Cuál es tu principal objetivo empresarial?",
        options: ["Crecimiento de ingresos", "Expansión de mercado", "Desarrollo de marca"]
    }
];

// Función para generar dinámicamente los formularios
function generateForms() {
    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML = "";

    questions.forEach((question, index) => {
        const formGroup = document.createElement("div");
        formGroup.classList.add("form-group");

        const label = document.createElement("label");
        label.textContent = question.question;

        const select = document.createElement("select");
        select.setAttribute("id", `question-${index}`);
        question.options.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.textContent = option;
            select.appendChild(optionElement);
        });

        formGroup.appendChild(label);
        formGroup.appendChild(select);
        formContainer.appendChild(formGroup);
    });

    const submitButton = document.createElement("button");
    submitButton.textContent = "Obtener resultados";
    submitButton.addEventListener("click", showResults);
    formContainer.appendChild(submitButton);
}

// Función para mostrar los resultados
function showResults() {
    const selectedOptions = [];
    questions.forEach((question, index) => {
        const select = document.getElementById(`question-${index}`);
        const selectedOption = select.options[select.selectedIndex].textContent;
        selectedOptions.push(selectedOption);
    });

    const marketResult = document.getElementById("market-result");
    const resultContainer = document.getElementById("result-container");

    // Lógica para determinar los resultados
    // Esta es una lógica de ejemplo, puedes ajustarla según tus necesidades
    const resultIndex = Math.floor(Math.random() * 5); // Genera un número aleatorio entre 0 y 4
    const markets = ["Market 1", "Market 2", "Market 3", "Market 4", "Market 5"]; // Ejemplo de resultados
    const selectedMarket = markets[resultIndex];

    marketResult.textContent = `Tu mercado objetivo es: ${selectedMarket}`;
    resultContainer.style.display = "block";
}

// Generar los formularios al cargar la página
window.addEventListener("DOMContentLoaded", generateForms);


// Función para retroceder una página en el historial del navegador
function goBack() {
    window.history.back();
}