

const bodyContacto = ` <div class="card left">
          <img src="https://github.com/escumanejosanchezlimon/imagenes/blob/main/sc-sanc.jpg?raw=true" alt="Imagen Tarjeta Izquierda">
          <div class="card-content">
              <h2 class="card-h2">Ubicación</h2>
              <p class="card-p">Limón, Barrio Sandoval al Costado del Taller de Tracasa, Oficina Un Bus amarillo Limón Limón, 70101.</p>
          </div>
      </div>
      
        <div class="card right">
          <img src="https://github.com/escumanejosanchezlimon/imagenes/blob/main/scmanejo.png?raw=true">
          <div class="card-content">
            <h2 class="card-h2">Información de contacto</h2>

            <p class="card-p ico-p" onclick="${abrirWsp.name}()">
              <img src="https://github.com/escumanejosanchezlimon/imagenes/blob/main/whatsapp.png?raw=true" alt="WhatsApp Icono" class="img-icon">
              <span id="whatsApp-span">Contáctanos por WhatsApp 8622-3009</span>
            </p>
            <p class="card-p ico-p">
              <img src="https://github.com/escumanejosanchezlimon/imagenes/blob/main/facebooico.png?raw=true" alt="Icono de Facebook" class="img-icon">
              <a href="https://www.facebook.com/escuelamanejosanchezlimon/?locale=es_LA" target="_blank" rel="noopener noreferrer">Enlace del Facebook</a>
          </p>
          

                    </div>
        </div>`;


const bodyServicios = ` <div class="card left"  id="card1">
          <h2>Preparación del examen teórico</h2>
          <ul style="list-style-type: none; padding: 0;">
            <li class="m1" style="margin-bottom: 10px;">- Curso de preparación teórica en clases virtuales.</li>
            <li class="m1" style="margin-bottom: 10px;">- Cita de la prueba teórica</li>
            <li class="m1" style="margin-bottom: 10px;">- Manual del conductor, resumen y cuestionarios de práctica.</li>
          </ul>
          
          
      </div>
      <div class="card right" id="card2">
          <h2>Preparación de la prueba práctica</h2>
          <ul style="list-style-type: none; padding: 0;">
            <li class="m2" style="margin-bottom: 10px;">- Cursos de manejo desde cero (Aprender a conducir).</li>
            <li class="m2" style="margin-bottom: 10px;">- Práctica de conos y rutas</li>
            <li class="m2" style="margin-bottom: 10px;">- Cita de la prueba práctica.</li>
            <li class="m2" style="margin-bottom: 10px;">- Trámite de permiso temporal para conducir.</li>

          </ul>      </div>


      <div class="card right"  id="card3">
        <h2>Otros servicios</h2>
        <ul style="list-style-type: none; padding: 0;">
          <li class="m3" style="margin-bottom: 10px;">- Dictamen médico para licencia..</li>
          <li class="m3" style="margin-bottom: 10px;">- Alquileres de motos <b>(A2, A3)</b> y vehículos  <b>(B1, B2, B3 y B4)</b></li>
          <li class="m3" style="margin-bottom: 10px;">- Pago de enteros y citas rápidas (Prácticas, teóricas y Homologación).</li>
        </ul> 
    </div>
    
      `;

const article1 = document.getElementById('article1');
const imgElement1 = document.getElementById('img1');
const container = document.querySelector(".container");

function irAcontacto() {


    container.innerHTML = '';
    article2.style.display = 'none';

    document.getElementById("countdown").style.display = 'none';


    if (navigator.onLine) {
        container.innerHTML = '';
        container.innerHTML = bodyContacto;
        document.getElementById('chart-container').style.display = 'none';
        document.getElementById('btn-next').style.display = 'none';
        divPreguntas.innerHTML = '';


        document.getElementById('btn-clearItem').style.display = 'none';

        container.style.display = 'flex';

        if (article1) {
            article1.style.display = 'block';
            article1.style.justifyContent = 'center';
            article1.style.alignItems = 'center';
            article1.style.textAlign = 'center';
            // article1.style.backgroundColor = '#ffffff'; // Establece el fondo en blanco
        }


        if (divExamen) {
            divExamen.style.display = 'none';
        }

        if (pTitulo) {
            pTitulo.innerHTML = "Bienvenidos a la Escuela de Manejo Sánchez";
        }

        if (parrafo) {
            parrafo.innerHTML = "En la Escuela de Manejo Sánchez, nuestra misión es formar conductores profesionales comprometidos con la seguridad vial y la excelencia en la conducción. 😊";
        }
    } else {
        let divModalContainer = document.getElementById("div-modalContainer");

        divModalContainer.innerHTML = createModal("5", `Este módulo requiere conexión a internet`, "");
        setMargin("5", "5%", "auto", "10%", "auto");
        openModal("5");

    }


}

function abrirWsp() {
    window.location.href = 'whatsapp://send?phone=86223009';
}



