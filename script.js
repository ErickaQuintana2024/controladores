<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz: Controladores de Robot</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="quiz-container">
        <header>
            <h1>🧠 Quiz: Controladores de un Robot ⚙️</h1>
        </header>

        <div class="name-input">
            <label for="studentNameQuiz">Tu Nombre Completo:</label>
            <input type="text" id="studentNameQuiz">
        </div>

        <main id="quiz-content">
            <!-- Las preguntas se cargarán aquí -->
        </main>

        <button id="submitQuiz">Finalizar Quiz y Ver Resultado</button>

        <div id="quiz-result" class="result-area">
            <h2>Resultados</h2>
            <p id="result-name"></p>
            <p id="result-score"></p>
            <p id="result-grade"></p>
            <p class="screenshot-instructions">
                📸 <strong>Instrucción de Entrega:</strong> Toma una <strong>captura de pantalla</strong> de esta sección de resultados (donde se vea tu nombre y nota) y súbela a Google Classroom, en la tarea de Ciencias de la Computación para esta WebQuest.
            </p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
