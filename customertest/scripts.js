
function Pregunta(Id, pregunta, respuestas, correcta, categoria) {
    this.Id = Id;
    this.pregunta = pregunta;
    this.respuestas = respuestas;
    this.correcta = correcta;
    this.categoria = categoria;
}

let listaPreguntas = [];


let pregunta1 = new Pregunta(1, "¿Cuál es la capital de Francia?", ["Madrid", "Londres", "París"], 2, "Geografía");
let pregunta2 = new Pregunta(2, "¿Cuál es el río más largo del mundo?", ['Amazonas', 'Nilo', 'Yangtsé'], 1, "Geografía");
let pregunta3 = new Pregunta(3, "¿Cuál es el pico más alto de América?", ['Monte Everest', 'Monte Aconcagua', 'Monte Kilimanjaro'], 1, "Geografía");
let pregunta4 = new Pregunta(4, "¿Qué país tiene más islas en el mundo?", ["Indonesia", "Suecia", "Filipinas"], 1, "Geografía");
let pregunta5 = new Pregunta(5, "¿En qué continente se encuentra el desierto del Sahara?", ["Asia", "América", "África"], 2, "Geografía");
let pregunta6 = new Pregunta(6, "¿Cuál es el país más pequeño del mundo?", ["Mónaco", "Nauru", "Ciudad del Vaticano"], 2, "Geografía");
let pregunta7 = new Pregunta(7, "¿Qué cordillera atraviesa América del Sur?", ["Alpes", "Andes", "Himalaya"], 1, "Geografía");
let pregunta8 = new Pregunta(8, "¿Cuál es el océano más grande del mundo?", ["Atlántico", "Índico", "Pacífico"], 2, "Geografía");
let pregunta9 = new Pregunta(9, "¿Qué país no tiene salida al mar?", ["Bolivia", "Colombia", "Perú"], 0, "Geografía");
let pregunta10 = new Pregunta(10, "¿En qué país se encuentra la ciudad de Estambul?", ["Grecia", "Turquía", "Egipto"], 1, "Geografía");
let pregunta11 = new Pregunta(11, "¿Cuál es el país más grande del mundo en superficie?", ["Canadá", "China", "Rusia"], 2, "Geografía");
let pregunta12 = new Pregunta(12, "¿Cuál es la capital de Australia?", ["Sídney", "Melbourne", "Canberra"], 2, "Geografía");
let pregunta13 = new Pregunta(13, "¿Qué cordillera se encuentra entre Francia y España?", ["Alpes", "Pirineos", "Apeninos"], 1, "Geografía");
let pregunta14 = new Pregunta(14, "¿Cuál es el lago más grande del mundo?", ["Lago Superior", "Lago Victoria", "Mar Caspio"], 2, "Geografía");
let pregunta15 = new Pregunta(15, "¿Qué país tiene forma de bota?", ["Portugal", "Italia", "Grecia"], 1, "Geografía");

listaPreguntas.push(pregunta9);
listaPreguntas.push(pregunta10);
listaPreguntas.push(pregunta11);
listaPreguntas.push(pregunta12);
listaPreguntas.push(pregunta13);
listaPreguntas.push(pregunta14);
listaPreguntas.push(pregunta15);


listaPreguntas.push(pregunta1);
listaPreguntas.push(pregunta2);
listaPreguntas.push(pregunta3);

listaPreguntas.push(pregunta4);
listaPreguntas.push(pregunta5);
listaPreguntas.push(pregunta6);
listaPreguntas.push(pregunta7);
listaPreguntas.push(pregunta8);



let listaPreguntasCargadas = [...listaPreguntas];

function createModal(idModal, title, text) {
    let content = `
            <div id="${idModal}" class="myModal">
                <div class="modal-content" id="modal-content_${idModal}">
                    <span class="closeBtn" onclick="closeModal('${idModal}')">&times;</span>
                    <div class= title-content>
                    <p class="title">${title}</p>
                    </div>
                    <div class= text-content>
                    <p class="text" id="text_${idModal}">${text} </p>
                    </div>
                    <div class= button-content>
                    <button class="acceptBtn" id="accept_${idModal}" onclick="closeModal(${idModal})">Aceptar</button>
                    </div>
                </div>
            </div>`;
    return content;
}


function getButtonFullID(type, id) {
    return type + "_" + id;
}


function setText(id, text) {
    let element = document.getElementById("text_" + id);
    element.innerHTML = text;
}



function setModalWidth(id, width) {
    const content = document.getElementById("modal-content_" + id);
    content.style.width = width;
}

function setModalHeight(id, height) {
    const content = document.getElementById("modal-content_" + id);
    content.style.height = height;
}