// Obtener el elemento <link> del favicon
if (navigator.onLine) {

    reemplazarConTexto();
}








// Función para reemplazar el texto del <h1> con nuevo texto y aplicar estilos
function reemplazarConTexto() {

    const elemento = document.getElementById('titulo-principal');
    // Establecer el nuevo contenido de texto
    elemento.innerHTML = "<p>ESCUELA DE MANEJO<br>SÁNCHEZ LIMÓN</p>"; // Reemplaza con el texto que desees
    // Aplicar estilos al texto
    elemento.style.fontSize = '24px'; // Cambiar el tamaño del texto
    elemento.style.color = 'rgb(234, 201, 13)'; // Cambiar el color del texto
    // elemento.style.fontFamily = 'Georgia, sans-serif'; // Cambiar la fuente
}

// Llamar a la función después de que el DOM se haya cargado
const cards = document.querySelectorAll('.card');


function adjustCardStyles() {

    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');

    if (card1 && card2 && card3) {
        card1.style.backgroundColor = 'rgb(244,234,234)'; // Cambia el fondo solo de la primera tarjeta
        card2.style.backgroundColor = 'rgb(158,255,62)';
        card3.style.backgroundColor = 'rgb(255,132,150)';

        if (window.innerWidth < 1065) {
            card1.style.width = '100%';
            card1.style.marginTop = '10px';
            card1.style.marginBottom = '10px';
            card2.style.width = '100%';
            card2.style.marginTop = '10px';
            card2.style.marginBottom = '10px';
            card3.style.width = '100%';
            card3.style.marginTop = '10px';
            card3.style.marginBottom = '10px';


        } else {
            card1.style.width = '28%';
            card1.style.height = '225px';
            card1.style.margin = '5px'; // Ajusta el valor según tus necesidades
            card2.style.width = '28%';
            card2.style.height = '225px';
            card2.style.margin = '5px'; // Aju
            card3.style.width = '28%';
            card3.style.height = '225px';
            card3.style.margin = '5px'; // Aju

        }
    }
}


function irAServicios() {


    article2.style.display = 'none';

    document.getElementById("countdown").style.display = 'none';
    container.innerHTML = '';
    container.innerHTML = bodyServicios;
    container.style.display = 'flex';
    document.getElementById('btn-clearItem').style.display = 'none';



    adjustCardStyles();
    document.addEventListener('DOMContentLoaded', adjustCardStyles);
    window.addEventListener('resize', adjustCardStyles);


    if (pTitulo) {
        pTitulo.innerHTML = "¡Ofrecemos los siguientes servicios!";
    }

    if (parrafo) {
        parrafo.innerHTML = "Trámites para licencia y más. Puedes consultarnos por WhatsApp <b>8622-3009<b> 📞😊";
    }
    divExamen.style.display = 'none';
    document.getElementById('chart-container').style.display = 'none';
    document.getElementById('btn-next').style.display = 'none';
    article1.style.alignItems = 'center';
    article1.style.textAlign = 'center';
    divPreguntas.innerHTML = '';
}



function logout() {


    if (confirm("¿Estás seguro de que quieres continuar?")) {
        localStorage.removeItem('preguntas');
        mainElement.innerHTML = '<h2>401 No Disponible</h2>';
        window.location.href = rutaAcceso;
    }
}
function verificarSiHaTranscurrido(fecha) {
    calcularDiferenciaHoras(fecha);
    const fechaActual = new Date(); // Fecha y hora actual
    const fechaIngresada = new Date(fecha); // Fecha ingresada o ajustada

    if (fechaIngresada < fechaActual) {
        mainElement.innerHTML = '<h2>401 No Disponible</h2>';
        window.location.href = rutaAcceso;
        localStorage.removeItem('preguntas');

    } else if (fechaIngresada > fechaActual) {
    } else {
        mainElement.innerHTML = '<h2>401 No Disponible</h2>';
        window.location.href = rutaAcceso;
        localStorage.removeItem('preguntas');

    }
}






function calcularDiferenciaHoras(dateaction) {
    // Comprobar si la fecha proporcionada es un objeto Date válido
    const ingresada = new Date(dateaction);


    // Obtener la fecha actual
    const dateactual = new Date();

    // Calcular la diferencia en milisegundos
    const diferencia = Math.abs(dateactual - ingresada);

    // Convertir la diferencia a horas (milisegundos / 1000 / 60 / 60)
    const diferenciaHoras = diferencia / (1000 * 60 * 60);

    // Verificar si la diferencia es mayor a 5 horas
    if (diferenciaHoras > 36) {
        mainElement.innerHTML = '<h2>401 No Disponible</h2>';
        window.location.href = rutaAcceso;
        localStorage.removeItem('preguntas');
        return 36; // Retornamos el valor máximo de 5 horas
    }
    return diferenciaHoras;
}



function redondearNumero(numero, decimales) {
    return Number(numero.toFixed(decimales));
}
