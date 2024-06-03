// Función para activar comandos de voz
function startVoiceRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'es-ES';

    recognition.onresult = function(event) {
        const command = event.results[0][0].transcript.toLowerCase();
        handleVoiceCommand(command);
    };

    recognition.start();
}

function handleVoiceCommand(command) {
    if (command.includes('inicio')) {
        document.getElementById('inicio').scrollIntoView();
    } else if (command.includes('promesa de valor')) {
        document.getElementById('promesa-de-valor').scrollIntoView();
    } else if (command.includes('grupo objetivo')) {
        document.getElementById('grupo-objetivo').scrollIntoView();
    } else if (command.includes('modelos de ingresos')) {
        document.getElementById('modelos-de-ingresos').scrollIntoView();
    } else if (command.includes('contacto')) {
        document.getElementById('contacto').scrollIntoView();
    } else {
        alert('Comando no reconocido. Por favor, intente de nuevo.');
    }
}

// Activar el reconocimiento de voz cuando se carga la página
window.onload = function() {
    startVoiceRecognition();
};
