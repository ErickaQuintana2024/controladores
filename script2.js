document.addEventListener('DOMContentLoaded', () => {
    const quizContent = document.getElementById('quiz-content');
    const submitButton = document.getElementById('submitQuiz');
    const resultArea = document.getElementById('quiz-result');
    const resultName = document.getElementById('result-name');
    const resultScore = document.getElementById('result-score');
    const resultGrade = document.getElementById('result-grade');
    const studentNameInput = document.getElementById('studentNameQuiz');

    // Definición de las preguntas y respuestas
    const questions = [
        {
            type: 'mc',
            question: '¿Cuál es la función principal de un controlador en un robot?',
            options: ['Generar energía para el robot', 'Ser la "piel" que protege al robot', 'Actuar como el "cerebro" para procesar información y tomar decisiones', 'Ser el "esqueleto" que da estructura al robot'],
            answer: 'Actuar como el "cerebro" para procesar información y tomar decisiones'
        },
        {
            type: 'mc',
            question: 'Un microcontrolador es un tipo común de controlador robótico que...',
            options: ['Requiere una computadora externa para funcionar', 'Es un sistema completo en un chip pequeño', 'Solo sirve para mover ruedas', 'No puede interactuar con sensores'],
            answer: 'Es un sistema completo en un chip pequeño'
        },
        {
            type: 'mc',
            question: 'Si un sensor de distancia detecta un obstáculo, ¿a qué componente le envía la información primero?',
            options: ['Al actuador (motor, LED)', 'Al controlador', 'A la fuente de energía', 'Directamente a otro sensor'],
            answer: 'Al controlador'
        },
        {
            type: 'mc',
            question: 'Los actuadores en un robot son controlados directamente por:',
            options: ['Los sensores', 'La estructura mecánica', 'El programa ejecutado en el controlador', 'La batería'],
            answer: 'El programa ejecutado en el controlador'
        },
        {
            type: 'mc',
            question: '¿Qué kit de los que usamos en el aula utiliza una placa que es fundamentalmente un microcontrolador programable como su controlador principal?',
            options: ['LEGO Mindstorms', 'Makeblock Ultimate', 'Arduino', 'K\'NEX Robotics (kits básicos)'],
            answer: 'Arduino'
        },
        {
            type: 'tf',
            question: 'Verdadero o Falso: Un robot puede realizar movimientos complejos sin ningún tipo de controlador, solo con sensores y actuadores.',
            answer: false
        },
        {
            type: 'tf',
            question: 'Verdadero o Falso: El "ladrillo inteligente" en los kits LEGO Mindstorms funciona como el controlador principal del robot.',
            answer: true
        },
        {
            type: 'tf',
            question: 'Verdadero o Falso: La programación que escribimos en mBlock (para Makeblock) o en el IDE de Arduino se carga directamente en los actuadores del robot.',
            answer: false // Se carga en el controlador
        },
        {
            type: 'tf',
            question: 'Verdadero o Falso: Un microprocesador es típicamente más simple y tiene menos recursos que un microcontrolador, siendo más adecuado para tareas de control sencillas.',
            answer: false // Generalmente es al revés, microprocesadores son más potentes pero requieren componentes externos adicionales.
        },
        {
            type: 'tf',
            question: 'Verdadero o Falso: La función de un controlador es procesar la entrada de los sensores y generar señales de salida para los actuadores.',
            answer: true
        },
        {
            type: 'match', // Matching 1 (Concepto - Función)
            question: 'Relaciona cada componente del sistema robótico con su función principal.',
            items: [
                { term: 'Controlador', options: ['Procesar información y tomar decisiones', 'Detectar información del entorno', 'Ejecutar una acción física'] },
                { term: 'Sensor', options: ['Procesar información y tomar decisiones', 'Detectar información del entorno', 'Ejecutar una acción física'] },
                { term: 'Actuador', options: ['Procesar información y tomar decisiones', 'Detectar información del entorno', 'Ejecutar una acción física'] }
            ],
            answers: {
                'Controlador': 'Procesar información y tomar decisiones',
                'Sensor': 'Detectar información del entorno',
                'Actuador': 'Ejecutar una acción física'
            }
        },
         {
            type: 'match', // Matching 1 (Cont.)
            question: 'Relaciona el tipo de componente de control con una característica clave.',
            items: [
                { term: 'Microcontrolador', options: ['Sistema completo en un chip', 'Requiere componentes externos como RAM/ROM', 'Solo para robots industriales'] },
                { term: 'Microprocesador', options: ['Sistema completo en un chip', 'Requiere componentes externos como RAM/ROM', 'Solo para robots industriales'] },
                { term: 'Sistema de Control', options: ['Es la integración de controlador, sensores y actuadores', 'Siempre usa inteligencia artificial', 'Solo se encuentra en robots humanoides'] }
            ],
             answers: {
                'Microcontrolador': 'Sistema completo en un chip',
                'Microprocesador': 'Requiere componentes externos como RAM/ROM',
                'Sistema de Control': 'Es la integración de controlador, sensores y actuadores'
            }
        },
         {
            type: 'match', // Matching 1 (Cont.)
            question: 'Relaciona la acción robótica simple con la señal de *salida* del controlador.',
            items: [
                { term: 'Mover un motor para avanzar', options: ['Señal a un motor para girar', 'Señal de luz detectada', 'Sonido emitido'] },
                { term: 'Encender un LED para indicar estado', options: ['Señal a un motor para girar', 'Señal para activar LED', 'Señal de distancia'] },
                { term: 'Emitir un sonido de alerta', options: ['Señal para activar un buzzer/altavoz', 'Señal de tacto', 'Posición del servo'] }
            ],
            answers: {
                'Mover un motor para avanzar': 'Señal a un motor para girar',
                'Encender un LED para indicar estado': 'Señal para activar LED',
                'Emitir un sonido de alerta': 'Señal para activar un buzzer/altavoz'
            }
        },
         {
            type: 'match', // Matching 1 (Cont.)
            question: 'Identifica la entrada típica que recibe un controlador de cada tipo de sensor.',
            items: [
                { term: 'Sensor de Distancia', options: ['Valor numérico de la distancia', 'Valor de luminosidad', 'Valor de temperatura'] },
                { term: 'Sensor de Color/Luz', options: ['Valor numérico de la distancia', 'Valor de luminosidad o color detectado', 'Valor de temperatura'] },
                { term: 'Sensor de Toque/Presión', options: ['Valor numérico de la distancia', 'Valor de luminosidad', 'Estado: presionado/no presionado'] }
            ],
             answers: {
                'Sensor de Distancia': 'Valor numérico de la distancia',
                'Sensor de Color/Luz': 'Valor de luminosidad o color detectado',
                'Sensor de Toque/Presión': 'Estado: presionado/no presionado'
            }
        },
         {
            type: 'match', // Matching 1 (Cont.)
            question: 'Relaciona el concepto con su relevancia en el contexto de controladores.',
            items: [
                { term: 'Algoritmo', options: ['Secuencia de pasos que el controlador ejecuta', 'Parte mecánica del robot', 'Tipo de sensor'] },
                { term: 'Firmware', options: ['Software de bajo nivel que se ejecuta en el controlador', 'Un tipo de motor', 'Un protocolo de comunicación'] },
                { term: 'Interrupciones', options: ['Mecanismo para que el controlador responda rápidamente a eventos externos (sensores)', 'Un tipo de engranaje', 'Una forma de energía'] }
            ],
             answers: {
                'Algoritmo': 'Secuencia de pasos que el controlador ejecuta',
                'Firmware': 'Software de bajo nivel que se ejecuta en el controlador',
                'Interrupciones': 'Mecanismo para que el controlador responda rápidamente a eventos externos (sensores)'
            }
        },
        {
            type: 'match2', // Matching 2 (Kit - Controlador Específico)
            question: 'Relaciona cada kit de robótica con el nombre común de su controlador principal.',
            items: [
                 { term: 'LEGO Mindstorms / Robot Inventor', options: ['Placa Arduino (Uno/Nano/etc.)', 'Hub Inteligente (Brick)', 'Placa Makeblock (Auriga/Orion/CyberPi)', 'No tiene un controlador específico, usa la computadora'] },
                 { term: 'Makeblock (mBot/Ultimate)', options: ['Placa Arduino (Uno/Nano/etc.)', 'Hub Inteligente (Brick)', 'Placa Makeblock (Auriga/Orion/CyberPi)', 'No tiene un controlador específico, usa la computadora'] },
                 { term: 'Arduino (Proyectos básicos)', options: ['Placa Arduino (Uno/Nano/etc.)', 'Hub Inteligente (Brick)', 'Placa Makeblock (Auriga/Orion/CyberPi)', 'No tiene un controlador específico, usa la computadora'] }
            ],
             answers: {
                 'LEGO Mindstorms / Robot Inventor': 'Hub Inteligente (Brick)',
                 'Makeblock (mBot/Ultimate)': 'Placa Makeblock (Auriga/Orion/CyberPi)',
                 'Arduino (Proyectos básicos)': 'Placa Arduino (Uno/Nano/etc.)'
            }
        },
         {
            type: 'match2', // Matching 2 (Cont.)
            question: 'Relaciona la tarea del robot con el componente de salida que el controlador activaría.',
            items: [
                 { term: 'Hacer ruido', options: ['Motor', 'Servo', 'Buzzer/Altavoz', 'Pantalla'] },
                 { term: 'Mover un brazo robótico con precisión angular', options: ['Motor', 'Servo', 'Buzzer/Altavoz', 'Pantalla'] },
                 { term: 'Mostrar información de estado', options: ['Motor', 'Servo', 'Buzzer/Altavoz', 'Pantalla'] }
            ],
             answers: {
                'Hacer ruido': 'Buzzer/Altavoz',
                'Mover un brazo robótico con precisión angular': 'Servo',
                'Mostrar información de estado': 'Pantalla'
            }
        },
         {
            type: 'match2', // Matching 2 (Cont.)
            question: 'Relaciona el kit con un *tipo* de controlador que suele usar o integrar.',
            items: [
                 { term: 'LEGO Mindstorms / Robot Inventor', options: ['Microcontrolador específico propietario', 'Microprocesador general', 'No tiene controlador integrado', 'Software de PC'] },
                 { term: 'Arduino', options: ['Microcontrolador específico propietario', 'Microprocesador general', 'No tiene controlador integrado', 'Software de PC'] },
                 { term: 'K\'NEX (kits avanzados o personalizados)', options: ['Microcontrolador específico propietario', 'Microprocesador general', 'No tiene controlador integrado o integra externos como Arduino', 'Software de PC'] } // Ajuste para K'NEX
            ],
             answers: {
                'LEGO Mindstorms / Robot Inventor': 'Microcontrolador específico propietario',
                'Arduino': 'Microcontrolador específico propietario', // Arduino boards ARE microcontrollers
                'K\'NEX (kits avanzados o personalizados)': 'No tiene controlador integrado o integra externos como Arduino'
            }
        },
         {
            type: 'match2', // Matching 2 (Cont.)
            question: 'Relaciona el concepto con la acción que realiza el controlador.',
            items: [
                 { term: 'Lectura de Sensores', options: ['Recibir datos', 'Enviar comandos', 'Ejecutar programa'] },
                 { term: 'Ejecución del Programa', options: ['Recibir datos', 'Enviar comandos', 'Ejecutar programa'] },
                 { term: 'Control de Actuadores', options: ['Recibir datos', 'Enviar comandos', 'Ejecutar programa'] }
            ],
             answers: {
                'Lectura de Sensores': 'Recibir datos',
                'Ejecución del Programa': 'Ejecutar programa',
                'Control de Actuadores': 'Enviar comandos'
            }
        },
         {
            type: 'match2', // Matching 2 (Cont.)
            question: 'Relaciona el ejemplo con el papel del controlador.',
            items: [
                 { term: 'Robot sigue línea negra', options: ['Procesa datos del sensor de color para ajustar motores', 'Simplemente mueve los motores hacia adelante', 'Emite sonidos'] },
                 { term: 'Robot evita chocar con pared', options: ['Procesa datos del sensor de distancia para detenerse o girar', 'Enciende luces de advertencia', 'Acelera hacia la pared'] },
                 { term: 'Brazo robótico levanta objeto', options: ['Recibe comando y calcula movimientos coordinados de servos', 'Espera una señal del usuario', 'Activa una alarma'] }
            ],
             answers: {
                'Robot sigue línea negra': 'Procesa datos del sensor de color para ajustar motores',
                'Robot evita chocar con pared': 'Procesa datos del sensor de distancia para detenerse o girar',
                'Brazo robótico levanta objeto': 'Recibe comando y calcula movimientos coordinados de servos'
            }
        }
    ];

    // Función para barajar arrays
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Intercambio de elementos
        }
        return array;
    }

    // Generar el HTML del quiz
    function generateQuiz() {
        let html = '';
        // Opcional: Barajar el orden de las preguntas
        // const shuffledQuestions = shuffleArray([...questions]);

        questions.forEach((q, index) => {
            html += `<div class="question" data-type="${q.type}" data-index="${index}">`;
            html += `<p>Pregunta ${index + 1}: ${q.question}</p>`;
            html += `<div class="options">`;

            if (q.type === 'mc') {
                // Opcional: Barajar opciones MC
                // const shuffledOptions = shuffleArray([...q.options]);
                q.options.forEach(option => {
                    html += `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label>`;
                });
            } else if (q.type === 'tf') {
                html += `<label><input type="radio" name="q${index}" value="true"> Verdadero</label>`;
                html += `<label><input type="radio" name="q${index}" value="false"> Falso</label>`;
            } else if (q.type === 'match' || q.type === 'match2') {
                // Opcional: Barajar el orden de los términos a relacionar
                // const shuffledItems = shuffleArray([...q.items]);
                q.items.forEach((item, itemIndex) => {
                     // Opcional: Barajar las opciones del select para cada item
                     // const shuffledItemOptions = shuffleArray([...item.options]);
                    html += `<div>${item.term}: <select name="q${index}_item${itemIndex}">`;
                    html += `<option value="">-- Selecciona --</option>`; // Opción por defecto
                    item.options.forEach(option => {
                        html += `<option value="${option}">${option}</option>`;
                    });
                    html += `</select></div>`;
                });
            }

            html += `</div></div>`;
        });
        quizContent.innerHTML = html;
    }

    // Calcular la puntuación
    function calculateScore() {
        let score = 0;
        let allAnswered = true;

        questions.forEach((q, index) => {
            const questionElement = quizContent.querySelector(`.question[data-index="${index}"]`);

            if (q.type === 'mc' || q.type === 'tf') {
                const selected = questionElement.querySelector(`input[name="q${index}"]:checked`);
                if (selected) {
                     // Para T/F, el valor es string "true" o "false", comparar con el boolean q.answer
                     const userAnswer = q.type === 'tf' ? selected.value === 'true' : selected.value;
                     if (userAnswer == q.answer) { // Usar == para comparar string/boolean en T/F
                         score++;
                     }
                 } else {
                     allAnswered = false;
                 }
            } else if (q.type === 'match' || q.type === 'match2') {
                 let matchCorrectCount = 0;
                 let itemCount = q.items.length;
                 let itemAnsweredCount = 0;

                 q.items.forEach((item, itemIndex) => {
                     const selected = questionElement.querySelector(`select[name="q${index}_item${itemIndex}"]`);
                     if (selected && selected.value !== "") {
                          itemAnsweredCount++;
                         if (selected.value === q.answers[item.term]) {
                             matchCorrectCount++;
                         }
                     }
                 });

                // Para matching, dar 1 punto solo si *todos* los ítems de esa pregunta están correctos
                if (itemAnsweredCount === itemCount) { // Asegurarse que todos los items de la pregunta de relacionar fueron respondidos
                    if (matchCorrectCount === itemCount) {
                       score++;
                    }
                } else {
                    allAnswered = false; // Si falta responder algún select en el matching
                }
            }
        });

         if (!allAnswered) {
             alert('Por favor, responde a todas las preguntas antes de finalizar el quiz.');
             return null; // Indicar que no se completó
         }


        const totalQuestions = questions.length; // Ahora son 20 preguntas, 1 punto por pregunta
        const noteSobre10 = (score / totalQuestions) * 10; // Calcular nota sobre 10

        return { score: score, grade: noteSobre10.toFixed(1), total: totalQuestions };
    }

    // Event listener para el botón de finalizar
    submitButton.addEventListener('click', () => {
        const studentName = studentNameInput.value.trim();
        if (studentName === "") {
            alert("Por favor, ingresa tu nombre completo para ver el resultado.");
            return;
        }

        const result = calculateScore();

        if (result !== null) { // Solo mostrar si se respondió todo
            resultName.textContent = `Nombre: ${studentName}`;
            resultScore.textContent = `Puntuación: ${result.score} / ${result.total} correctas`;
            resultGrade.textContent = `Nota Final: ${result.grade} / 10`;
            resultArea.style.display = 'block'; // Mostrar el área de resultados
            submitButton.style.display = 'none'; // Ocultar el botón de finalizar
            studentNameInput.disabled = true; // Deshabilitar el nombre
            // Opcional: Deshabilitar inputs del quiz para que no se cambien después de calificar
            quizContent.querySelectorAll('input, select').forEach(input => input.disabled = true);
        }
    });

    // Generar el quiz al cargar la página
    generateQuiz();
});
