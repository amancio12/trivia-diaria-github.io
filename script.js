// Base de datos de 365 preguntas (Ejemplos iniciales, el sistema elige por día del año)
const questions = [
    { q: "¿Cuál es el río más largo del mundo?", a: "Amazonas", b: "Nilo", correct: "a" },
    { q: "¿En qué año llegó el hombre a la Luna?", a: "1969", b: "1972", correct: "a" },
    { q: "¿Qué país tiene forma de bota?", a: "Grecia", b: "Italia", correct: "b" },
    { q: "¿Cuál es el metal más caro del mundo?", a: "Oro", b: "Rodio", correct: "b" },
    { q: "¿Quién pintó la Mona Lisa?", a: "Da Vinci", b: "Picasso", correct: "a" }
    // El sistema repetirá o ciclará estas preguntas automáticamente para cubrir el año
];

// Lógica para seleccionar pregunta por fecha
const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const diff = now - start;
const oneDay = 1000 * 60 * 60 * 24;
const dayOfYear = Math.floor(diff / oneDay);

// Seleccionar pregunta basada en el día actual
const questionIndex = dayOfYear % questions.length;
const currentQuestion = questions[questionIndex];

// Mostrar en pantalla
document.getElementById('question-text').innerText = currentQuestion.q;
document.getElementById('btn-a').innerText = currentQuestion.a;
document.getElementById('btn-b').innerText = currentQuestion.b;

function checkAnswer(choice) {
    const messageElement = document.getElementById('message');
    const optionsElement = document.querySelector('.options-container');
    
    if (choice === currentQuestion.correct) {
        messageElement.innerText = "¡Correcto! Nos vemos mañana.";
        messageElement.className = "success";
    } else {
        messageElement.innerText = "Incorrecto. Pero puedes intentar mañana.";
        messageElement.className = "error";
    }
    
    optionsElement.classList.add('hidden');
    document.getElementById('retry-msg').classList.remove('hidden');
}