function setMargin(id, top, right, bottom, left) {
    const content = document.getElementById("modal-content_" + id);
    content.style.marginTop = top;
    content.style.marginRight = right;
    content.style.marginBottom = bottom;
    content.style.marginLeft = left;

}


function openModal(idModal) {
    document.getElementById(idModal).style.display = "block";
}

function closeModal(idModal) {
    document.getElementById(idModal).style.display = "none";
}


function crearTemporizador(contenedor) {
    const container = document.getElementById(contenedor);

    const content = `
     <div id="myConfigModal" class="configModal">
        <div class="modal-content">
          <span class="close" onclick="closeModal('myConfigModal')">&times;</span>
          <h2>Configurar Temporizador</h2>
          <form id="timer-form">
            <label for="unit">Selecciona la unidad:</label>
            <select id="unit">
              <option value="hours">Horas</option>
              <option value="minutes">Minutos</option>
              <option value="seconds">Segundos</option>
            </select>
            <div id="time-inputs">
              <!-- Campos de entrada se agregarán aquí -->
            </div>
            <div class="slider-container">
              <label for="number-slider">Preguntas:</label>
              <input type="range" id="number-slider" min="1" max="${listaPreguntasCargadas.length}" value="${listaPreguntasCargadas.length}">
              <p>Cantidad de preguntas: <span id="slider-value">5</span></p>
            </div>
            <button type="button" class="acceptBtn" onclick="startTimer()">Iniciar</button>
            <button type="button" class="cancelBtn" onclick="closeModal('myConfigModal')">cancelar</button>
          </form>
        </div>
      </div>
        `;
    container.innerHTML = content;

    // Agregar event listeners después de agregar el contenido al DOM
    document.getElementById("unit").addEventListener("change", function () {
        const unit = this.value;
        const timeInputs = document.getElementById("time-inputs");
        timeInputs.innerHTML = ""; // Limpiar campos existentes

        let html = "";

        if (unit === "hours") {
            html += '<div class="div-input"><label for="hours">Horas:</label>';
            html += '<input type="number" id="hours" min="0" value="0"></div>';
            html += '<div class="div-input"><label for="minutes">Minutos:</label>';
            html += '<input type="number" id="minutes" min="0" value="40"></div>';
        } else if (unit === "minutes") {
            html += '<div class="div-input"><label for="minutes">Minutos:</label>';
            html += '<input type="number" id="minutes" min="0" value="40"></div>';
            html += '<div class="div-input"><label for="seconds">Segundos:</label>';
            html += '<input type="number" id="seconds" min="0" value="0"></div>';
        } else if (unit === "seconds") {
            html += '<div class="div-input"><label for="seconds">Segundos:</label>';
            html += '<input type="number" id="seconds" min="0" value="60"></div>';
        }

        timeInputs.innerHTML = html;
    });

    // Inicializar el slider y el valor mostrado
    const slider = document.getElementById('number-slider');
    const valueDisplay = document.getElementById('slider-value');
    valueDisplay.textContent = slider.value;

    slider.addEventListener('input', () => {

        valueDisplay.textContent = slider.value;

    });

    // Disparar el evento 'change' en el elemento con id 'unit'
    const unitElement = document.getElementById("unit");
    if (unitElement) {
        unitElement.dispatchEvent(new Event('change'));
    }
}

function agregarTemporizador() {
    crearTemporizador("div-modalContainer");
    openModal("myConfigModal");
}


function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
    const unit = document.getElementById("unit").value;
    let totalSeconds = 0;

    if (unit === "hours") {
        const hours = parseInt(document.getElementById("hours")?.value || 0);
        const minutes = parseInt(document.getElementById("minutes")?.value || 0);
        totalSeconds = (hours * 3600) + (minutes * 60);
    } else if (unit === "minutes") {
        const minutes = parseInt(document.getElementById("minutes")?.value || 0);
        const seconds = parseInt(document.getElementById("seconds")?.value || 0);
        totalSeconds = (minutes * 60) + seconds;
    } else if (unit === "seconds") {
        const seconds = parseInt(document.getElementById("seconds")?.value || 0);
        totalSeconds = seconds;
    }

    const sliderValue = parseInt(document.getElementById("number-slider").value);
    listaPreguntasCargadas = listaPreguntasCargadas.slice(0, parseInt(sliderValue));

    console.table(listaPreguntasCargadas);

    const timeFormatted = formatTime(totalSeconds);
    console.log("Tiempo total:", timeFormatted);

    alert("Preguntas:\n"+listaPreguntasCargadas.map(p => p.pregunta).join('\n')+"\nTiempo cronometrado:\n"+timeFormatted);
}

agregarTemporizador();
