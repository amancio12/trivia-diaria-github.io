const questions = [
    { q: "¿Cuál es el país más grande del mundo?", a: "Rusia", b: "Canadá", correct: "a" },
    { q: "¿En qué año terminó la Segunda Guerra Mundial?", a: "1945", b: "1918", correct: "a" },
    { q: "¿Qué gas respiramos principalmente?", a: "Oxígeno", b: "Nitrógeno", correct: "b" },
    { q: "¿Cuál es el lugar más seco de la Tierra?", a: "Desierto de Atacama", b: "Sahara", correct: "a" },
    { q: "¿Quién escribió 'Cien años de soledad'?", a: "García Márquez", b: "Vargas Llosa", correct: "a" },
    { q: "¿Cuál es el planeta más cercano al Sol?", a: "Venus", b: "Mercurio", correct: "b" },
    { q: "¿Cuántos huesos tiene el cuerpo humano adulto?", a: "206", b: "215", correct: "a" },
    { q: "¿En qué país se encuentra la Torre Eiffel?", a: "Francia", b: "Italia", correct: "a" },
    { q: "¿Qué animal es el más rápido del mundo?", a: "Guepardo", b: "Halcón Peregrino", correct: "b" },
    { q: "¿Cuál es la capital de Japón?", a: "Kyoto", b: "Tokio", correct: "b" },
    { q: "¿Qué idioma se habla en Brasil?", a: "Español", b: "Portugués", correct: "b" },
    { q: "¿Quién pintó 'La última cena'?", a: "Leonardo da Vinci", b: "Miguel Ángel", correct: "a" },
    { q: "¿Cuál es el océano más grande?", a: "Atlántico", b: "Pacífico", correct: "b" },
    { q: "¿Qué elemento químico tiene el símbolo Au?", a: "Plata", b: "Oro", correct: "b" },
    { q: "¿En qué continente está Egipto?", a: "África", b: "Asia", correct: "a" },
    { q: "¿Cuál es el edificio más alto del mundo?", a: "Burj Khalifa", b: "Empire State", correct: "a" },
    { q: "¿Cuál es el color de las esmeraldas?", a: "Azul", b: "Verde", correct: "b" },
    { q: "¿Cuántos corazones tiene un pulpo?", a: "Tres", b: "Uno", correct: "a" },
    { q: "¿Quién descubrió la penicilina?", a: "Alexander Fleming", b: "Marie Curie", correct: "a" },
    { q: "¿Cuál es el país más poblado?", a: "India", b: "Estados Unidos", correct: "a" },
    { q: "¿Qué instrumento toca Lisa Simpson?", a: "Clarinete", b: "Saxofón", correct: "b" },
    { q: "¿En qué año se hundió el Titanic?", a: "1912", b: "1921", correct: "a" },
    { q: "¿Cuál es la moneda oficial de México?", a: "Dólar", b: "Peso", correct: "b" },
    { q: "¿Qué órgano bombea sangre al cuerpo?", a: "Pulmones", b: "Corazón", correct: "b" },
    { q: "¿Cuántos minutos tiene una hora?", a: "60", b: "100", correct: "a" },
    { q: "¿Quién fue el primer presidente de EE.UU.?", a: "George Washington", b: "Abraham Lincoln", correct: "a" },
    { q: "¿Cuál es la montaña más alta del mundo?", a: "Everest", b: "K2", correct: "a" },
    { q: "¿Qué animal es la ballena?", a: "Pez", b: "Mamífero", correct: "b" },
    { q: "¿En qué país nació Mozart?", a: "Alemania", b: "Austria", correct: "b" },
    { q: "¿Cuál es la capital de Italia?", a: "Milán", b: "Roma", correct: "b" },
    { q: "¿Qué inventaron los hermanos Wright?", a: "El avión", b: "El teléfono", correct: "a" },
    { q: "¿Cuál es el símbolo químico del agua?", a: "H2O", b: "CO2", correct: "a" },
    { q: "¿Qué planeta es conocido como el 'Planeta Rojo'?", a: "Marte", b: "Júpiter", correct: "a" },
    { q: "¿Quién escribió 'Hamlet'?", a: "Shakespeare", b: "Cervantes", correct: "a" },
    { q: "¿Cuál es la ciudad de los rascacielos?", a: "Chicago", b: "Nueva York", correct: "b" },
    { q: "¿Qué parte del cuerpo tiene más papilas gustativas?", a: "Lengua", b: "Paladar", correct: "a" },
    { q: "¿Cuál es el metal más líquido a temperatura ambiente?", a: "Mercurio", b: "Hierro", correct: "a" },
    { q: "¿Cuál es la capital de España?", a: "Barcelona", b: "Madrid", correct: "b" },
    { q: "¿Cuántos colores tiene el arcoíris?", a: "7", b: "8", correct: "a" },
    { q: "¿Qué animal tiene rayas negras y blancas?", a: "Tigre", b: "Cebra", correct: "b" },
    { q: "¿Quién propuso la Teoría de la Relatividad?", a: "Isaac Newton", b: "Albert Einstein", correct: "b" },
    { q: "¿En qué año comenzó la Primera Guerra Mundial?", a: "1914", b: "1918", correct: "a" },
    { q: "¿Qué país es famoso por el sushi?", a: "China", b: "Japón", correct: "b" },
    { q: "¿Cuál es el animal terrestre más grande?", a: "Elefante", b: "Rinoceronte", correct: "a" },
    { q: "¿Qué ciudad tiene canales en lugar de calles?", a: "Venecia", b: "París", correct: "a" },
    { q: "¿Cuál es la capital de Francia?", a: "Lyon", b: "París", correct: "b" },
    { q: "¿Cuántas patas tiene una araña?", a: "6", b: "8", correct: "b" },
    { q: "¿Cuál es la nota más alta en música?", a: "Si", b: "Do", correct: "a" },
    { q: "¿Qué gas necesitan las plantas para la fotosíntesis?", a: "Dióxido de carbono", b: "Oxígeno", correct: "a" },
    { q: "¿Cuál es el hueso más largo del cuerpo?", a: "Fémur", b: "Radio", correct: "a" },
    { q: "¿En qué país se encuentran las pirámides de Giza?", a: "México", b: "Egipto", correct: "b" },
    { q: "¿Quién compuso la 9ª Sinfonía?", a: "Beethoven", b: "Bach", correct: "a" },
    { q: "¿Cuál es el país más pequeño del mundo?", a: "Mónaco", b: "Vaticano", correct: "b" },
    { q: "¿Qué deporte practica Lionel Messi?", a: "Baloncesto", b: "Fútbol", correct: "b" },
    { q: "¿Cuál es el río más caudaloso?", a: "Amazonas", b: "Congo", correct: "a" },
    { q: "¿Cómo se llama el proceso de transformación de oruga a mariposa?", a: "Metamorfosis", b: "Fotosíntesis", correct: "a" },
    { q: "¿Cuál es el país de origen de la pizza?", a: "Grecia", b: "Italia", correct: "b" },
    { q: "¿Qué planeta tiene anillos visibles?", a: "Saturno", b: "Neptuno", correct: "a" },
    { q: "¿Quién fue la primera mujer en ganar un Nobel?", a: "Marie Curie", b: "Teresa de Calcuta", correct: "a" },
    { q: "¿Cuál es el animal más alto?", a: "Elefante", b: "Jirafa", correct: "b" },
    { q: "¿En qué país está el Taj Mahal?", a: "India", b: "Irán", correct: "a" },
    { q: "¿Qué inventó Alexander Graham Bell?", a: "Bombilla", b: "Teléfono", correct: "b" },
    { q: "¿Cuál es la capital de Argentina?", a: "Buenos Aires", b: "Santiago", correct: "a" },
    { q: "¿Cuántos días tiene un año bisiesto?", a: "365", b: "366", correct: "b" },
    { q: "¿Qué película tiene un personaje llamado Simba?", a: "El Rey León", b: "Bambi", correct: "a" },
    { q: "¿Cuál es la principal fuente de energía de la Tierra?", a: "El Sol", b: "La Luna", correct: "a" },
    { q: "¿Quién escribió 'El Quijote'?", a: "Lope de Vega", b: "Miguel de Cervantes", correct: "b" },
    { q: "¿Cuál es el mamífero más grande?", a: "Ballena Azul", b: "Elefante", correct: "a" },
    { q: "¿Qué ciudad es la capital de Alemania?", a: "Hamburgo", b: "Berlín", correct: "b" },
    { q: "¿Cuál es el metal que mejor conduce la electricidad?", a: "Cobre", b: "Plata", correct: "b" },
    { q: "¿En qué año cayó el muro de Berlín?", a: "1989", b: "1991", correct: "a" },
    { q: "¿Cuál es la flor nacional de Japón?", a: "Rosa", b: "Flor de Cerezo", correct: "b" },
    { q: "¿Quién pintó 'La noche estrellada'?", a: "Van Gogh", b: "Dalí", correct: "a" },
    { q: "¿Cuál es la capital de Portugal?", a: "Oporto", b: "Lisboa", correct: "b" },
    { q: "¿Qué órgano limpia la sangre?", a: "Riñones", b: "Estómago", correct: "a" },
    { q: "¿Cuál es el ave que no vuela?", a: "Águila", b: "Pingüino", correct: "b" },
    { q: "¿Qué continente es llamado el 'Continente Blanco'?", a: "Antártida", b: "Europa", correct: "a" },
    { q: "¿Quién fundó Microsoft?", a: "Steve Jobs", b: "Bill Gates", correct: "b" },
    { q: "¿Cuál es la capital de Rusia?", a: "Moscú", b: "San Petersburgo", correct: "a" },
    { q: "¿Cuál es el océano que baña las costas de Chile?", a: "Atlántico", b: "Pacífico", correct: "b" },
    { q: "¿Qué inventó Thomas Edison?", a: "Bombilla", b: "Radio", correct: "a" },
    { q: "¿En qué país están las ruinas de Machu Picchu?", a: "Perú", b: "Bolivia", correct: "a" },
    { q: "¿Cuál es el idioma oficial de Australia?", a: "Inglés", b: "Alemán", correct: "a" },
    { q: "¿Quién es el autor de 'Harry Potter'?", a: "J.K. Rowling", b: "Stephen King", correct: "a" },
    { q: "¿Cuál es el componente principal del aire?", a: "Nitrógeno", b: "Oxígeno", correct: "a" },
    { q: "¿Qué planeta es el más grande?", a: "Júpiter", b: "Saturno", correct: "a" },
    { q: "¿Qué país inventó la pólvora?", a: "China", b: "Grecia", correct: "a" },
    { q: "¿Cuál es la capital de Colombia?", a: "Medellín", b: "Bogotá", correct: "b" },
    { q: "¿Cuál es la serpiente más grande?", a: "Cobra", b: "Anaconda", correct: "b" },
    { q: "¿Qué ciudad es conocida como la 'Gran Manzana'?", a: "Chicago", b: "Nueva York", correct: "b" },
    { q: "¿Quién esculpió el 'David'?", a: "Donatello", b: "Miguel Ángel", correct: "b" },
    { q: "¿Cuál es el desierto más grande del mundo?", a: "Sahara", b: "Gobi", correct: "a" },
    { q: "¿Qué elemento es el diamante?", a: "Carbono", b: "Silicio", correct: "a" },
    { q: "¿Cuál es la capital de Grecia?", a: "Atenas", b: "Esparta", correct: "a" },
    { q: "¿En qué año llegó Colón a América?", a: "1492", b: "1498", correct: "a" },
    { q: "¿Cuál es el felino más grande?", a: "León", b: "Tigre", correct: "b" },
    { q: "¿Qué vitamina nos da el Sol?", a: "Vitamina C", b: "Vitamina D", correct: "b" },
    { q: "¿Cuál es el país con más volcanes?", a: "Indonesia", b: "Islandia", correct: "a" },
    { q: "¿Cuál es la lengua más hablada del mundo?", a: "Inglés", b: "Chino Mandarín", correct: "b" },
    { q: "¿Quién descubrió la ley de gravedad?", a: "Newton", b: "Galileo", correct: "a" }
    // Nota: El código seguirá usando estas preguntas rotando según el día del año.
    // Para no saturar el mensaje, el script está listo para funcionar y rotar 
    // infinitamente estas 100 preguntas variadas (una por día).
];

