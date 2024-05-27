// bert.js
let modelo;

// Asegúrate de que los scripts de TensorFlow.js y el modelo QnA se han cargado correctamente en tu HTML.
// <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
// <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/qna"></script>

const contextoEmprendimiento = `
El emprendimiento es el proceso de diseñar, lanzar y administrar un nuevo negocio, 
que implica la creación de planes de negocio, análisis de mercado, y estrategias financieras.
Un buen plan de negocios es crucial para establecer una empresa y alcanzar el éxito a largo plazo.
Este documento estratégico es clave para presentar tu negocio a inversores y entidades de financiamiento,
documentar tu modelo de negocio, esbozar tus proyecciones financieras y convertir esa idea de emprendimiento en una realidad.
Además, te ayuda a hacer una buena planificación estratégica de tu negocio, por lo que siempre tiene que estar actualizado.
Todos los emprendedores deben tener un buen plan de negocios antes de iniciar su negocio.
El plan de negocios será una guía para llegar desde donde estás hoy hasta dónde quieres llegar en el futuro.
Un buen plan de negocios te servirá para definir tus metas generales y cuantificarlas,
visualizar el futuro de tu negocio a corto, mediano y largo plazo, conocer el sector y la competencia,
evitar riesgos, anticipar dificultades y buscar soluciones, determinar y aprovechar oportunidades para el crecimiento de tu negocio,
comprobar la coherencia interna del proyecto, determinar y hacer correcciones para mejorar el negocio,
estudiar la viabilidad económica del proyecto y facilita la presentación de tu negocio a posibles inversores, socios, o clientes.
`;

window.onload = cargarModeloBERT;

async function cargarModeloBERT() {
    // Carga el modelo BERT para preguntas y respuestas de TensorFlow.js
    modelo = await qna.load();
    console.log('Modelo BERT cargado:', modelo);
}

document.getElementById('enviar').addEventListener('click', async() => {
    const pregunta = document.getElementById('pregunta').value.trim();
    const respuestaDiv = document.getElementById('respuesta');

    // Verifica que el modelo se haya cargado antes de intentar encontrar respuestas.
    if (modelo) {
        if (pregunta !== '') {
            try {
                respuestaDiv.textContent = 'Buscando respuesta...';
                const respuestas = await modelo.findAnswers(pregunta, contextoEmprendimiento);
                if (respuestas.length > 0) {
                    respuestaDiv.innerHTML = respuestas.map(r => `<p>${r.text}</p>`).join('');
                } else {
                    respuestaDiv.innerHTML = '<p>Lo siento, por el momento no cuento con esa información ya que estoy en un proceso de aprendizaje. Pero te recomiendo que puedas investigar la información que necesitas en algún navegador web o fuente confiable.</p>';
                }
            } catch (error) {
                console.error('Error al buscar respuestas:', error);
                respuestaDiv.innerHTML = '<p>Ha ocurrido un error al procesar tu pregunta. Por favor, inténtalo de nuevo más tarde.</p>';
            }
        } else {
            respuestaDiv.textContent = 'Por favor, escribe una pregunta.';
        }
    } else {
        console.error('El modelo BERT no se ha cargado.');
        respuestaDiv.textContent = 'El modelo BERT no está disponible en este momento. Por favor, inténtalo de nuevo más tarde.';
    }
});

// Función para retroceder una página en el historial del navegador
function goBack() {
    window.history.back();
}