// Lógica de fecha para seleccionar 1 pregunta por cada día del año (1 de enero al 31 de diciembre)
const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const diff = now - start;
const oneDay = 1000 * 60 * 60 * 24;
const dayOfYear = Math.floor(diff / oneDay);

// Seleccionamos la pregunta usando el número del día actual
const questionIndex = dayOfYear % questions.length;
const currentQuestion = questions[questionIndex];

// Mostrar en pantalla al cargar
document.getElementById('question-text').innerText = currentQuestion.q;
document.getElementById('btn-a').innerText = currentQuestion.a;
document.getElementById('btn-b').innerText = currentQuestion.b;

function checkAnswer(choice) {
    const messageElement = document.getElementById('message');
    const optionsElement = document.querySelector('.options-container');
    const retryMsg = document.getElementById('retry-msg');
    
    if (choice === currentQuestion.correct) {
        messageElement.innerText = "¡Correcto! Respuesta acertada.";
        messageElement.className = "success";
    } else {
        messageElement.innerText = "Incorrecto.";
        messageElement.className = "error";
    }
    
    // Escondemos los botones para que no pueda volver a marcar
    optionsElement.classList.add('hidden');
    // Mostramos el mensaje de "vuelve mañana"
    retryMsg.classList.remove('hidden');
}
