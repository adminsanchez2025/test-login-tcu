    

    let tituloExamen = { titulo: "Prepárate para tu examen" };
    let capituloExamen = { tema: "Todo" };
    let examen = { select: '', contadorCorrectas: 0, pregunta: null };
    
    document.addEventListener('DOMContentLoaded', function () {
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const navbar = document.getElementById('navbar');
    
        if (window.innerWidth <= 768) {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'block';
        }
    
        hamburgerBtn.addEventListener('click', function () {
            if (navbar.style.display === 'none') {
                navbar.style.display = 'block';
            } else {
                navbar.style.display = 'none';
            }
        });
    });
    
    function selectOption(selectedDiv, index) {
        let divs = document.getElementsByClassName('options' + index);
        let textoSeleccionado = '';
        for (let i = 0; i < divs.length; i++) {
            divs[i].classList.remove('selected');
            if (divs[i] === selectedDiv) {
                textoSeleccionado = (divs[i].textContent || divs[i].innerText);
                textoSeleccionado = textoSeleccionado.substring(textoSeleccionado.indexOf('.') + 1, textoSeleccionado.length).trim();
            }
        }
        selectedDiv.classList.add('selected');
        let seleccionado = listaPreguntasCargadas[index - 1].respuestas.indexOf(textoSeleccionado); // Ajustar el índice aquí
        agregarSeleccion(index, seleccionado); // Pasar el índice de la pregunta y la opción seleccionada
    }
    
    function Pregunta(Id, pregunta, respuestas, correcta, categoria) {
        this.Id = Id;
        this.pregunta = pregunta;
        this.respuestas = respuestas;
        this.correcta = correcta;
        this.categoria = categoria;
    }
    
    let listaPreguntas = [];
    let pregunta1 = new Pregunta(1, "¿Cuál de las siguientes afirmaciones del ralentí es la correcta?",
        ["Es lo que se conoce como el mínimo del vehículo",
            "El ralentí oscila entre 500 y 2200 revoluciones por minuto",
            "Es la ficha técnica del vehículo"], 0, "tema9");
    
    let pregunta2 = new Pregunta(2, "Andar con un niño menor de 5 años en motocicleta implica",
        ["Acumular 4 puntos en la licencia",
            "No acumular ningún punto",
            "Acumular 6 puntos en la licencia"], 0, "tema2");
    
    let pregunta3 = new Pregunta(3, "Se utiliza en los lugares donde no se permite adelantamiento",
        ["Línea de centro discontinua",
            "Línea de borde",
            "Linea de barrera (continua)"], 2, "tema3");
    
    
    let pregunta4 = new Pregunta(4, "Según el articulo 85, con la licencia A-2 se podrá conducir en:",
        ["Bicimotos y motocicletas de combustión interna con cilindrada inferior a los 125 centímetros cúbicos",
            "Bicimotos y motocicletas de combustión interna con cilindrada inferior a los 250 centímetros cúbicos.",
            "Bicimotos y motocicletas de combustión interna con cilindrada inferior a los 500 centímetros cúbicos"], 2, "tema2");
    
    let pregunta5 = new Pregunta(5, "¿Cuáles son las tres categorías básicas que divide el señalamiento vial?",
        ["Captaluces, gatos y peraltes",
            "Señales de prevención, reglamentación e información",
            "Señalamiento vertical, horizontal y luminoso"], 1, "tema3");
    
    
    let pregunta6 = new Pregunta(6, "Las curvas se clasifican en:",
        ["Altas y bajas",
            "Horizontales y verticales",
            "Planas y curvilineas"], 1, "tema3");
    
    
    
    let pregunta7 = new Pregunta(7, "Que carril debe dirigirse al abandonar la rotonda en la segunda y posteriores salidas",
        ["Carril central",
            "Carril externo",
            "Carril interno"], 2, "tema7");
    
    let pregunta8 = new Pregunta(8, "¿Cuál articulo se refiere específicamente al derecho a circular?",
        ["Artículo 22 de la Constitución Política",
            "Artículo 1 de la Ley de Tránsito",
            "Artículo 226 de la Ley de Tránsito"], 0, "tema2");
    
    
    let pregunta9 = new Pregunta(9, "Se utilizan en lugares donde no permiten adelantamiento y está demarcado en líneas continuas amarillas",
        ["Línea de canalización",
            "Línea de barrera",
            "Línea de bloqueo"], 1, "tema3");
    
    
    let pregunta10 = new Pregunta(10, "Cuando dos vehículos llegan a una intersección sin regulación o señalización, o con la misma señalización en sentidos opuestos, el movimiento directo tendrá prioridad.",
        ["Prioridad 1",
            "Prioridad 2",
            "Prioridad 3"], 1, "tema6");
    
    let pregunta11 = new Pregunta(11, "Según la Ley de Tránsito, en el artículo 117, se establece como obligación de los conductores de motocicletas el uso de",
        ["El casco",
            "Los guantes",
            "La rodillera"], 0, "tema2");
    
    let pregunta12 = new Pregunta(12, "La distancia entre cada uno de los integrantes de un grupo de motociclistas debe",
        ["Mantenerse sepados y en parejas",
            "Mantenerse unidos en formación escalonada",
            "Manetenerse unidos en formación lineal"], 1, "tema10");
    let pregunta13 = new Pregunta(13, "Los límites máximos de emisiones contaminantes que un vehículo puede emitir se controlan en el",
        ["CIVE (Centro de inspección vehicular)",
            "PMA",
            "COSEVI"], 0, "tema8");
    
    
    let pregunta14 = new Pregunta(14, "¿Que tipo de curva se encuentra en una cuesta?",
        ["Parabólica o horizontal",
            "Parabólica o vertical",
            "Solo Parabólica"], 1, "tema3");
    
    let pregunta15 = new Pregunta(15, "Para facilitar el tacómeto en un vehículo de gasolina consiste en mantener una oscilación entre: ",
        ["2000 y 2800 unidades rpm",
            "1500 y 2200 unidades rpm",
            "Solo 1500 rpm"], 0, "tema9");
    
    let pregunta16 = new Pregunta(16, "¿Este tipo de fuerza es importante conocer a la hora de transportar materiales líquidos?",
        ["Fuerza aerodinámica",
            "Mecánica de fluidos",
            "Fuerza centrífuga"], 2, "tema9");
    
    let pregunta17 = new Pregunta(17, "¿Cuál de los siguientes sistemas de vehículo causa intoxicación y contaminación?",
        ["Sistema de enfriamiento",
            "Sistema de lubricación",
            "Sistema de escape"], 2, "tema4");
    
    let pregunta18 = new Pregunta(18, "En caso de un accidente de tránsito, el motociclista necesita todas las protecciones porque es más",
        ["Vulnerable como vehículo a sufrir accidente y está expuesto a lesiones graves",
            "Complicado de conducir y dominar en las calles que otro tipo de vehículo",
            "Liviano y requiere mucha práctica para manejarlo"], 0, "tema10");
    
    
    let pregunta19 = new Pregunta(19, "Un tema básico de la conducción en motocicleta a la hora de frenar es",
        ["Mantener las luces encendidas",
            "Mantener todos los implementos de seguridad en uso",
            "Mantener la distancia con el vehículo que nos precede"], 2, "tema10");
    
    
    let pregunta20 = new Pregunta(20, "El catalizador y silenciador se un vehículo es parte del",
        ["Sistema de lubricación",
            "Sistema eléctrico",
            "Sistema de escape"], 2, "tema4");
    
    let pregunta21 = new Pregunta(21, "Acumular 5 o más puntos en la licencia de conducir implica para cualquier conductor",
        ["Tener que realizar un curso de sensibilización y reeducación vial",
            "Tener que renovar el documento",
            "Licencia suspendida para siempre"], 0, "tema2");
    
    let pregunta22 = new Pregunta(22, "¿factor vía y su entorno se refiere a?",
        ["La infraestructura",
            "El clima",
            "La vía pública"], 2, "tema3");
    let pregunta23 = new Pregunta(23, "Es un elemento clave parar el funcionamiento de la sociedad y a la vez causante de mucha contaminación?",
        ["La vía y su entorno",
            "Las industrias",
            "El vehículo"], 2, "tema8");
    
    let pregunta24 = new Pregunta(24, "¿Como se llama la ley que rige actualmente en materia de transito?",
        ["Ley de Tránsito por Vías Privadas Terrestres",
            "Ley de Administración Vial",
            "Ley de Tránsito por Vías Públicas, Terrestres y Seguridad Vial"], 2, "tema1");
    
    
    let pregunta25 = new Pregunta(25, "¿Cuáles modalidades posee la licencia de conducir clase B?",
        ["B-1, B-2, B-3",
            "B-1, B-2, B-3, B-4, B-5",
            "B-1, B-2, B-3, B-4"], 2, "tema2");
    
    
    let pregunta26 = new Pregunta(26, "¿Cómo se llama la regla que determina la distancia de seguridad entre un vehículo liviano y el de adelante?",
        ["Regla de 3 segundos",
            "Regla de 2 metros",
            "Regla de 2 segundos"], 2, "tema6");
    
    
    let pregunta27 = new Pregunta(27, "El freno delantero de una motocicleta es",
        ["Poco eficaz",
            "Riesgoso usarlo",
            "Eficaz"], 2, "tema10");
    
    
    let pregunta28 = new Pregunta(28, "La moto adecuada para cada conductor es la que",
        ["La que el usuario prefiera y que se sienta cómodo",
            "Se adecúa al peso y estatura del conductor",
            "Los pies deben llegar al suelo estando sentados en la moto"], 2, "tema10");
    
    
    let pregunta29 = new Pregunta(29, "¿Qué elemento de la infraestructura vial tiene como función regular el paso de las corrientes de vehículos y el sentido de las vías?",
        ["La rotonda",
            "Las intersecciones",
            "El señalamiento"], 2, "tema3");
    
    
    let pregunta30 = new Pregunta(30, "Es importar considerar la distancia de frenado en carreteras mojadas o superficies resbaladizas porque",
        ["Se reduce mucho la distancia",
            "Aumenta la reacción de vehículo",
            "Aumentan las distancias"], 2, "tema10");
    
    
    let pregunta31 = new Pregunta(31, "Según el artículo 88, ¿Qué modalidades posee la licencia de conducir clase D?",
        ["D-1, D-2, D-3 y D-4",
            "D-1 y D-2",
            "D-1, D-2 y D-3"], 2, "tema2");
    
    let pregunta32 = new Pregunta(32, "En caso de una infracción el juez de tránsito y el funcionario oficial de tránsito debe",
        ["Imponer multas a un infractor o dictar resolución administrativa judicial que  imponga algún tipo de sanción relacionada con el tránsito",
            "Establecer una serie de documentos basado en el reglamento y que posteriormente serán atendidos por el COSEVI.",
            "Establecer una serie de documentos basado en el reglamento y que posteriormente serán atendidos por el MOPT"], 0, "tema2");
    
    let pregunta33 = new Pregunta(33, "¿Quién establece el ritmo de la marcha en el motociclismo en grupo?",
        ["El más experimentado",
            "El que está mas adelante",
            "El último motociclista"], 2, "tema10");
    
    
    let pregunta34 = new Pregunta(34, "¿Que factores provocó un aumento de la tasa de accidentes de tránsito en Costa Rica durante la década de los 70 y 80?",
        ["Falta de educación en las leyes de seguridad vial",
            "Crecimiento de consumo de alcoho y estupefacientes",
            "El crecimiento vehicular significativo"], 2, "tema1");
    
    let pregunta35 = new Pregunta(35, "Otras de las ventajas de esta estructura, es que su funcionamiento hace que reduzca el tiempo de espera por parte de los usuarios.",
        ["El semáforo",
            "Las intersecciones",
            "La rotonda"], 2, "tema7");
    
    let pregunta36 = new Pregunta(36, "¿Qué otra señal tendrá prioridad de paso sobre el CEDA?",
        ["Las avenidas",
            "El semáforo",
            "El ALTO"], 2, "tema6");
    
    let pregunta37 = new Pregunta(37, "¿Cuál es el tamaño de la mancha que puede producirse al derramar un litro de aceite?",
        ["Varios Kilometros al cuadrado",
            "Una hectárea",
            "100 metros cuadrados"], 1, "tema8");
    
    let pregunta38 = new Pregunta(38, "¿Qué vehículos deben llevar siempre las luces encendidas a todas horas?",
        ["Bicimotos y motocicletas",
            "Bicimotos y UTV",
            "Bicimotos, motocicletas y UTV"], 2, "tema2");
    
    let pregunta39 = new Pregunta(39, "¿Qué vehículos deben llevar siempre las luces encendidas a todas horas?",
        ["Bicimotos y motocicletas",
            "Bicimotos y UTV",
            "Bicimotos, motocicletas y UTV"], 2, "tema2");
    let pregunta40 = new Pregunta(40, "¿El concepto de transporte unido al de servicio proporciona una idea más clara de lo que significa en carretera?",
        ["Maniobrar",
            "Conduccción defensiva",
            "Circular"], 2, "tema1");
    
    let pregunta41 = new Pregunta(41, "¿Cuáles son los tres tipos de señalamientos que regulan el tránsito?",
        ["Señales verticales, horizontales y luminosos",
            "El semáforo, demarcaciones de la calles y rótulos",
            "Señales de reglamentación, prevención e información"], 0, "tema3");
    
    let pregunta42 = new Pregunta(42, "Además de ahorrar combustibles, la óptima conservación de nuestro vehículo automotor nos dará el beneficio",
        ["Disminuir sus costos de manteniento pero su valor se reduce",
            "Conservar los componenetes para garantizar una conducción segura",
            "De manera económica al manetener su valor de mercado "], 2, "tema9");
    
    
    let pregunta43 = new Pregunta(43, "¿Qué se ve afectado en el conductor al ingerir alcohol?",
        ["Reflejos, somnolencia, tiempo de reacción, disminución de la visión y percepción",
            "Ralentización y somnolencia",
            "Disminución de los sentidos, tiempo de reacción y somnolencia"], 0, "tema5");
    
    
    let pregunta44 = new Pregunta(44, "¿Que norma es lo principal para un motociclista en la conducción nocturna?",
        ["Ver y frenar",
            "Frenar y ser visto",
            "Ver y ser visto"], 2, "tema10");
    
    
    let pregunta45 = new Pregunta(45, "Es aquel conductor descuidado, perezoso, que no revisa su vehículo y no se concentra en la conducción.",
        ["Ligereza",
            "Vanidad",
            "Negligencia"], 2, "tema5");
    
    let pregunta46 = new Pregunta(46, "Dado que la motocicleta es un vehículo de dos ruedas, esta...",
        ["No tiene puntos de apoyo",
            "tiene los mismos puntos de apoyo que un vehículo de cuatro ruedas",
            "tiene menos puntos de apoyo"], 2, "tema10");
    
    let pregunta47 = new Pregunta(47, "Si un vehículo circula por el carril externo de una rotonda y otro desea ingresar por el carril interno, ¿qué debe suceder?",
        ["Los dos tienen la misma prioridad",
            "El que ya está dentro de la rotonda y se dirige al carril externo",
            "El que está en el carril interno tendrá la prioridad"], 1, "tema7");
    
    let pregunta48 = new Pregunta(48, "¿Qué es el tiempo de recuperación que puede experimentar el conductor al conducir de noche?",
        ["Pérdida de visión temporal por encandilamiento.",
            "Pérdida de visión temporal por falta de experiencia en conducción nocturna.",
            "Pérdida de la mitad de la visión durante la noche."], 0, "tema5");
    
    let pregunta49 = new Pregunta(49, "Son todas las condiciones que van en contra del conductor al momento de manejar el vehículo",
        ["condiciones adversas",
            "condiciones ambientales",
            "condiciones mentales y anímicas"], 0, "tema3");
    
    let pregunta50 = new Pregunta(50, "¿Qué implica el tener condiciones para el manejo?",
        ["Tener todos los documentos del vehículo y del conductor al día",
            "Tener nociones básicas del funcionamiento de un vehículo.",
            "Tener las técnicas para la conducción, y la adquisición de la habilidad necesaria para conducir"], 2, "tema5");
    
    let pregunta51 = new Pregunta(51, "¿Qué tipo de choque se produce habitualmente al invadir el carril izquierdo?",
        ["Choque de frente",
            "Choque trasero",
            "Choque de lado izquierdo"], 0, "tema6");
    let pregunta52 = new Pregunta(52, "¿Qué tipo de vía se encuentra el espaldón?",
        ["Urbana",
            "Rural",
            "Urbana y rural"], 1, "tema3");
    
    
    let pregunta53 = new Pregunta(53, "¿Qué concepto se optimizará al cumplir todos los objetivos de la seguridad vial?",
        ["Circulación",
            "Fluidez",
            "Convivencia"], 2, "tema1");
    
    let pregunta54 = new Pregunta(54, "¿Qué se debe hacer al detener el vehículo de manera paralela a la acera y en pendiente?",
        ["Usar el espejo lateral para determinar si se guarda unos 15cm de la acera.",
            "Usar el espejo lateral para determinar si se guarda unos 45cm de la acera.",
            "Usar el espejo lateral para determinar si se guarda unos 60cm de la acera."], 0, "tema6");
    
    
    let pregunta55 = new Pregunta(55, "¿Cuál es la velocidad máxima a la que se debe conducir dentro de una rotonda?",
        ["30km/h",
            "25km/h",
            "40km/h"], 0, "tema7");
    
    let pregunta56 = new Pregunta(56, "¿Qué elementos conforma una vía urbana?",
        ["Calzada, caño, borde de acera y acera",
            "Calzada, espaldón, borde de acera y acera",
            "Espaldón, borde de acera y caño"], 0, "tema3");
    
    
    let pregunta57 = new Pregunta(57, "Al salir de una rotonda por la segunda salida desde el carril externo, ¿qué señal se utiliza?",
        ["Solo para salir se usa el direccional izquierdo",
            "Direccional izquierdo para entrar y salir",
            "Direccional derecho para entrar y salir"], 2, "tema7");
    let pregunta58 = new Pregunta(58, "¿Qué funciones cumplen las llantas de un vehículo?",
        ["Permite brindar maniobrabilidad en el vehiculo y seguridad",
            "Absorber impactos, transmitir la fuerza impulsora y de frenado, y soportar la carga del vehículo",
            "Permite que el resto de los sistemas del vehiculo funcionen correctamente y su funcionamiento principal es soprtar cargas."], 1, "tema4");
    
    let pregunta59 = new Pregunta(59, "¿Qué señal deberá respetarse al ingresar en una rotonda?",
        ["El CEDA",
            "Ninguna señal",
            "El ALTO"], 0, "tema7");
    
    let pregunta60 = new Pregunta(60, "¿Con qué acciones se inicia la conducción eficiente?",
        ["Seguir continuamente el manual teórico de conducción, las normas y leyes de seguridad vial.",
            "Evitar usar vehículos de gasolina y andar los documentos al día",
            "Revisar el desgastes de las llantas, afinado del motor y cambio a tiempo del aceite."], 2, "tema9");
    let pregunta61 = new Pregunta(61, "Por lo general, tienen forma rectangular y muestran un símbolo compuesto por un círculo rojo que indica o envuelve la restricción...",
        ["Señal de prevención",
            "Señal de información",
            "Señal de reglamentación"], 2, "tema3");
    
    let pregunta62 = new Pregunta(62, "¿En qué dos categorías se dividen los problemas de salud que pueden impedirnos conducir?",
        ["Leves y graves",
            "Crónicos y avanzados",
            "Permanentes o transitorios"], 2, "tema5");
    
    
    let pregunta63 = new Pregunta(63, "Al transitar por una curva se debe...",
        ["Mantener la misma velocidad en la que llegó.",
            "Mantenerse en una baja velocidad y quitar el pie del freno.",
            "Manetenerse en su carril y nunca adelantar."], 2, "tema3");
    let pregunta64 = new Pregunta(64, "El 40% de la contaminación de los ríos y lagos se debe por",
        ["Los químicos y desechos industriales",
            "Mal manejo de aguas negras",
            "El aceite de motor usado"], 2, "tema8");
    let pregunta65 = new Pregunta(65, "¿Guiar al usuario en su recorrido por una vía es una función de la seguridad vial?",
        ["Si es una función de la seguridad vial",
            "Depende de la situación",
            "No es una función de la seguridad vial"], 2, "tema3");
    
    
    let pregunta66 = new Pregunta(66, "¿Cuáles son los subsistemas principales en los que se divide el sistema eléctrico?",
        ["Sistema de arranque, de emergencia y de servcio.",
            "Sistema de alumbrado, de señalización y de carga.",
            "Sistema de arranque, de carga, de alumbrado y de servicios"], 2, "tema4");
    
    let pregunta67 = new Pregunta(67, "María va a renovar su licencia de conducir y el registro muestra que tiene 4 puntos acumulados. ¿Por cuánto tiempo le renovarán la licencia?",
        ["4 años",
            "3 años",
            "6 años"], 2, "tema2");
    
    
    let pregunta68 = new Pregunta(68, "Ante un posible accidente de tránsito, el motociclista necesita usar todas las protecciones porque...",
        ["La motocicleta es un más vehículo vulnerable así como su conductor.",
            "Al ser un vehículo de 2 llantas se requiere mejores protecciones de seguridad.",
            "Esta más expuesto al entorno que lo rodea"], 0, "tema10");
    
    let pregunta69 = new Pregunta(69, "¿Qué requisitos se solicitan para que una persona obtenga un permiso temporal de aprendizaje?",
        ["Aprobar el Curso Básico de Educación Vial y saber conducir.",
            "Aprobar el Curso Básico de Educación Vial y tener 18 años.",
            "Aprobar el Curso Básico de Educación Vial, saber leer y escribir."], 2, "tema2");
    
    let pregunta70 = new Pregunta(70, "El CEDA es una señal de...",
        ["Prevención",
            "Información",
            "Reglamentación"], 2, "tema3");
    
    
    let pregunta71 = new Pregunta(71, "En una intersección no señalizada, ¿qué prioridad tiene el giro a la izquierda?",
        ["Prioridad #1",
            "Prioridad #2",
            "Prioridad #3"], 2, "tema6");
    
    let pregunta72 = new Pregunta(72, "Es un tipo especial de intersección donde las vías se conectan mediante un anillo: ",
        ["La rotonda",
            "El cruce",
            "Avenidas y calles"], 0, "tema7");
    
    let pregunta73 = new Pregunta(73, "La horquilla y el plato de presión del vehículo forma parte del:",
        ["Sistema de embrague",
            "Sistema de dirección",
            "Sistema de suspensión"], 0, "tema4");
    
    
    let pregunta74 = new Pregunta(74, "Una característica del semaforo peatonal:",
        ["Se colocan en ambos lados de las zonas de seguridad y se complementan con un semáforo vehicular",
            "Tiene luces: verde, amarilla y roja",
            "Regula el transito vehicular y peatonal"], 0, "tema3");
    
    
    let pregunta75 = new Pregunta(75, "Los niños podrán utilizar el cinturón de tres puntos de los vehículos, con exclusión de la obligatoriedad solo si...",
        ["Su estatura sea superior a 145 cm, sentado con su cadera flexionada en ángulo de 90 grados o que su espalda esté pegada al respaldar del asiento y que sus pies apoye en totalidad al piso del vehículo.",
            "Su estatura sea superior a 120 cm, sentado con su cadera flexionada en ángulo de 90 grados o que su espalda esté pegada al respaldar del asiento y que sus pies apoye en totalidad al piso del vehículo.",
            "Su estatura sea superior a 145 cm, sentado con su cadera flexionada en ángulo de 80 grados o que su espalda esté pegada al respaldar del asiento y que sus pies apoye en totalidad al piso del vehículo."], 0, "tema4");
    
    
    
    
    let pregunta76 = new Pregunta(76, "¿Qué factores depende la resistencia por inercia de un vehículo?",
        ["La velocidad del vehículo",
            "La aerodinámica del vehículo",
            "La masa del vehículo"], 2, "tema9");
    
    let pregunta77 = new Pregunta(77, "¿Qué tipo de conducción es aquella en la que el conductor previene accidentes o situaciones peligrosas a pesar de las condiciones adversas?",
        ["Manejo técnico",
            "Conducción segura",
            "Manejo defensivo"], 2, "tema9");
    
    let pregunta78 = new Pregunta(78, "¿Qué vehículos se considera amigables al medio ambiente?",
        ["Los que han sido revisados y aprobados",
            "Los vehículos mas nuevos",
            "Los que usan combustible alternativo."], 2, "tema8");
    let pregunta79 = new Pregunta(79, "¿Cuál de las siguientes maniobras es una de las más peligrosas al estar al mando de un vehículo?",
        ["Acortar la distancia",
            "La reversa",
            "Los adelantamientos"], 2, "tema6");
    
    
    let pregunta80 = new Pregunta(80, "¿Qué autoriza la licencia de conducir tipo D-3?",
        ["La conducción de otros tipos de equipos especiales no contemplados por la licencias D-1 o D-2",
            "La conducción de tractores de llantas con oruga",
            "La conducción de tractores de llantas"], 0, "tema2");
    
    
    let pregunta81 = new Pregunta(81, "Qué requisitos debe tener un conductor el saber y poder manejar un vehículo?",
        ["Debe tener solo los documentos (vehículo y conductor)",
            "Debe manejar defensivamente y conocer bien la ruta.",
            "Debe tener las condiciones físico y psíquicas adecuadas para hacerlo."], 2, "tema5");
    
    let pregunta82 = new Pregunta(82, "¿Qué artículo de la Ley de Tránsito es el que regula los adelantamientos?",
        ["Artículo 18",
            "Artículo 22",
            "Artículo 108"], 2, "tema6");
    
    let pregunta83 = new Pregunta(83, "¿A qué tipo de señalamiento pertenecen los semáforos preventivos, vehiculares y peatonales?",
        ["Señalamiento luminoso",
            "Señalamiento verical",
            "Señalamiento horizontal"], 0, "tema3");
    let pregunta84 = new Pregunta(84, "¿Cuál es el elemento más importante dentro del equipamiento de protección del motociclista?",
        ["Los guantes",
            "El chaleco",
            "El casco"], 2, "tema10");
    let pregunta85 = new Pregunta(85, "¿Cuál es la fuerza que se opone al desplazamiento y está compuesta por la fuerza de arrastre y la de sustentación?",
        ["Fuerza centrífuga",
            "Fuerza aerodinámica",
            "Fuerza parabólica"], 1, "tema9");
    
    let pregunta86 = new Pregunta(86, "¿Cuál es el movimiento que realiza una biela en el interior del motor?",
        ["Movimiento rotativo",
            "Movimiento ascendente",
            "Movimiento descendente o alternativo"], 2, "tema4");
    
    
    let pregunta87 = new Pregunta(87, "Si la motocicleta no tiene un diseño ergonómico, ¿cuál es la posición adecuada del cuerpo del motociclista?",
        ["La que el conductor se sienta cómodo",
            "Posicion firme",
            "posicion natural"], 2, "tema10");
    
    
    
    let pregunta88 = new Pregunta(88, "Guiar los peatones es una función del",
        ["MOPT",
            "Ley de tránsito",
            "Señalamiento vial"], 2, "tema3");
    
    
    let pregunta89 = new Pregunta(89, "¿Qué tipo de señalización indica si una vía es primaria o secundaria?",
        ["Prevención",
            "Reglamentación",
            "Identificación"], 2, "tema3");
    
    
    let pregunta90 = new Pregunta(90, "¿Cómo se llama la carga mental que experimentan los conductores cuando la tarea de manejo es muy sencilla y, para cubrir la falta de exigencia mental, toman acciones que aumentan la dificultad, como acelerar la velocidad?",
        ["Vanidad",
            "Negligencia",
            "Homeostasis"], 2, "tema5");
    
    
    let pregunta91 = new Pregunta(91, "¿Qué indicador analiza los gases resultantes de la combustión?",
        ["Análisis lambda",
            "Factor recíproco",
            "Factor o sonda lambda"], 2, "tema8");
    
    let pregunta92 = new Pregunta(92, "¿Cómo se debe sentar el pasajero de una motocicleta?",
        ["Lo más separados posibles al conductor.",
            "Se siente lo más atrás que pueda.",
            "Se siente lo más adelante que pueda."], 2, "tema10");
    
    let pregunta93 = new Pregunta(93, "Qué son los contaminantes primarios del aire?",
        ["Son los gases y químicos liberarados por las industrias",
            "Son los contaminantes que expulsan el sistema de escape de los vehículos.",
            "Son los que permanecen en la atmósfera tal y como son lanzados."], 2, "tema8");
    
    let pregunta94 = new Pregunta(94, "¿Qué distancia de seguridad debemos mantener con el vehículo que está delante de nosotros cuando circulamos en motocicleta?",
        ["Distancia de 1 segundo",
            "Regla de 3 segundos",
            "Distancia de 2 segundos"], 2, "tema10");
    
    
    let pregunta95 = new Pregunta(95, "Para muchos conductores, esto se considera simplemente un extra que debe tener cualquier vehículo fabricado en cualquier parte del mundo, pero es un error que no se debe cometer.",
        ["Las direccionales",
            "El cinturón de seguridad",
            "El tacómetro"], 2, "tema9");
    
    
    let pregunta96 = new Pregunta(96, "Si dos vehículos llegan a una intersección no regulada ni señalada, o con condiciones de señalamiento iguales en sentidos opuestos, ¿qué prioridad tiene el giro a la derecha?",
        ["Prioridad #3",
            "Prioridad #2",
            "Prioridad #1"], 2, "tema6");
    
    let pregunta97 = new Pregunta(97, "¿Qué hacer para evitar las emanaciones malolientes?",
        ["Evitar conducir frecuentemente a largas distancias.",
            "Revisar y cambiar el sistema de escape en caso de que haya indicios.",
            "La solución es mantener el vehículo afinado, con anillos en buen estado, y conducir en la marcha correcta."], 2, "tema9");
    
    let pregunta98 = new Pregunta(98, "¿Cuánto monóxido de carbono, óxido de nitrógeno y plomo se respira en el casco urbano de San José?",
        ["Lo mismo que 100 g de cigarrillos",
            "La cantidad de 3 cajas de cigarrillos",
            "La cantidad de 2 cajas de cigarrillos"], 2, "tema8");
    
    let pregunta99 = new Pregunta(99, "¿Cuál es la primera medida que debemos tomar al conducir de noche en motocicleta?",
        ["asegurarse de que el freno trasero funcione correctamente",
            "Asegurarse de que los frenos funcionen correctamente",
            "Asegurarse de que las luces funcionen correctamente"], 2, "tema10");
    
    let pregunta100 = new Pregunta(100, "¿Qué condición emocional hace que el conductor no distinga las variantes de un mismo tramo de carretera?",
        ["Vanidad",
            "Exhibicionismo ",
            "Ligereza"], 2, "tema5");
    let pregunta101 = new Pregunta(101, "En motocicletas, el acompañante debe evitar hablar con el conductor, pero si es necesario, es recomendable hacerlo...",
        ["Hablando con tono de voz bajo",
            "Hablando por el lado derecho",
            "Hablando por el lado izquierdo"], 2, "tema10");
    
    
    let pregunta102 = new Pregunta(102, "¿Cuántas cajetillas de cigarrillos equivalen a los gases tóxicos que inhala un trabajador en el centro urbano de San José?",
        ["3 cajetillas",
            "1 cajetilla",
            "2 cajetillas"], 2, "tema8");
    
    
    let pregunta103 = new Pregunta(103, "¿Cuáles son los dos tipos de vía que existen?",
        ["Ciclovía y vida rural",
            "Rural y metropoltana",
            "Rural y urbana"], 2, "tema3");
    
    let pregunta104 = new Pregunta(104, "Este sistema sirve para evitar el roce entre las piezas internas del vehículo...",
        ["Sistema eléctrico",
            "Sistema de lubricación",
            "Sistema de dirección"], 1, "tema4");
    
    let pregunta105 = new Pregunta(105, "Los captaluces de color blanco, conocidos tambíen como ojos de gato, se pueden usar como complemento para",
        ["Línea transversal",
            "Línea de barrera",
            "Línea de vía"], 2, "tema3");
    
    
    let pregunta106 = new Pregunta(106, "Las mangueras y las barras forman parte del...",
        ["Sistema de lubricación",
            "Sistema de frenos",
            "Sistema de dirección"], 2, "tema4");
    
    let pregunta107 = new Pregunta(107, "Lo que se usa para medir las revoluciones por minuto (RPM) de un motor con una aguja que gira de izquierda a derecha se llama",
        ["Tacómetro analítico",
            "Tacómetro digital",
            "Tacómetro analógico"], 2, "tema9");
    
    let pregunta108 = new Pregunta(108, "Los dos tipos de líneas que dividen el tránsito en sentidos opuestos son:",
        ["Línea de centro y Línea de canalización",
            "Línea de borde y Línea de barrera",
            "Línea de centro y Línea de barrera"], 2, "tema3");
    
    let pregunta109 = new Pregunta(109, "La línea que se usa en intersecciones para guiar el giro a la izquierda y separar los carriles principales de los que continúan recto o giran a la derecha es la...",
        ["Isla de separación",
            "Línea de parada",
            "Línea de canalización"], 2, "tema3");
    
    let pregunta110 = new Pregunta(110, "Al virar, para evitar distorsiones de distancia con el punto muerto, debe:",
        ["Ir girando la cabeza mientra va acelerando.",
            "Movilizar el retrovisor hasta que se puede ver.",
            "Girar la cabeza lo necesario para ver si se aproxima vehículos."], 2, "tema6");
    
    let pregunta111 = new Pregunta(111, "¿Qué tipo de contaminación es provocada por el alumbrado público, las pantallas y publicidad?",
        ["La contaminación lumínica",
            "La contaminación calórica",
            "La contaminación sónica"], 2, "tema8");
    
    let pregunta112 = new Pregunta(112, "¿Cuál es la principal función de las señales de información?",
        ["Orientar al conductor o peatón en su recorrido por la vía, con información que puede ser de su interés y utilidad, como lugares, distancias, tipos de ruta o servicios.",
            "Advertir al conductor o peatón, la existencia real o potencial de un peligro o obstáculo.",
            "Indicar al conductor o peatón las obligaciones, prohibiciones y normativas que se debe necesariamente cumplir."], 2, "tema3");
    
    
    let pregunta113 = new Pregunta(113, "Es una señal horizontal que indica al conductor dónde debe detener el vehículo en un ALTO o un CEDA",
        ["Línea de canalización",
            "Línea transversal",
            "Línea de parada"], 2, "tema3");
    
    
    let pregunta114 = new Pregunta(114, "¿Dónde se combinan el combustible y el aire en un motor de inyección directa?",
        ["Generador de combustión",
            "Carburador",
            "Cámara de combustión"], 2, "tema4");
    
    let pregunta115 = new Pregunta(115, "¿Qué sistema del vehículo se ocupa de evacuar los gases quemados producidos por la combustión?",
        ["Sistema eléctrico",
            "Sistema de embrague",
            "Sistema de escape"], 2, "tema4");
    let pregunta116 = new Pregunta(116, "¿Cuánto debe ser el tiempo de seguimiento en segundos que los vehículos pesados deben conservar para mantener una distancia adecuada con el vehículo que va adelante?",
        ["Un segundo por cada tres metros de largo del vehículo. ",
            "Dos segundo por cada tres metros de largo del vehículo. ",
            "Un segundo por cada dos metros de largo del vehículo. "], 0, "tema6");
    
    let pregunta117 = new Pregunta(117, "¿Cómo podemos reducir las emisiones tóxicas y ahorrar dinero?",
        ["Intercambiar el aceite, regular el motor, limpiar los frenos y el sistema de escape y usar el aire acondicionador.",
            "Mantener el aire acondicionado encendido y evitar regular el motor constantemente.",
            "Mantener bien regulado el motor, reemplazar las bujías y filtros viejos y usar menos el aire acondicionado."], 2, "tema8");
    let pregunta118 = new Pregunta(118, "¿Qué dispositivo señala si los sistemas del vehículo están funcionando correctamente o presentan fallos?",
        ["Panel de control",
            "Sistema eléctrico",
            "Panel de instrumentos"], 2, "tema4");
    let pregunta119 = new Pregunta(119, "Lograr la buena conducción así como una buena selección del vehículo de acuerdo al tipo de operación que se requiera es una facilidad que el conductor puede obtener",
        ["Usando el odómetro",
            "Usando el embrague eficientemente",
            "Usando el diagrama de velocdades"], 2, "tema9");
    
    let pregunta120 = new Pregunta(120, "Para ejecutar correctamente una maniobra de adelantamiento, lo primero que se debe hacer es verificar es",
        ["Ver que no haya vehículos circulando en altas velocidades",
            "Ver que haya una señal de información",
            "Ver que no exista prohibición"], 2, "tema6");
    
    
    let pregunta121 = new Pregunta(121, "¿Cuál de las siguientes condiciones emocionales lleva al conductor a intentar demostrar poco corrientes, como conducir con una sola mano?",
        ["Negligencia",
            "Temeridad",
            "Exhibicionismo "], 2, "tema5");
    
    let pregunta122 = new Pregunta(122, "¿Qué sistema se encargará de reducir al mínimo las emanaciones de gases y hacer que el motor sea más amigable con el medio ambiente?",
        ["sistema válvulas de presión",
            "sistema de escape",
            "sistema de control de emisiones"], 2, "tema8");
    
    let pregunta123 = new Pregunta(123, "¿Cómo se llama la fuerza que se opone a un cambio en el desplazamiento de un vehículo?",
        ["Resistencia aerodinámica",
            "Resistencia por fricción",
            "Resistencia por inercia"], 2, "tema9");
    
    let pregunta124 = new Pregunta(124, "Cuando nos aproximamos en una motocicleta a áreas con mucho tráfico, intersecciones o cualquier situación de riesgo, ¿qué posición debemos adoptar?",
        ["En la posición que se sienta cómodo",
            "Posición natural",
            "Manos y pies sobre los frenos"], 2, "tema10");
    
    
    let pregunta125 = new Pregunta(125, "El sistema de amortiguación y suspensión permite:",
        ["resistir el peso establecido del fabricante y que en un accidente las implicaciones sean las mínimas.",
            "mantener el equilibrio del vehículo y como soporte de los elemento del vehículo.",
            "brindar comodidad a los ocupantes del vehículo y permite una mayor estabilidad."], 2, "tema4");
    
    let pregunta126 = new Pregunta(126, "¿Qué se debe hacer cuando un grupo de motociclistas está compuesto por 4 o más integrantes?",
        ["Bajar la velocidad e ir de manera escalonada",
            "Divídalo en grupos de cuatros",
            "Dividirlo en dos o más grupos pequeños."], 2, "tema10");
    
    let pregunta127 = new Pregunta(127, "¿En qué año se publicó oficialmente el primer Código de Circulación en Costa Rica?",
        ["1979",
            "1912",
            "1920"], 2, "tema1");
    let pregunta128 = new Pregunta(128, "Las zonas de estacionamiento son...",
        ["Línea blancas paralelas y discontinuas en zonas de parqueo.",
            "Línea continuas amarillas utilizadas para delimitar áreas especificas de estacionamiento en la calzada.",
            "Línea blancas utilizadas para delimitar áreas especificas de estacionamiento en la calzada."], 2, "tema3");
    let pregunta129 = new Pregunta(129, "¿Qué elemento forma parte del subsistema de carga?",
        ["La batería",
            "Las mangueras",
            "El alternador"], 2, "tema4");
    let pregunta130 = new Pregunta(130, "Al conducir una motocicleta entre filas de vehículos, es importante para el pasajero...",
        ["Mantener las vista en ambos lados y ser precavido",
            "Mantener los pies alejadas del tubo de escape y tener los brazos estirados",
            "Mantener los pies alejadas del tubo de escape y no abrirlas mucho para evitar posibles lesiones."], 2, "tema10");
    
    let pregunta131 = new Pregunta(131, "Aprovecha la energía de los gases resultantes de la combustión",
        ["Electro carburador",
            "Turbo carburador",
            "Turbo cargador"], 2, "tema9");
    
    let pregunta132 = new Pregunta(132, "¿Cúal es la mezcla ideal entre aire y combustible que establece el factor lambda?",
        ["14,7 gramos de gasolina por cada gramo de aire",
            "147 gramos de aire por cada gramo de combustible",
            "14,7 gramos de aire por cada gramo de combustible"], 2, "tema8");
    let pregunta133 = new Pregunta(133, "Es una línea blanca transversal a la vía:",
        ["Línea de canalización",
            "Línea transversal",
            "Línea de parada"], 2, "tema3");
    
    let pregunta134 = new Pregunta(134, "¿Cuáles son los tres tipos de señalamiento luminosos?",
        ["el semáforo, captaluces blancas y captaluces rojas.",
            "el semáforo vehicular, semáforo peatonal y los captaluces.",
            "El semáforo vehicular, semáforo peatonal y la señal luminosa informativa."], 2, "tema3");
    
    let pregunta135 = new Pregunta(135, "Es una señal horizontal consistente en dos líneas paralelas blancas, transversales a la vía, que facilitan el cruce en una calle de menor afluencia peatonal.",
        ["Zona de peatones",
            "Zona de seguridad",
            "Zona de paso"], 2, "tema3");
    
    let pregunta136 = new Pregunta(136, "¿Qué tipo de contaminación causa el ruido del tránsito denso en las áreas urbanas?",
        ["Contaminación aérea",
            "Contaminación auditiva",
            "Contaminación sónica."], 2, "tema8");
    
    
    let pregunta137 = new Pregunta(137, "¿El concepto de transporte es?",
        ["La acción de desplazarse o trasladarse en el tráfico vehicular.",
            "La acción de circular en una zona.",
            "La acción de desplazarse o trasladarse de un lugar a otro."], 2, "tema1");
    
    let pregunta138 = new Pregunta(138, "¿Qué acción causa daños en los inyectores o bujías de un vehículo y genera depósitos excesivos de carbón?",
        ["Conducir el vehículo a muy baja velocidad.",
            "Poner el vehículo en movimiento en frío.",
            "Calentar el motor sin ponerlo en movimiento."], 2, "tema9");
    
    
    let pregunta139 = new Pregunta(139, "¿Cuál de los siguientes objetivos busca la seguridad vial entre otros",
        ["Eliminar los factores principales de los accidentes (prevención de accidentes).",
            "Disminuir los daños a personas en la vía pública.",
            "Disminuir los daños a personas y bienes en la vía pública (prevención de accidentes)."], 2, "tema1");
    
    let pregunta140 = new Pregunta(140, "¿A qué distancia debe cambiarse la luz alta por la corta al cruzarse con otro vehículo en línea recta o antes de entrar a una curva?",
        ["A los 150 metros",
            "A los 70 metros",
            "A los 100 metros"], 2, "tema5");
    
    let pregunta141 = new Pregunta(141, "¿De qué sistema forma parte el silenciador?",
        ["Sistema de embrague",
            "Sistema de sonido",
            "Sistema de escape"], 2, "tema4");
    
    
    let pregunta142 = new Pregunta(142, "¿Cuándo se puede usar la luz alta en una motocicleta?",
        ["Cuando está en una vía de solo un sentido.",
            "Cuando sea necesario en zonas de poca iluminación.",
            "Cuando no esté detrás de un vehículo o no venga uno de frente."], 2, "tema10");
    
    let pregunta143 = new Pregunta(143, "Se podrá controlar de forma técnica la potencia del motor si hace un buen uso de su conocimiento sobre...",
        ["Los sistemas del vehículo.",
            "Fuerzas de desplazamiento.",
            "Fuerzas que intervienen en el desplazamiento."], 2, "tema9");
    let pregunta144 = new Pregunta(144, "Las principales secciones en una zona rural son:",
        ["El borde de acera, cuneta y espaldón",
            "La calzada, caño y espaldón",
            "La calzada, espaldón y cuneta"], 2, "tema3");
    
    
    let pregunta145 = new Pregunta(145, "¿Como debería ser un grupo de motociclistas?",
        ["Debe ser de un máximo de 10 integrantes",
            "De cualquier tamaño pero escalonada",
            "Debe ser pequeño"], 2, "tema10");
    
    let pregunta146 = new Pregunta(146, "Si dos vehículos llegan a una intersección no regulada ni señalada, ¿qué maniobra tiene la segunda prioridad?",
        ["Giro a la derecha",
            "Movimiento directo",
            "Giro a la izquierda"], 1, "tema6");
    
    
    let pregunta147 = new Pregunta(147, "¿Está facultado un sancionador para multar a un conductor que circula en contra vía?",
        ["Depende de las circunstancias",
            "No puede imponer la infracción",
            "Si puede imponer en caso de infracción"], 2, "tema2");
    
    let pregunta148 = new Pregunta(148, "Los motociclistas sin experiencia deben ir",
        ["Inmediatamente delante de los mas experimentados.",
            "Inmediatamente en el centro del grupo.",
            "Inmediatamente detrás del líder."], 2, "tema10");
    
    let pregunta149 = new Pregunta(149, "Los pistones también son llamados como...",
        ["Émbolos",
            "Alternadores",
            "Cilindros"], 0, "tema4");
    
    
    let pregunta150 = new Pregunta(150, "Para conducir de manera segura sobre superficies resbaladizas en una motocicleta, se debe...",
        ["Tener el control de todas las fuerzas del desplazamiento",
            "Mantener las luces altas",
            "Reducir la velocidad"], 2, "tema10");
    
    let pregunta151 = new Pregunta(151, "Consiste en láminas ubicadas en postes o lugares elevados y generalmente son placas metálicas de aluminio u otro material, colocadas en postes de metal o madera",
        ["Señalamiento horizontal",
            "Señales de rótulos",
            "Señalamiento vertical"], 2, "tema3");
    
    let pregunta152 = new Pregunta(152, "¿Qué requisitos debe cumplir el vehículo de un conductor con un impedimento permanente?",
        ["Debe contar con el complemento necesario.",
            "Debe contar con un dictamen especial que justifique el impedimiento.",
            "Debe estar suplida a adaptciones de su condición especial."], 2, "tema5");
    
    let pregunta153 = new Pregunta(153, "¿Cuál es la disciplina que se encarga de estudiar y aplicar acciones y mecanismos para asegurar el buen funcionamiento de la circulación y prevenir los accidentes de tránsito?",
        ["Ley de transito",
            "Accidentología vial",
            "Seguridad vial"], 2, "tema1");
    let pregunta154 = new Pregunta(154, "La variación anual en ningún caso será mayor al...",
        ["24%",
            "7%",
            "14%"], 2, "tema12");
    
    
    let pregunta155 = new Pregunta(155, "¿Qué es la resistencia al rodamiento?",
        ["El resultado de la masa del vehículo por su velocidad.",
            "La fuerza aerodinámica a causa de las velocidades del viento.",
            "La fricción resultante del contacto con las llantas y la superficie de rodamiento o calzada."], 2, "tema9");
    
    let pregunta156 = new Pregunta(156, "¿Con qué se paga la importación de los derivados del petróleo?",
        ["Con bonos y fondos que hay en el banco mundial.",
            "Con los dólares generados por importación de productos.",
            "Con los dólares generados por exportación de productos."], 2, "tema");
    
    let pregunta157 = new Pregunta(157, "se da por exceso de ruido, la radiación, desechos sólidos, reacciones químicas y las partículas lanzadas por los automotores.",
        ["Deterioro de la capa de ozono",
            "Deforestación",
            "Contaminación ambiental"], 2, "tema8");
    
    let pregunta158 = new Pregunta(158, "Las señales ubicadas al lado derecho de la vía con anticipación suficiente al peligro potencial son señales de:",
        ["Información",
            "Reglamentación",
            "Prevención"], 2, "tema3");
    
    
    let pregunta159 = new Pregunta(159, "Una de las claves para ser competitivo en la industria y el ejercicio del transporte actual, consiste en",
        ["Modernizar y mejorar estrategias comerciales que puedan traer innovación al país.",
            "Utilizar fuentes de energía renovables, alternativas y amigables al medio ambiente.",
            "Reducir los costos de operación y reduciendo los costos en mantenimiento."], 2, "tema9");
    
    
    let pregunta160 = new Pregunta(160, "El alcohol es incompatible con el manejo de un vehículo debido a que:",
        ["Disminuye la visión y el tiempo de reacción",
            "Aumenta el estado de ánimo y crea un estado de euforia.",
            "Aumenta el tiempo de reacción y crea un estado de euforia falso."], 2, "tema5");
    let pregunta161 = new Pregunta(161, "¿Qué puede hacer el conductor de un vehículo que está en el carril externo derecho de una rotonda?",
        ["Tiene que esperar a que todos los vehículos salgan del carril interno antes de entrar.",
            "Puede ingresar y salir solo en la segunda salida.",
            "Puede ingresar y salir en la primera o segunda salida."], 2, "tema7");
    let pregunta162 = new Pregunta(162, "¿Cuáles subsistemas está formado el sistema de frenos de un vehículo?",
        ["El freno delantero y el freno de mano",
            "El freno de servicio y el freno trasero",
            "El freno de servicio y de emergencia"], 2, "tema4");
    let pregunta163 = new Pregunta(163, "Es cuando un vehículo pierde su posición dentro de la calzada, cayendo de lado o virando sobre su propio eje:",
        ["Vuelco",
            "Atropello",
            "Accidente de tránsito"], 0, "tema6");
    
    let pregunta164 = new Pregunta(164, "¿Cuál es la fuerza que influye en el movimiento de un vehículo en el aire?",
        ["Fuerza aeroestática",
            "Fuerza de desplazamiento",
            "Fuerza aerodinámica."], 2, "tema9");
    let pregunta165 = new Pregunta(165, "Se pueden utilizar como complemento sobre esta línea captaluces de...",
        ["Color amarillo",
            "Color blanco",
            "Color rojo"], 1, "tema3");
    
    let pregunta166 = new Pregunta(166, "¿A qué se refiere el término ralentí?",
        ["Son los elementos del vehículos con funciones especiales para medir las revoluciones por minuto.",
            "Los datos que muestra el panel del conductor.",
            "El estado del vehículo cuando no está siendo acelerado por el conductor."], 2, "tema9");
    
    let pregunta167 = new Pregunta(167, "¿Cómo se llama el análisis que determina si un conductor ha consumido alcohol?",
        ["Alcoholimetría ",
            "Test de alcohol ",
            "Esometría"], 0, "tema5");
    let pregunta168 = new Pregunta(168, "¿Cuáles son las fuerzas que oponen en el desplazamiento?",
        ["Fuerza centrífuga, cinética, por pendiente, de rodamiento y potencial.",
            "Fuerza térmica, aeroestática, de fricción y cinética",
            "Fuerza centrífuga, aerodinámica, por pendiente, de rodamiento y por inercia."], 2, "tema9");
    
    let pregunta169 = new Pregunta(169, "¿Cuáles son los requisitos para obtener la licencia de tipo C?",
        ["Para obtener una licencia de tipo C, es necesario tener una licencia de clase B con al menos un año de antigüedad y haber completado el curso básico de educación vial para transporte público.",
            "Para obtener una licencia de tipo C, es necesario tener una licencia de clase B con al menos dos años de antigüedad y haber completado el curso básico de educación vial para transporte público.",
            "Para obtener una licencia de tipo C, es necesario tener una licencia de clase B con al menos tres años de antigüedad y haber completado el curso básico de educación vial para transporte público."], 2,
        "tema2");
    
    let pregunta170 = new Pregunta(170, "Cualquier conductor que maneje con una concentración de alcohol en sangre de 0,50 hasta 0,75 gramos por litro se le aplicará una sanción de tipo:",
        ["Procede como délito",
            "Infracción de categoría B con 4 puntos",
            "Infracción de categoría A con 6 puntos"], 2, "tema2");
    
    let pregunta171 = new Pregunta(171, "La energía generada por un motor de combustión interna produce una fuerza que se transmite a los componentes denominados:",
        ["Biela y cigüeñal",
            "Cables y barra",
            "Fibra y cigüeñal"], 0, "tema4");
    
    let pregunta172 = new Pregunta(172, "La acumulación de 5 a 8 puntos en la licencia de conducir resultará en que el conductor, al renovarla...",
        ["Su validez será por 6 años",
            "Su validez será por 3 años",
            "Su validez será por 4 años"], 2, "tema2");
    
    let pregunta173 = new Pregunta(173, "la Ley de mano derecha debe aplicarse en una intersección cuando...",
        ["Se encuentra presenta la autoridad",
            "No existe ninguna autoridad y señal horizontal",
            "No existe ninguna autoridad y tipo de señalamiento"], 2, "tema6");
    
    
    let pregunta174 = new Pregunta(174, "Su propósito es proporcionar soporte lateral al pavimento, facilitar el tránsito de peatones y crear espacios para emergencias y estacionamiento de vehículos.",
        ["Calazada",
            "Acera",
            "Espaldón"], 2, "tema3");
    let pregunta175 = new Pregunta(175, "La distancia en un grupos de motocicletas debería ser...",
        ["En grupos de parejas y con un margen de seguridad de preferencia.",
            "En formación escalonada, mantenerse separados y con un margen adecuado de seguridad.",
            "En formación escalonada, mantenerse unidos y con un margen adecuado de seguridad."], 2, "tema10");
    
    let pregunta176 = new Pregunta(176, "¿Cuál es la función del CEDA?",
        ["Disminuir la velocidad y detener el vehiculo en caso de que solo haya peatones.",
            "Detener el vehículo y contar 6 segundos antes de volver arrancar.",
            "Reducir la velocidad y solo detener en caso de que llegue un vehículo."], 2, "tema6");
    
    let pregunta177 = new Pregunta(177, "¿En qué condiciones debe estar el vehículo para revisarlo?",
        ["Debe estar encendido y colocar los implementos de seguridad necesarios.",
            "El vehículo apagado y en zona sin peatones.",
            "El vehículo apagado y en terreno plano."], 2, "tema4");
    
    let pregunta178 = new Pregunta(178, "Condición emocional en la que el conductor se fija en una idea que lo aparta su mente de la conducción",
        ["La negligencia",
            "La ligereza",
            "La distracción "], 2, "tema5");
    
    let pregunta179 = new Pregunta(179, "Las condiciones de lluvia suelen provocar muchos accidentes. ¿Qué medidas podemos tomar para evitar este problema?",
        ["Usar las luces bajas y bajar la velocidad",
            "Renovar las llantas cada 24 meses",
            "Limpiar el parabrisas y disminuir la velocidad."], 2, "tema3");
    
    let pregunta180 = new Pregunta(180, "¿A que se refiere con 'pie de pluma' y 'pie de plomo'?",
        ["Un forma de referirse los casos de reacción cuando frenamos y aceleramos.",
            "A la fuerza que ejercemos en el freno con el pie.",
            "A la fuerza que ejercemos en el acelerador con el pie"], 2, "tema9");
    
    let pregunta181 = new Pregunta(181, "Es uno de los principales enemigos del motociclista...",
        ["El sol",
            "La lluvia",
            "El agua"], 2, "tema10");
    
    
    let pregunta182 = new Pregunta(182, "¿Mediante qué figura se representa a la trilogía vial?",
        ["Rectángulo",
            "Círculo",
            "Triángulo"], 2, "tema1");
    
    let pregunta183 = new Pregunta(183, "¿Qué requisitos generales se establecen en el artículo 32 para que un vehículo automotor pueda circular?",
        ["Es necesario que el conductor haya cumplido los 18 años, saber leer, escribir, tener la licencia adecuada según el tipo de vehículo a conducir y disponer de todos los dispositivos de seguridad requeridos. ",
            "Para poder circular, el vehículo debe contar con requisitos ya sea todos los implementos de seguridad vial solicitado por MOPT y también de todos los documentos renovados con el COSEVI.",
            "Para poder circular, un vehículo automotor debe contar con requisitos como parabrisas delantero y trasero, volante, cinturones de seguridad, dispositivos proyectores de luces e indicador de velocidad en km/h, entre otros."], 2, "tema2");
    
    let pregunta184 = new Pregunta(184, "Se refiere a toda aquella obra realizada por el hombre para facilitar la circulación de vehículos y personas...",
        ["Calles, carreteras y puentes",
            "Elementos de circulación",
            "Infraestructura vial"], 2, "tema3");
    let pregunta185 = new Pregunta(185, "Se refiere a toda aquella obra realizada por el hombre para facilitar la circulación de vehículos y personas...",
        ["Calles, carreteras y aceras",
            "Elementos de circulación",
            "Infraestructura vial"], 2, "tema3");
    
    let pregunta186 = new Pregunta(186, "Facilita la gestión de la aceleración y la potencia del motor dentro del rango óptimo para una conducción económica y eficiente.",
        ["El velocímetro",
            "El RPM",
            "El tacómetro"], 2, "tema9");
    
    
    let pregunta187 = new Pregunta(187, "¿Cuándo ocurren la mayoría de los accidentes de tránsito?",
        ["En los diás festivos",
            "Los fines de semana",
            "En la noche"], 2, "tema5");
    
    
    let pregunta188 = new Pregunta(188, "¿A qué sistema del vehículo pertenecen la bomba, el aceite y el tubo de distribución?",
        ["Sistema de embrague",
            "Sistema de enfrimiento",
            "Sistema de lubricación"], 2, "tema4");
    
    
    
    let pregunta189 = new Pregunta(189, "¿Cómo se llama el lugar donde convergen dos o más vías?",
        ["Vía de circulación",
            "Cruce vial",
            "Intersección"], 2, "tema3");
    
    
    let pregunta190 = new Pregunta(190, "¿Cómo debe ser la velocidad durante la conducción nocturna?",
        ["La velocidad debe mantenerse igual pero debemos conducir con cautela.",
            "Debe aumentar un poco más la velocidad si lo camparamos con el del día",
            "Debe ser la mitad de la que se usa en el día."], 2, "tema5");
    
    
    
    let pregunta191 = new Pregunta(191, "¿Cuáles son los elementos componen el tránsito?",
        ["Lase señales de tránsito, la infraestructura vial y las personas.",
            "Las calles, el vehículo y el las personas.",
            "El ser humano. el vehículo, la vía y su entorno."], 2, "tema1");
    
    
    
    let pregunta192 = new Pregunta(192, "¿En qué año circuló por San José el primer automóvil?",
        ["1914",
            "1920",
            "1912"], 2, "tema1");
    
    let pregunta193 = new Pregunta(193, "Para ser un buen conductor que significa mucho más que saber maniobrar el vehículo se necesitan condiciones fundamentales que son",
        ["Tener licencia y conocer la Ley de Tránsito.",
            "Saber mecánica y de manejo defensivo.",
            "Saber maniobrar el vehículo y mantener una actitud, conciencia y postura adecuadas."], 2, "tema5");
    
    
    let pregunta194 = new Pregunta(194, "La presencia de captaluces en la demarcacion horizontal facilita al conductor...",
        ["La conducción con vista panorámica de la vía y el riesgo",
            "Una conducción segura con menor riesgo presente",
            "La conducción segura con menor riesgo de accidente"], 2, "tema3");
    
    let pregunta195 = new Pregunta(195, "Una determinada potencia desarrollada por el motor de un vehículo de transporte puede transformarse en...",
        ["Solo capacidad de carga sin ninguna velocidad",
            "Determinada velocidad sin capacidad de carga",
            "Determinada velocidad o capacidad de carga"], 2, "tema9");
    
    
    let pregunta196 = new Pregunta(196, "Una norma de circulación que ayuda al peatón a hacerse visible cuando circula bajo la lluvia, neblina y de noche es...",
        ["El uso de chaleco o ropa oscura.",
            "El uso de colores y ropa no llamativos,",
            "Usar una linterna encendida o algún material reflectivo."], 2, "tema6");
    
    
    let pregunta197 = new Pregunta(197, "Aquel conductor que permita que niños menores de 12 años que midan menos de un metros cuarenta y cinco viaje sin los dispositivos de retención establecidos se expone",
        ["A la acumulación de seis puntos en su licencia de conducir.",
            "A la acumulación de dos puntos en su licencia de conducir.",
            "A la acumulación de cuatro puntos en su licencia de conducir."], 2, "tema2");
    
    
    let pregunta198 = new Pregunta(198, "Es el contacto que tiene el conductor con el medio ambiente que le rodea, a través de los sentidos, lo anterior se refiere al proceso de la conducción llamado...",
        ["Intelección",
            "Volición",
            "Percepción"], 2, "tema5");
    
    
    
    let pregunta199 = new Pregunta(199, "¿A qué es igual el factor vía y su entorno?",
        ["Al clima",
            "Al medio ambiente",
            "A la vía pública"], 2, "tema3");
    let pregunta200 = new Pregunta(200, "¿Quienes están exentos de utilizar implementos de tipo silla de seguridad?",
        ["Transporte estudiantil",
            "Transporte Pick-Up",
            "Taxis"], 2, "tema4");
    
    let pregunta201 = new Pregunta(201, "¿Cuál de las siguientes afirmaciones sobre la zona verde es correcta?",
        ["Permite que se conozcan los diferentes elementos que intervienen en la conservación del ambiente.",
            "Permitirá que el medio y el hombre se interrelacionen",
            "Es el área de funcionamiento óptimo del motor"], 2, "tema9");
    let pregunta202 = new Pregunta(202, "El precio de los combustibles, diésel o gasolina, siempre tenderá al alza debido a las variaciones...",
        ["Debido a la deuda externa",
            "Debido a la demanda y consumo",
            "Debido a la oferta y demanda"], 2, "tema6");
    
    let pregunta203 = new Pregunta(203, "Se utiliza para facilitar el cruce de peatones en la vía...",
        ["Líneas de canalización",
            "Marcas en el espaldón",
            "Zonas de paso peatonal"], 2, "tema3");
    
    let pregunta204 = new Pregunta(204, "Hay dos tipos, mecánica e hidráulica. ¿A qué sistema del vehículo hace referencia?",
        ["Sistema de frenos",
            "Sistema de embrague",
            "Sistema de dirección"], 2, "tema4");
    
    let pregunta205 = new Pregunta(205, "El IPC actualiza el monto de las multas al 30 de junio de cada año. Dicho aumento es siempre menor al...",
        ["Diez por ciento",
            "Cuatro por ciento",
            "Catorce por ciento"], 2, "tema2");
    
    
    let pregunta206 = new Pregunta(206, "La conducción de vehículos de carga pesada involucra tanto a sus operarios como a otros conductores con el fin de que...",
        ["Causar un efecto impulsador",
            "Intimidar al vehículo liviano",
            "Se desempeñen de manera segura"], 2, "tema6");
    
    
    let pregunta207 = new Pregunta(207, "Licencia que autoriza conducir triciclo y cuatriciclo, cuyo cilindraje de motor no supere 250 cc.",
        ["Licencia tipo A-3",
            "Licencia tipo A-2",
            "Licencia tipo A-1"], 2, "tema2");
    
    
    let pregunta208 = new Pregunta(208, "Las superficies de mala tracción para la motocicleta son",
        ["Fuerza centrifuga y la resistencia por pendiente",
            "Curvas verticales y horizontales",
            "El pavimento mojado y caminos de lastre"], 2, "tema10");
    
    let pregunta209 = new Pregunta(209, "¿Cómo se denomina la ley 5930?",
        [" Ley de tránsito por vías públicas y terrestres",
            "Ley de vías terrestres",
            "Ley de tránsito"], 2, "tema3");
    
    
    let pregunta210 = new Pregunta(210, "En el adelantamiento, luego de avanzar sobre el carril izquierdo y rebasar, siempre se debe...",
        ["Volver al carril derecho sin necesidad de adelantar",
            "Retornar indiferentemente al carril derecho",
            "Avisar que se va a retornar al carril derecho"], 2, "tema2");
    
    
    
    let pregunta211 = new Pregunta(211, "El triángulo de seguridad vial, internacionalmente, incorpora elementos que se denominan...",
        ["Factores de la trilogía vial",
            "Factores de la seguridad",
            "Trilogía de la conducción"], 0, "tema1");
    
    let pregunta212 = new Pregunta(212, "Distancia que recorre el vehículo desde que se visualiza el peligro, hasta que se detienen completamente, es la distancia",
        ["Reacción",
            "Parada",
            "Frenado"], 2, "tema6");
    
    
    let pregunta213 = new Pregunta(213, "El peralte se presenta sobre el extremo izquierdo de la calzada cuando la curva es...",
        ["Hacia la izquierda",
            "Hacia los extremos",
            "Hacia la derecha"], 2, "tema9");
    
    let pregunta214 = new Pregunta(214, "En la conducción técnica económica y eficiente, el método de cambio progresivo es la mejor manera de",
        ["Cambiar de destino",
            "Cambiar de direccional",
            "Cambiar de velocidad"], 2, "tema9");
    
    let pregunta215 = new Pregunta(215, "Asegurarse de las buenas condiciones del vehículo y del conductor es una norma primordial que se debe observar y cumplir",
        ["Después de iniciada la circulación vehicular.",
            "Cuando se ha iniciado la marcha en carretera.",
            "Antes de iniciar la circulación vehicular."], 2, "tema4");
    
    let pregunta216 = new Pregunta(216, "El conocimiento de las fuerzas que intervienen en el despliegue de potencia del vehículo facilita al conductor.",
        ["El control constante de los niveles de calor",
            "La aceleración constante y definida del motor.",
            "La obtención del rendimiento máximo del motor."], 2, "tema9");
    
    let pregunta217 = new Pregunta(217, "La lectura deficiente del señalamiento vial incrementa el riesgo de sufrir?",
        [" Situaciones propias de la circulación vehicular.",
            " Situaciones propias de la circulación peatonal.",
            "Accidentes que se pudieron prevenir."], 2, "tema3");
    let pregunta218 = new Pregunta(218, "Según el diseño de la vía en las curvas, el vehículo tenderá a salirse de la vía con mucha más fuerza.",
        ["Si tiene sobreelevación o peralte",
            "Si cuenta con los dispositivos de diseño adecuados.",
            "Si no cuenta con sobreelevación o peralte."], 2, "tema9");
    
    let pregunta219 = new Pregunta(219, "Su principal ventaja es la gran visibilidad, por lo que sirven para dirigir la circulación y son...",
        ["Las vías principales",
            "La conducción nocturna",
            "Las marcas de pavimento"], 2, "tema3");
    
    let pregunta220 = new Pregunta(220, "El vehículo que gira a la izquierda en una intersección con sentido de circulación opuestos y condiciones iguales de señalamiento será...",
        ["El que espera y cruza de segundo.",
            "El que cruza de primero sin esperar.",
            " El que espera y cruza de último."], 2, "tema6");
    
    let pregunta221 = new Pregunta(221, "En el uso de esta demarcación, no se permite realizar virage en 'U'.",
        ["Zonas de estacionamiento prohibido",
            "Carril exclusivo para transporte público",
            "Carril exclusivo para giro izquierdo"], 2, "tema2");
    
    let pregunta222 = new Pregunta(222, "si con mi vehiculo golpeo a un semoviente, que tipo de accidente se presenta",
        ["Colisión",
            "Vuelco",
            "Atropello"], 2, "tema6");
    let pregunta223 = new Pregunta(223, "Se ha comprobado que el factor humano es el responsable de la mayoría de los accidentes de tránsito en Costa Rica:",
        ["Más del 95%",
            "Más del 80%",
            "Más del 90%"], 2, "tema5");
    let pregunta224 = new Pregunta(224, "Según la regla de intervalo, si un vehículo de transporte pesado mide aproximadamente 18 metros, ¿cuántos segundos debemos mantener de distancia con ese vehículo?",
        ["4 segundos",
            "5 segundos",
            "6 segundos"], 2, "tema6");
    
    let pregunta225 = new Pregunta(225, "¿Qué licencia autoriza la conducción de automotores como autobuses, busetas y microbuses?",
        ["D-2",
            "C-1",
            "C-2"], 2, "tema2");
    let pregunta226 = new Pregunta(225, "En ausencia de señalización, la velocidad mínima en una autopista será de:",
        ["40 km/h",
            "60 km/h",
            "50 km/h"], 2, "tema2");
    let pregunta227 = new Pregunta(227, "La contaminación electromagnética se asocia con:",
        ["El aumento de padecimientos respiratorios",
            "El aumento de padecimientos de cáncer",
            "El aumento de dolores musculares"], 2, "tema8");
    
    let pregunta228 = new Pregunta(228, "¿A cuántos metros por delante del vehículo colocaremos los triángulos de seguridad en caso de emergencia?",
        ["5 metros",
            "10 metos",
            "15 metros"], 2, "tema5");
    let pregunta229 = new Pregunta(229, "¿En 1920 Costa Rica obtuvo una posición líder en América Latina en seguridad vial con el documento denominado?",
        ["La ley de tránsito vial",
            "El Código de Administración Vial",
            "Código de Circulación"], 2, "tema1");
    
    let pregunta230 = new Pregunta(230, "¿A cuál ley sustituyó la Ley de Tránsito por vías públicas terrestres 7331 del 22 de abril de 1993?",
        ["6324",
            "7331",
            "5930"], 2, "tema1");
    
    let pregunta231 = new Pregunta(231, "¿Cuál de las siguientes afirmaciones sobre el artículo 1 es verdadera?",
        ["Incluye a los parqueos privados de las casas de habitación y de los edificios, ya sean públicos o privados, que se destinen únicamente a los usuarios internos de estas edificaciones.",
            "Regulará la circulación en los parqueos privados de los edificios y las casas de habitación, sean públicos o privados, que se destinen únicamente a los usuarios internos de estas edificaciones.",
            "Excluye a los parqueos privados de las casas de habitación y de los edificios, ya sean públicos o privados, que se destinen únicamente a los usuarios internos de estas edificaciones."], 2, "tema1");
    
    
    let pregunta232 = new Pregunta(232, "¿Es un objetivo de la seguridad vial el hecho de que los oficiales de tránsito estén bien capacitados?",
        ["En algunas situaciones",
            "No",
            "Sí"], 2, "tema1");
    let pregunta233 = new Pregunta(233, "Si mantenemos nuestro vehículo en buen estado, ¿a qué objetivo de la seguridad vial estaremos apoyando?",
        ["Dar fluidez al tráfico vehicular",
            "Solamente conserva la calidad de nuestro vehículo",
            "Menor contaminación y mejor economía"], 2, "tema1");
    let pregunta234 = new Pregunta(234, "Cuando hay neblina se debe:",
        ["Encender los halógenos y acercarse a las orillas.",
            "Reducir la velocidad y tratarse de acercarse a las orillas.",
            "Reducir la velocidad y tratarse de no acercar mucho a las orillas."], 2, "tema3");
    let pregunta235 = new Pregunta(235, "¿Cuál será el significado del objetivo de seguridad vial que se basa en el uso eficiente de las vías de circulación?",
        ["Reducir el número de vehículos y mejorar el transporte público.",
            "Eliminar el congestionamiento vehicular.",
            "Dar mayor fluidez al tránsito."], 2, "tema1");
    
    let pregunta236 = new Pregunta(236, "Dar fluidez al tránsito corresponde a unos de los:",
        ["8 Principios de seguridad vial",
            "10 objetivos de las seguridad vial",
            "8 objetivos de la seguridad vial"], 2, "tema1");
    
    let pregunta237 = new Pregunta(237, "Como unos de los objetivos, la responsable de educar a los ciudadanos para que utilicen adecuadamente las vías y sus vehículos es",
        ["El COSEVI",
            "El MOPT",
            "La seguridad vial"], 2, "tema1");
    
    let pregunta238 = new Pregunta(238, "Como resultado de alcanzar los objetivos de la seguridad vial, se logrará una...",
        ["Menor tráfico y congestionamiento",
            "Fluidez de tránsito",
            "Mejor calidad de vida"], 2, "tema1");
    
    let pregunta239 = new Pregunta(239, "El factor humano, el vehículo y la vía están conectados, cualquier falla en uno de ellos afecta a...",
        ["La estructura vial",
            "La trilogía vial",
            "La circulación."], 2, "tema1");
    
    let pregunta240 = new Pregunta(240, "¿Qué acción se ha elevado a rango de delito en la Ley 9078?",
        ["Conducir a una velocidad mayor a 40 km/h en zona escolar.",
            "Conducir bajo los efectos del alcohol, con una concentración superior a 0,50 gramos de alcohol por litro de sangre o más de 0,35 miligramos en aire espirado para conductores novatos o profesionales.",
            "Conducir bajo los efectos del alcohol, con una concentración superior a 0,50 gramos de alcohol por litro de sangre o más de 0,25 miligramos en aire espirado para conductores novatos o profesionales."], 2, "tema2");
    let pregunta241 = new Pregunta(241, "¿Cómo se forman los contaminantes secundarios del aire?",
        ["Se forman por el uso del transporte vehicular",
            "Se forman cuando contaminantes de aerosoles reaccionan en la atmósfera",
            "se forman cuando contaminantes primarios reaccionan en la atmósfera. "], 2, "tema8");
    
    let pregunta242 = new Pregunta(242, "¿Cuál es el mayor consumidor de carburante de Costa Rica?",
        ["La cocina",
            "Las industrias pesqueras",
            "El transporte automotor"], 2, "tema8");
    
    let pregunta243 = new Pregunta(243, "¿A qué puede deberse que los vehículos emitan una nube negra de hollín?",
        ["Se debe a un problema en el sistema de escape",
            "Se debe al mal uso del embrague",
            "Se debe a un motor en mal estado"], 2, "tema8");
    
    
    let pregunta244 = new Pregunta(244, "Según la Ley de Tránsito en el artículo 98, los vehículos amigables con el ambiente...",
        ["Se reduce un porcentaje en el pago de marchamo.",
            "Su revisión técnica es distinta.",
            "Se excluye de la restricción vehicular."], 2, "tema8");
    
    let pregunta245 = new Pregunta(245, "Es un gas incoloro e inodoro capaz de producir la muerte, es producido principalmente por la combustión del motor. ",
        ["Sulfuro de hidrógeno",
            "Dióxido de carbono",
            "Monóxido de carbono"], 2, "tema8");
    let pregunta246 = new Pregunta(246, "Es un gas tóxico que en una concentración de un 1% puede provocar la muerte.",
        ["Silicio (SI)",
            "Óxido de nitrógeno (NO)",
            "Monóxido de carbono (CO) "], 2, "tema8");
    let pregunta247 = new Pregunta(247, "Unos de los errores a la hora de conducir en una rotonda es:",
        ["No poner el pie en el freno a la hora de salir",
            "Salir en el mismo carril",
            "Salir desde otro carril diferente"], 2, "tema7");
    
    let pregunta248 = new Pregunta(248, "Unos de los errores a la hora de conducir en una rotonda es:",
        ["Salir en el mismo carril.",
            "Cambiar de direccional izquierdo dentro de la rotonda.",
            "Cambiar de carril dentro de la rotonda."], 2, "tema7");
    
    
    let pregunta249 = new Pregunta(249, "¿Cuál de las siguientes afirmaciones sobre las rotondas será cierta?",
        ["Debe conducir mas de 35 km/h para evitar un posible congestionamiento.",
            "El radio de la rotonda hace que los conductores vaya en la velocidad más rapida posible.",
            "El radio de la rotonda hace que los conductores que la atraviesan deban controlar su velocidad."], 2, "tema7");
    
    let pregunta250 = new Pregunta(250, "Una de las ventajas de la rotonda es que...",
        ["Aumentar la velocidad hasta el límite.",
            "Disminuir la velocidad.",
            "Obliga controlar la velocidad."], 2, "tema7");
    let pregunta251 = new Pregunta(251, "Otras de las ventajas de la rotonda es que...",
        ["Ofrece fluidez al respetar las señales de CEDA.",
            "Evita y reduce un gran porcentajes de accidentes de tránsito",
            "Ofrece fluidez al evitar la necesidad de semáforos"], 2, "tema7");
    
    
    let pregunta252 = new Pregunta(252, "Si la rotonda cuenta con tres carriles, el carril central podrá salir por",
        ["El interno y permitirá salir únicamente en la segunda salida.",
            "El central le permitirá salir únicamente en la primera salida.",
            "El central le permitirá salir únicamente en la segunda salida."], 2, "tema7");
    
    let pregunta253 = new Pregunta(253, "¿Quién tiene prioridad de paso en una rotonda?",
        ["Los vehículos que están afuera",
            "Ambos vehículos",
            "Los vehículos que circulan dentro."], 2, "tema7");
    
    
    let pregunta254 = new Pregunta(254, "¿Cuál es una regla a la hora de ingresar en una rotonda?",
        ["No se permite ingresar a velocidad mayores a 25 km/h.",
            "No se permite ingresar a velocidad menores a 25km/h",
            "No se permite adelantar en una rotonda."], 2, "tema7");
    
    
    
    let pregunta255 = new Pregunta(255, "En una rotonda se debe...",
        ["Circular a velocidades mayores a 40 km/h.",
            "Ubicarse en el carril interno.",
            "Ubicarse en el carril de acceso correcto."], 2, "tema7");
    
    
    let pregunta256 = new Pregunta(256, "En una rotonda NO se debe...",
        ["Circular a velocidades menores a 30 km/h.",
            "Ubicarse en el carril de acceso correcto.",
            "Entrar desde otro carril diferente"], 2, "tema7");
    
    let pregunta257 = new Pregunta(257, "La presencia de rotondas y tráfico denso puede...",
        ["Generar desgastes en el automotor",
            "Provocar mareos",
            "Generar cansancio"], 2, "tema7");
    
    
    let pregunta258 = new Pregunta(258, "¿Qué medidas deben tomar los conductores al transitar por una rotonda?",
        ["Indicar la maniobra 70 metros antes de realizarla y luego aplicar las luces direccionales.",
            "Indicar la maniobra dirigiendose al carril correspondiente.",
            "Indicar la maniobra que tiene intención de realizar con las luces direccionales."], 2, "tema7");
    listaPreguntas.push(pregunta1);
    listaPreguntas.push(pregunta2);
    listaPreguntas.push(pregunta3);
    listaPreguntas.push(pregunta4);
    listaPreguntas.push(pregunta5);
    listaPreguntas.push(pregunta6);
    listaPreguntas.push(pregunta7);
    listaPreguntas.push(pregunta8);
    listaPreguntas.push(pregunta9);
    listaPreguntas.push(pregunta10);
    listaPreguntas.push(pregunta11);
    listaPreguntas.push(pregunta12);
    listaPreguntas.push(pregunta13);
    listaPreguntas.push(pregunta14);
    listaPreguntas.push(pregunta15);
    
    listaPreguntas.push(pregunta16);
    listaPreguntas.push(pregunta17);
    listaPreguntas.push(pregunta18);
    listaPreguntas.push(pregunta19);
    listaPreguntas.push(pregunta20);
    listaPreguntas.push(pregunta21);
    listaPreguntas.push(pregunta22);
    listaPreguntas.push(pregunta23);
    listaPreguntas.push(pregunta24);
    listaPreguntas.push(pregunta25);
    listaPreguntas.push(pregunta26);
    listaPreguntas.push(pregunta27);
    listaPreguntas.push(pregunta28);
    listaPreguntas.push(pregunta29);
    listaPreguntas.push(pregunta30);
    listaPreguntas.push(pregunta31);
    listaPreguntas.push(pregunta32);
    listaPreguntas.push(pregunta33);
    listaPreguntas.push(pregunta34);
    listaPreguntas.push(pregunta35);
    listaPreguntas.push(pregunta36);
    listaPreguntas.push(pregunta37);
    listaPreguntas.push(pregunta38);
    listaPreguntas.push(pregunta39);
    listaPreguntas.push(pregunta40);
    listaPreguntas.push(pregunta41);
    listaPreguntas.push(pregunta42);
    listaPreguntas.push(pregunta43);
    listaPreguntas.push(pregunta44);
    listaPreguntas.push(pregunta45);
    listaPreguntas.push(pregunta46);
    listaPreguntas.push(pregunta47);
    listaPreguntas.push(pregunta48);
    listaPreguntas.push(pregunta49);
    listaPreguntas.push(pregunta50);
    
    // Suponiendo que ya tienes las preguntas definidas como variables pregunta51, pregunta52, etc.
    listaPreguntas.push(pregunta51);
    listaPreguntas.push(pregunta52);
    listaPreguntas.push(pregunta53);
    listaPreguntas.push(pregunta54);
    listaPreguntas.push(pregunta55);
    listaPreguntas.push(pregunta56);
    listaPreguntas.push(pregunta57);
    listaPreguntas.push(pregunta58);
    listaPreguntas.push(pregunta59);
    listaPreguntas.push(pregunta60);
    listaPreguntas.push(pregunta61);
    listaPreguntas.push(pregunta62);
    listaPreguntas.push(pregunta63);
    listaPreguntas.push(pregunta64);
    listaPreguntas.push(pregunta65);
    listaPreguntas.push(pregunta66);
    listaPreguntas.push(pregunta67);
    listaPreguntas.push(pregunta68);
    listaPreguntas.push(pregunta69);
    listaPreguntas.push(pregunta70);
    
    listaPreguntas.push(pregunta71);
    listaPreguntas.push(pregunta72);
    listaPreguntas.push(pregunta73);
    listaPreguntas.push(pregunta74);
    listaPreguntas.push(pregunta75);
    listaPreguntas.push(pregunta76);
    listaPreguntas.push(pregunta77);
    listaPreguntas.push(pregunta78);
    listaPreguntas.push(pregunta79);
    listaPreguntas.push(pregunta80);
    listaPreguntas.push(pregunta81);
    listaPreguntas.push(pregunta82);
    listaPreguntas.push(pregunta83);
    listaPreguntas.push(pregunta84);
    listaPreguntas.push(pregunta85);
    listaPreguntas.push(pregunta86);
    listaPreguntas.push(pregunta87);
    listaPreguntas.push(pregunta88);
    listaPreguntas.push(pregunta89);
    listaPreguntas.push(pregunta90);
    listaPreguntas.push(pregunta91);
    listaPreguntas.push(pregunta92);
    listaPreguntas.push(pregunta93);
    listaPreguntas.push(pregunta94);
    listaPreguntas.push(pregunta95);
    listaPreguntas.push(pregunta96);
    listaPreguntas.push(pregunta97);
    listaPreguntas.push(pregunta98);
    listaPreguntas.push(pregunta99);
    listaPreguntas.push(pregunta100);
    // Suponiendo que ya tienes las preguntas definidas como variables pregunta101, pregunta102, etc.
    listaPreguntas.push(pregunta101);
    listaPreguntas.push(pregunta102);
    listaPreguntas.push(pregunta103);
    listaPreguntas.push(pregunta104);
    listaPreguntas.push(pregunta105);
    listaPreguntas.push(pregunta106);
    listaPreguntas.push(pregunta107);
    listaPreguntas.push(pregunta108);
    listaPreguntas.push(pregunta109);
    listaPreguntas.push(pregunta110);
    listaPreguntas.push(pregunta111);
    listaPreguntas.push(pregunta112);
    listaPreguntas.push(pregunta113);
    listaPreguntas.push(pregunta114);
    listaPreguntas.push(pregunta115);
    listaPreguntas.push(pregunta116);
    listaPreguntas.push(pregunta117);
    listaPreguntas.push(pregunta118);
    listaPreguntas.push(pregunta119);
    listaPreguntas.push(pregunta120);
    listaPreguntas.push(pregunta121);
    
    
    // Suponiendo que ya tienes las preguntas definidas como variables pregunta122, pregunta123, etc.
    listaPreguntas.push(pregunta122);
    listaPreguntas.push(pregunta123);
    listaPreguntas.push(pregunta124);
    listaPreguntas.push(pregunta125);
    listaPreguntas.push(pregunta126);
    listaPreguntas.push(pregunta127);
    listaPreguntas.push(pregunta128);
    listaPreguntas.push(pregunta129);
    listaPreguntas.push(pregunta130);
    listaPreguntas.push(pregunta131);
    listaPreguntas.push(pregunta132);
    listaPreguntas.push(pregunta133);
    listaPreguntas.push(pregunta134);
    listaPreguntas.push(pregunta135);
    listaPreguntas.push(pregunta136);
    listaPreguntas.push(pregunta137);
    listaPreguntas.push(pregunta138);
    listaPreguntas.push(pregunta139);
    listaPreguntas.push(pregunta140);
    listaPreguntas.push(pregunta141);
    listaPreguntas.push(pregunta142);
    listaPreguntas.push(pregunta143);
    listaPreguntas.push(pregunta144);
    listaPreguntas.push(pregunta145);
    listaPreguntas.push(pregunta146);
    listaPreguntas.push(pregunta147);
    listaPreguntas.push(pregunta148);
    listaPreguntas.push(pregunta149);
    listaPreguntas.push(pregunta150);
    // Suponiendo que ya tienes las preguntas definidas como variables pregunta151, pregunta152, etc.
    listaPreguntas.push(pregunta151);
    listaPreguntas.push(pregunta152);
    listaPreguntas.push(pregunta153);
    listaPreguntas.push(pregunta154);
    listaPreguntas.push(pregunta155);
    listaPreguntas.push(pregunta156);
    listaPreguntas.push(pregunta157);
    listaPreguntas.push(pregunta158);
    listaPreguntas.push(pregunta159);
    listaPreguntas.push(pregunta160);
    listaPreguntas.push(pregunta161);
    listaPreguntas.push(pregunta162);
    listaPreguntas.push(pregunta163);
    listaPreguntas.push(pregunta164);
    listaPreguntas.push(pregunta165);
    listaPreguntas.push(pregunta166);
    listaPreguntas.push(pregunta167);
    listaPreguntas.push(pregunta168);
    listaPreguntas.push(pregunta169);
    listaPreguntas.push(pregunta170);
    listaPreguntas.push(pregunta171);
    listaPreguntas.push(pregunta172);
    listaPreguntas.push(pregunta173);
    listaPreguntas.push(pregunta174);
    listaPreguntas.push(pregunta175);
    listaPreguntas.push(pregunta176);
    listaPreguntas.push(pregunta177);
    listaPreguntas.push(pregunta178);
    listaPreguntas.push(pregunta179);
    listaPreguntas.push(pregunta180);
    // Suponiendo que ya tienes las preguntas definidas como variables pregunta181, pregunta182, etc.
    listaPreguntas.push(pregunta181);
    listaPreguntas.push(pregunta182);
    listaPreguntas.push(pregunta183);
    listaPreguntas.push(pregunta184);
    listaPreguntas.push(pregunta185);
    listaPreguntas.push(pregunta186);
    listaPreguntas.push(pregunta187);
    listaPreguntas.push(pregunta188);
    listaPreguntas.push(pregunta189);
    listaPreguntas.push(pregunta190);
    
    // Suponiendo que ya tienes las preguntas definidas como variables pregunta191, pregunta192, etc.
    listaPreguntas.push(pregunta191);
    listaPreguntas.push(pregunta192);
    listaPreguntas.push(pregunta193);
    listaPreguntas.push(pregunta194);
    listaPreguntas.push(pregunta195);
    listaPreguntas.push(pregunta196);
    listaPreguntas.push(pregunta197);
    listaPreguntas.push(pregunta198);
    listaPreguntas.push(pregunta199);
    listaPreguntas.push(pregunta200);
    listaPreguntas.push(pregunta201);
    listaPreguntas.push(pregunta202);
    listaPreguntas.push(pregunta203);
    listaPreguntas.push(pregunta204);
    listaPreguntas.push(pregunta205);
    listaPreguntas.push(pregunta206);
    listaPreguntas.push(pregunta207);
    listaPreguntas.push(pregunta208);
    listaPreguntas.push(pregunta209);
    listaPreguntas.push(pregunta210);
    listaPreguntas.push(pregunta211);
    listaPreguntas.push(pregunta212);
    listaPreguntas.push(pregunta213);
    // Suponiendo que ya tienes las preguntas definidas como variables pregunta214, pregunta215, etc.
    listaPreguntas.push(pregunta214);
    listaPreguntas.push(pregunta215);
    listaPreguntas.push(pregunta216);
    listaPreguntas.push(pregunta217);
    listaPreguntas.push(pregunta218);
    listaPreguntas.push(pregunta219);
    listaPreguntas.push(pregunta220);
    // Suponiendo que ya tienes las preguntas definidas como variables pregunta221, pregunta222, etc.
    listaPreguntas.push(pregunta221);
    listaPreguntas.push(pregunta222);
    listaPreguntas.push(pregunta223);
    listaPreguntas.push(pregunta224);
    listaPreguntas.push(pregunta225);
    listaPreguntas.push(pregunta226);
    listaPreguntas.push(pregunta227);
    listaPreguntas.push(pregunta228);
    listaPreguntas.push(pregunta229);
    listaPreguntas.push(pregunta230);
    listaPreguntas.push(pregunta231);
    listaPreguntas.push(pregunta232);
    listaPreguntas.push(pregunta233);
    listaPreguntas.push(pregunta234);
    listaPreguntas.push(pregunta235);
    listaPreguntas.push(pregunta236);
    listaPreguntas.push(pregunta237);
    listaPreguntas.push(pregunta238);
    listaPreguntas.push(pregunta239);
    listaPreguntas.push(pregunta240);
    listaPreguntas.push(pregunta241);
    listaPreguntas.push(pregunta242);
    listaPreguntas.push(pregunta243);
    listaPreguntas.push(pregunta244);
    listaPreguntas.push(pregunta245);
    listaPreguntas.push(pregunta246);
    listaPreguntas.push(pregunta247);
    listaPreguntas.push(pregunta248);
    listaPreguntas.push(pregunta249);
    listaPreguntas.push(pregunta250);
    listaPreguntas.push(pregunta251);
    listaPreguntas.push(pregunta252);
    listaPreguntas.push(pregunta253);
    listaPreguntas.push(pregunta254);
    listaPreguntas.push(pregunta255);
    listaPreguntas.push(pregunta256);
    listaPreguntas.push(pregunta257);
    listaPreguntas.push(pregunta258);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // Muestra el examen en si
    const btnExamenes = document.querySelectorAll('.button-option');
    const divExamen = document.getElementById('div-examenes');
    const pTitulo = document.getElementById('titulo');
    const parrafo = document.getElementById('parrafo');
    let handler;
    
    
    document.addEventListener('DOMContentLoaded', function () {
    
        btnExamenes.forEach(boton => {
            boton.addEventListener('click', (event) => {
                // Usar event.currentTarget en lugar de event.target
                let textoSeleccionado = event.currentTarget.textContent || event.currentTarget.innerText;
                textoSeleccionado = textoSeleccionado.substring(textoSeleccionado.indexOf('.') + 1).trim();
                pTitulo.textContent = textoSeleccionado;
    
                let listaPreguntasFiltradas = listaPreguntas.filter(item => item.categoria === event.currentTarget.id);
                listaPreguntasCargadas = [...listaPreguntasFiltradas];
                capituloExamen.tema = event.currentTarget.id;
                agregarTemporizador();
                handler = evitarRefresco();
    
            });
        });
    });
    /*
    let pregunta1 = new Pregunta(1, "¿Cuál es la capital de Francia?", ["Madrid", "Londres", "París"], 2, "Geografía");
    let pregunta2 = new Pregunta(2, "¿Cuál es el río más largo del mundo?", ['Amazonas', 'Nilo', 'Yangtsé'], 1, "Geografía");
    let pregunta3 = new Pregunta(3, "¿Cuál es el pico más alto de América?", ['Monte Everest', 'Monte Aconcagua', 'Monte Kilimanjaro'], 1, "Geografía");
    
    listaPreguntas.push(pregunta1);
    listaPreguntas.push(pregunta2);
    listaPreguntas.push(pregunta3);
    let pregunta4 = new Pregunta(4, "¿En qué año comenzó la Segunda Guerra Mundial?", ['1914', '1939', '1945'], 1, "Historia");
    let pregunta5 = new Pregunta(5, "¿Quién pintó la Mona Lisa?", ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci'], 2, "Arte");
    let pregunta6 = new Pregunta(6, "¿Cuál es el planeta más grande del sistema solar?", ['Tierra', 'Júpiter', 'Saturno'], 1, "Ciencia");
    let pregunta7 = new Pregunta(7, "¿Cuál es el idioma más hablado en el mundo?", ['Inglés', 'Chino mandarín', 'Español'], 1, "Cultura");
    let pregunta8 = new Pregunta(8, "¿Cuál es el metal más abundante en la corteza terrestre?", ['Aluminio', 'Hierro', 'Calcio'], 0, "Ciencia");
    let pregunta9 = new Pregunta(9, "¿Cuál es el océano más grande del mundo?", ['Atlántico', 'Índico', 'Pacífico'], 2, "Geografía");
    let pregunta10 = new Pregunta(10, "¿Quién escribió 'Cien años de soledad'?", ['Gabriel García Márquez', 'Mario Vargas Llosa', 'Julio Cortázar'], 0, "Literatura");
    let pregunta11 = new Pregunta(11, "¿En qué continente se encuentra Egipto?", ['Asia', 'África', 'Europa'], 1, "Geografía");
    let pregunta12 = new Pregunta(12, "¿Cuál es el elemento químico con el símbolo O?", ['Oro', 'Osmio', 'Oxígeno'], 2, "Ciencia");
    let pregunta13 = new Pregunta(13, "¿Quién es el autor de 'Don Quijote de la Mancha'?", ['Miguel de Cervantes', 'Federico García Lorca', 'Jorge Luis Borges'], 0, "Literatura");
    let pregunta14 = new Pregunta(14, "¿Cuál es la moneda oficial de Japón?", ['Yuan', 'Won', 'Yen'], 2, "Economía");
    let pregunta15 = new Pregunta(15, "¿Cuál es el animal terrestre más rápido?", ['León', 'Guepardo', 'Tigre'], 1, "Ciencia");
    let pregunta16 = new Pregunta(16, "¿Quién descubrió la penicilina?", ['Marie Curie', 'Isaac Newton', 'Alexander Fleming'], 2, "Ciencia");
    let pregunta17 = new Pregunta(17, "¿Cuál es la obra más famosa de William Shakespeare?", ['Hamlet', 'El Rey Lear', 'Macbeth'], 0, "Literatura");
    let pregunta18 = new Pregunta(18, "¿Cuál es el país más grande del mundo?", ['Canadá', 'Rusia', 'China'], 1, "Geografía");
    let pregunta19 = new Pregunta(19, "¿En qué año llegó el hombre a la Luna?", ['1965', '1969', '1972'], 1, "Historia");
    let pregunta20 = new Pregunta(20, "¿Cuál es la capital de Australia?", ['Sídney', 'Melbourne', 'Canberra'], 2, "Geografía");
    let pregunta21 = new Pregunta(21, "¿Qué gas es necesario para la respiración?", ['Dióxido de carbono', 'Oxígeno', 'Nitrógeno'], 1, "Ciencia");
    let pregunta22 = new Pregunta(22, "¿En qué país se encuentra la Torre Eiffel?", ['España', 'Italia', 'Francia'], 2, "Geografía");
    let pregunta23 = new Pregunta(23, "¿Qué instrumento mide la presión atmosférica?", ['Termómetro', 'Barómetro', 'Anemómetro'], 1, "Ciencia");
    
    listaPreguntas.push(pregunta4);
    listaPreguntas.push(pregunta5);
    listaPreguntas.push(pregunta6);
    listaPreguntas.push(pregunta7);
    listaPreguntas.push(pregunta8);
    listaPreguntas.push(pregunta9);
    listaPreguntas.push(pregunta10);
    listaPreguntas.push(pregunta11);
    listaPreguntas.push(pregunta12);
    listaPreguntas.push(pregunta13);
    listaPreguntas.push(pregunta14);
    listaPreguntas.push(pregunta15);
    listaPreguntas.push(pregunta16);
    listaPreguntas.push(pregunta17);
    listaPreguntas.push(pregunta18);
    listaPreguntas.push(pregunta19);
    listaPreguntas.push(pregunta20);
    listaPreguntas.push(pregunta21);
    listaPreguntas.push(pregunta22);
    listaPreguntas.push(pregunta23);
    
    listaPreguntas = revolver(listaPreguntas);
    */
    //listaPreguntas = listaPreguntas.filter(item => item.categoria === "Geografía");
    listaPreguntas = revolver(listaPreguntas);
    let listaPreguntasCargadas = [...listaPreguntas]; // Obtiene solo las preguntas a usar para el examen
    let divPreguntas = document.getElementById('div-preguntas');
    
    
    
    //let preguntasCargadas = 0;
    
    function cargarPreguntas(listaPreguntasCargadas, divPreguntas) {
    
        let i = 1;
        let respuestas = '';
        listaPreguntasCargadas.forEach(pregunta => {
            respuestas = cargarRespuestas(pregunta.respuestas, i);
            divPreguntas.innerHTML += `    
            <div class="div-questionBox noselect">
            <p class="div-questionText">
              ${i}. ${pregunta.pregunta}
            </p>
            <div>
            ${respuestas}
            </div>
          </div>`;
            i++;
        });
        divPreguntas.innerHTML += `<button id="btn-send" onclick="enviar(false)">Enviar</button>`;
        divPreguntas.innerHTML += `<button id="btn-exit" onclick="salir()">Salir</button>`;
    
    }
    
    function salir() {
        // Muestra una ventana de confirmación
        desactivarEvitarRefresco();
        if (capituloExamen.tema !== 'Todo') {
            let resultado = confirm("¿Estás seguro de que deseas continuar?");
    
            if (resultado) {
                // El usuario hizo clic en "Aceptar"
                window.location.reload();
    
            }
        } else {
            window.location.reload();
    
        }
    
    }
    
    function cargarRespuestas(respuestas, idPregunta) {
        let html = '';
        for (let i = 0; i < respuestas.length; i++) {
            html += `<div class="options options${idPregunta}" onclick="selectOption(this, ${idPregunta})"><b>${i + 1}.</b> ${respuestas[i]}</div>`;
        }
        return html;
    }
    
    
    function cargarRespuestas2(respuestas, idPregunta) {
        let html = '';
        for (let i = 0; i < respuestas.length; i++) {
            html += `<div class="options2 options${idPregunta}" onclick="esCorrecta(this, ${idPregunta})"><b>${i + 1}.</b> ${respuestas[i]}</div>`;
        }
        return html;
    }
    
    function cargarResultados(listaPreguntasCargadas, divPreguntas, listaSeleccion) {
        let i = 0;
        let resultado = '';
    
        divPreguntas.innerHTML = '';
    
        listaPreguntasCargadas.forEach((pregunta, index) => {
            // Verificar si listaSeleccion[index + 1] y listaSeleccion[index + 1].seleccionada existen
            const seleccion = listaSeleccion[index + 1] && listaSeleccion[index + 1].hasOwnProperty('seleccionada')
                ? listaSeleccion[index + 1].seleccionada
                : null; // Valor por defecto si no existe
    
            resultado = mostrarResultado(index + 1, pregunta.respuestas, seleccion, pregunta);
            divPreguntas.innerHTML += `    
            <div class="div-questionBox noselect">
                <p class="div-questionText">
                    ${index + 1}. ${pregunta.pregunta}
                </p>
                <div>
                ${resultado}
                </div>
            </div>`;
            i++;
        });
        divPreguntas.innerHTML += `<button id="btn-exit" onclick="salir()">Salir</button>`;
    }
    
    
    let correctas = 0;
    function mostrarResultado(idPregunta, respuestas, seleccionada, preguntaCargada) {
        let html = '';
        for (let i = 0; i < respuestas.length; i++) {
            if (i === preguntaCargada.correcta) {
                if (preguntaCargada.correcta === seleccionada) {
                    correctas++;
                }
                html += `<div class="options options${idPregunta} result"  style="background-color: rgb(99, 237, 129);"><b>${i + 1}.</b> ${respuestas[i]}</div>`;
            } else if (i === seleccionada && preguntaCargada.correcta !== seleccionada) {
                html += `<div class="options options${idPregunta} result" style="background-color: rgb(255, 53, 53);"><b>${i + 1}.</b> ${respuestas[i]}</div>`;
            } else {
                html += `<div class="options options${idPregunta} result" ><b>${i + 1}.</b> ${respuestas[i]}</div>`;
            }
        }
        clearInterval(window.timerInterval);
    
        return html;
    }
    
    //cargarPreguntas(listaPreguntasCargadas, divPreguntas);
    
    let listaSeleccion = [];
    
    function Seleccion(idPregunta, seleccionada) {
        this.idPregunta = idPregunta;
        this.seleccionada = seleccionada;
    }
    
    function agregarSeleccion(idPregunta, opcionSeleccionada) {
        listaSeleccion[idPregunta] = new Seleccion(idPregunta, opcionSeleccionada);
        // console.log(listaSeleccion);
    }
    
    function revolver(lista) {
        for (let i = lista.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [lista[i], lista[j]] = [lista[j], lista[i]]; // Intercambiar elementos
        }
        return lista;
    }
    let temas = [
        { tema: 'tema1', nota: 0 },
        { tema: 'tema2', nota: 0 },
        { tema: 'tema3', nota: 0 },
        { tema: 'tema4', nota: 0 },
        { tema: 'tema5', nota: 0 },
        { tema: 'tema6', nota: 0 },
        { tema: 'tema7', nota: 0 },
        { tema: 'tema8', nota: 0 },
        { tema: 'tema9', nota: 0 },
        { tema: 'tema10', nota: 0 }
    ];
    
    const AVISO = `
    ¿Deseas guardar tu progreso en el navegador? 🔝\n
    1-Estos datos representan solo tu calificación más alta actual. 
    2-Pueden ser eliminados en cualquier momento. 
    3-Los datos solo son accesibles desde el dispositivo donde se almacenaron.
    `;
    
    
    function enviar(ignorar) {
        const cantidadPreguntas = parseFloat(listaPreguntasCargadas.length);
        let calificacion = 0;
        let divModalContainer = document.getElementById("div-modalContainer");
        const seleccionados = listaSeleccion.filter(elemento => elemento !== undefined).length;
        if (seleccionados === listaPreguntasCargadas.length || ignorar === true) {
            cargarResultados(listaPreguntasCargadas, divPreguntas, listaSeleccion);
            calificacion = correctas / cantidadPreguntas * 100;
            divModalContainer.innerHTML = createModal("2", `Resultado: ${correctas}/${cantidadPreguntas}`, "");
            setText("2", mostrarCalificacion(calificacion));
            setMargin("2", "5%", "auto", "15%", "auto");
            const item = localStorage.getItem('avance');
            if (item) {
                guardarNota(capituloExamen.tema);
            } else {
                avance = [...temas];
    
                let resultado = confirm(AVISO);
                if (resultado) {
                    localStorage.setItem('avance', JSON.stringify(avance));
                    guardarNota(capituloExamen.tema);
                }
            }
        } else {
            divModalContainer.innerHTML = createModal("2", `Quedan preguntas sin responder`, "");
            setMargin("2", "5%", "auto", "10%", "auto");
        }
    
        openModal("2");
    
        if (window.innerWidth <= 768) {
            setModalWidth("2", "80%");
    
        } else {
            setModalWidth("2", "30%");
    
        }
    
    
    }
    
    
    
    
    function mostrarCalificacion(calificacion) {
        let salida = "";
        if (calificacion > 70) {
            salida = `Aprobado: <b>${calificacion}</b>`
        } else {
            salida = `Reprobado: <b>${calificacion}</b>`
        }
        return salida;
    }
    
    
    
    
    
    /**Modal */
    
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
    
    
    // Inicio Confirm
    
    // Fin
    
    
    
    
    
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
    
        // Filtra las preguntas según el tema
    
        crearTemporizador("div-modalContainer");
        openModal("myConfigModal");
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
    
        // Añadir el valor del slider al total de segundos (suponiendo que cada pregunta es 1 minuto)
        const sliderValue = parseInt(document.getElementById("number-slider").value);
        listaPreguntasCargadas = listaPreguntasCargadas.slice(0, parseInt(sliderValue));
    
        for (let i = 0; i < listaPreguntasCargadas.length; i++) {
            shuffleOptions(listaPreguntasCargadas[i]);
        }
    
        document.getElementById("myConfigModal").style.display = "none";
        startCountdown(totalSeconds, unit);
        cargarPreguntas(listaPreguntasCargadas, divPreguntas);
    
        divExamen.style.display = 'none';
        divPreguntas.style.display = 'block';
        parrafo.innerHTML = "Se considera aprobado este temario con la condición de que la nota sea mayor o igual a 70 y es necesario contestar todas las preguntas para que se pueda mostrar la calificación.";
    }
    
    function startCountdown(totalSeconds, unit) {
        const countdownElement = document.getElementById("countdown");
        countdownElement.innerHTML = "Iniciando el temporizador...";
    
        window.timerInterval = setInterval(function () {
            if (totalSeconds <= 0) {
                clearInterval(window.timerInterval);
                countdownElement.innerHTML = "¡Tiempo terminado!";
                enviar(true);
                return;
            }
            totalSeconds--;
            updateCountdownDisplay(totalSeconds, unit);
        }, 1000);
    }
    
    function updateCountdownDisplay(seconds, unit) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        const countdownElement = document.getElementById("countdown");
        if (unit === 'hours') {
            if (hours === 0) {
                countdownElement.innerHTML = `${minutes}m ${secs}s`;
            } else {
                countdownElement.innerHTML = `${hours}h ${minutes}m ${secs}s`;
            }
        } else if (unit === 'minutes') {
            if (minutes === 0) {
                countdownElement.innerHTML = `${secs}s`;
            } else {
                countdownElement.innerHTML = `${minutes}m ${secs}s`;
            }
        } else if (unit === 'seconds') {
            countdownElement.innerHTML = `${secs}s`;
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    function guardarNota(tema) {
        listaPreguntas = listaPreguntas.filter(item => item.categoria === tema);
        let datos = buscarAvance(tema);
        let len = listaPreguntas.length;
        let nota = (correctas / len) * 100;
        if (datos) {
    
            //  if (datos !== null) {
            //   alert(datos.nota)
            // alert(event.target.id)
            if (nota > datos.nota) {
                actualizarNotaTema(tema, parseFloat(nota.toFixed(1)));
            }
        } else {
            actualizarNotaTema(tema, parseFloat(nota.toFixed(1)));
    
        }
    
    }
    
    function shuffleOptions(pregunta) {
        let opciones = pregunta.respuestas;
        let correcta = pregunta.correcta;
        let respuestaCorrecta = opciones[correcta];
    
        opciones = revolver(opciones);
    
        let nuevaCorrecta = opciones.indexOf(respuestaCorrecta);
        pregunta.respuestas = opciones;
        pregunta.correcta = nuevaCorrecta;
    }
    
    let avance = [];
    
    
    
    
    function buscarAvance(tema) {
        const storedList = localStorage.getItem('avance');
        if (storedList) {
            const userList = JSON.parse(storedList);
            return userList.find(user => user.tema === tema);
        }
        return null;
    }
    
    const buttonComplement = document.querySelectorAll('.button-complement');
    let contador = 0;
    let timeoutID = null;
    // Define la función que se ejecutará cuando un botón sea clicado
    function handleClick(event) {
        let textoSeleccionado = event.currentTarget.textContent || event.currentTarget.innerText;
        const btnClearItem = document.getElementById('btn-clearItem');
        if (localStorage.getItem('avance') !== null) {
            avance = JSON.parse(localStorage.getItem('avance'));
    
        } else {
            if (!textoSeleccionado.includes('aleatorio') && !textoSeleccionado.includes('📝')) {
    
                let resultado = confirm(AVISO);
                avance = [...temas];
    
                if (resultado) {
                    localStorage.setItem('avance', JSON.stringify(avance));
                }
    
            }
        }
    
        //  let datos = buscarAvance('tema1');
    
        //  if (datos !== null) {
        //   alert(datos.nota)
        // alert(event.target.id)
        if (textoSeleccionado.includes('Avance') || textoSeleccionado.includes('📈')) {
            let chartContainer = document.getElementById('chart-container');
            parrafo.innerHTML = 'La calificación de cada capítulo se obtiene a través del número de respuesta correctas y la cantidad de preguntas seleccionadas en la práctica. Si deseas aumentar tu progreso es necesario prácticar con más preguntas que la anterior.';
            pTitulo.innerHTML = '¡Conozca tu avance!';
            divExamen.style.display = 'none';
            btnClearItem.style.display = 'block';
    
            /*
                    avance.forEach(item => {
                        const temaDiv = document.createElement('div');
                        temaDiv.classList.add('tema');
                        temaDiv.textContent = `Tema: ${getTema(item.tema)}, Nota: ${item.nota}`;
                        chartContainer.appendChild(temaDiv);
                    });*/
    
    
    
    
            avance.forEach(item => {
                let nota = parseFloat(item.nota)
                const donutContainer = document.createElement('div');
                donutContainer.classList.add('donut-container');
    
                const donutChart = document.createElement('div');
                donutChart.classList.add('donut-chart');
    
                const donutRing = document.createElement('div');
                donutRing.classList.add('donut-ring');
                donutRing.style.background = `conic-gradient(${'#33ff57'} 0% ${nota}%, #ececec ${nota}% 100%)`;
    
                const donutHole = document.createElement('div');
                donutHole.classList.add('donut-hole');
    
                const donutPercent = document.createElement('span');
                donutPercent.classList.add('donut-percent');
                donutPercent.textContent = `${nota}%`;
    
                donutHole.appendChild(donutPercent);
                donutChart.appendChild(donutRing);
                donutChart.appendChild(donutHole);
                donutContainer.appendChild(donutChart);
    
                const donutTitle = document.createElement('div');
                donutTitle.classList.add('donut-title');
                donutTitle.textContent = getTema(item.tema);
                donutContainer.appendChild(donutTitle);
    
                chartContainer.appendChild(donutContainer);
            });
    
    
    
        }
        if (textoSeleccionado.includes('aleatorio') || textoSeleccionado.includes('📝')) {
            let totalSeconds = (40 * 60);
            //  startCountdown(10, 'minutes');
            const btnClearNext = document.getElementById('btn-next');
            correctas = 0;
            capituloExamen.tema = 'examen';
            btnClearNext.style.display = 'block';
    
            divExamen.style.display = 'none';
            divPreguntas.style.display = 'block';
            listaPreguntasCargadas = listaPreguntasCargadas.slice(0, 40);
            let pregunta = listaPreguntasCargadas[contador++];
            console.log(pregunta);
            console.log(contador);
            pTitulo.innerHTML = `Pregunta ${contador}/` + listaPreguntasCargadas.length;
            parrafo.innerHTML = `Selecciona la respuesta correcta y luego oprima el botón "Siguiente" para continuar.`;
    
    
            respuestas = cargarRespuestas2(pregunta.respuestas, pregunta.Id);
            generateQuestion(contador, pregunta, respuestas);
            timeoutID = setTimeout(temporizador, (1000*60)*50);
        }
        //}
    }
    
    
    
    // Asigna la función al evento 'click' de cada botón
    buttonComplement.forEach(button => {
        button.addEventListener('click', handleClick);
    });
    
    
    function generateQuestion(contador, pregunta, respuestas) {
        divPreguntas.innerHTML = `    
        <div class="div-questionBox noselect">
        <p class="div-questionText">
          ${contador}. ${pregunta.pregunta}
        </p>
        <div>
        ${respuestas}
        </div>
      </div>`;
    }
    
    
    function esCorrecta(elemento, idPregunta) {
        let divs = document.getElementsByClassName('options' + idPregunta);
        let textoSeleccionado = '';
        for (let i = 0; i < divs.length; i++) {
            divs[i].classList.remove('selected');
            if (divs[i] === elemento) {
                textoSeleccionado = (divs[i].textContent || divs[i].innerText);
                textoSeleccionado = textoSeleccionado.substring(textoSeleccionado.indexOf('.') + 1, textoSeleccionado.length).trim();
            }
        }
        elemento.classList.add('selected');
    
    
        let temp = listaPreguntas.find(p => p.Id === idPregunta);
        let texto = elemento.innerText;
        let respuestSeleccionada = (texto.substring(texto.indexOf('.') + 1, texto.length)).trim();
        examen.select = respuestSeleccionada;
        examen.pregunta = temp;
        // alert(temp.respuestas[temp.correcta])
        // alert(elemento.innerText);
        // console.log(temp)
        //   alert(idPregunta)
        // alert(respuestSeleccionada)
        /*
        if (temp.respuestas[temp.correcta] === respuestSeleccionada.trim()) {
            alert("Correcto" );
            
        }else{
            alert('Incorrecto')
        }
        console.log("SELECCION: "+ respuestSeleccionada)
        console.log("TRUE: "+ temp.respuestas[temp.correcta])
        */
    
    }
    
    
    // Obtener el botón por su ID
    const btnNext = document.getElementById('btn-next');
    
    // Agregar un evento de clic al botón
    btnNext.addEventListener('click', function () {
        let texto = examen.select.trim();
        if (examen.pregunta.respuestas[examen.pregunta.correcta].trim() === examen.select.trim()) {
            examen.contadorCorrectas++;
        }
        if (contador < listaPreguntasCargadas.length) {
            if (texto !== '') {
                // Obtener la pregunta actual
                let pregunta = listaPreguntasCargadas[contador];
                let respuestas = cargarRespuestas2(pregunta.respuestas, pregunta.Id);
    
                // Verificar si la respuesta seleccionada es correcta
    
    
                // Avanzar al siguiente contador de pregunta
                contador++;
    
                // Generar la siguiente pregunta
                generateQuestion(contador, pregunta, respuestas);
    
                // Actualizar el título de la pregunta
                pTitulo.innerHTML = `Pregunta ${contador}/${listaPreguntasCargadas.length}`;
    
                // Limpiar la selección
                examen.select = '';
    
            } else {
                alert("¡Aún no has seleccionado una respuesta!");
            }
        } else {
            // Si no quedan preguntas, mostrar el resultado
            if (texto !== '') {
                pTitulo.innerHTML = "Resumen de la prueba teórica";
                parrafo.innerHTML = '';
    
                const totalPreguntas = listaPreguntasCargadas.length;
                let nota = Math.round(examen.contadorCorrectas / totalPreguntas * 100);
                mostrarResultadoExamenAzar(totalPreguntas, nota);
                btnNext.style.display = 'none';
                clearTimeout(timeoutID);
    
    
            } else {
                alert("¡Aún no has seleccionado una respuesta!");
            }
        }
    });
    
    function mostrarResultadoExamenAzar(totalPreguntas, nota) {
    
        divPreguntas.innerHTML = `
        <div class="resultado" style="margin: 20px; text-align: center;">
            Total de preguntas: <b>${totalPreguntas}</b><br>
            Puntaje mínimo: <b>70</b><br>
            Puntaje máximo: <b>100</b><br><br>
            Total de preguntas malas: <b>${totalPreguntas - examen.contadorCorrectas}</b><br>
            Total de preguntas buenas: <b>${examen.contadorCorrectas}</b><br>
            Total obtenido: <b>${nota}</b><br><br>
            Resultado: <b>${nota > 70 ? "Aprobado" : "Reprobado"}</b>
        </div>
    `;
    
    
        divPreguntas.innerHTML += `
    <div style="align-items: center; text-align: center; margin: 20px;">
        <button id="btn-exit" onclick="salir()">Continuar</button>
    </div>
    `;
    
    }
    function temporizador() {
        alert("Tiempo finalizado.");
        let totalPreguntas = listaPreguntasCargadas.length;
        btnNext.style.display = 'none';
        mostrarResultadoExamenAzar(totalPreguntas, Math.round(examen.contadorCorrectas / totalPreguntas * 100));
    }
    
    
    function getTema(clave) {
        let mapa = {};
    
        mapa['tema1'] = 'Aspectos generales del tránsito y la seguridad vial';
        mapa['tema2'] = 'Legislación de tránsito';
        mapa['tema3'] = 'Factor vía y su entorno';
        mapa['tema4'] = 'Factor vehículo';
        mapa['tema5'] = 'Factor humano';
        mapa['tema6'] = 'Normas de circulación';
        mapa['tema7'] = 'Rotondas';
        mapa['tema8'] = 'El conductor y la contaminación ambiental';
        mapa['tema9'] = 'Conducción técnica económica eficiente';
        mapa['tema10'] = 'Conducción en motocicleta';
        return mapa[clave];
    }
    function eliminarProgreso() {
        const item = localStorage.getItem('avance');
        if (item !== null) {
            let resultado = confirm("¿Desea eliminar tu progreso 📈?\n Este proceso es irreversible.");
            if (resultado) {
                localStorage.removeItem('avance');
                window.location.reload();
            }
    
        } else {
            alert("¡Aún no tiene ningún progreso a borrar! 😀")
        }
    }
    
    function actualizarNotaTema(tema, nuevaNota) {
        avance = JSON.parse(localStorage.getItem('avance'));
    
        if (avance) {
            // Verifica si el tema ya existe en el array
            const temaExiste = avance.some(item => item.tema === tema);
    
            if (temaExiste) {
                // Actualiza la nota del tema existente
                avance = avance.map(item =>
                    item.tema === tema ? { ...item, nota: nuevaNota } : item
                );
            } else {
                // Agrega un nuevo tema con la nota
                avance.push({ tema, nota: nuevaNota });
            }
    
            localStorage.setItem('avance', JSON.stringify(avance));
        } else {
            // Si no hay datos en localStorage, crea un nuevo array con el tema y la nota
            avance = [{ tema, nota: nuevaNota }];
            localStorage.setItem('avance', JSON.stringify(avance));
        }
    }
    
    function desactivarEvitarRefresco() {
        if (handler) {
            window.removeEventListener('beforeunload', handler);
            handler = null; // Limpiar la referencia
        }
    }
    
    function evitarRefresco() {
        const handler = (event) => {
            if (confirm("¿Estás seguro de que quieres abandonar esta página?")) {
                return;
            } else {
                event.preventDefault();
            }
        };
    
        // Añadir el listener
        window.addEventListener('beforeunload', handler);
    
        // Devolver el handler para poder removerlo más tarde
        return handler;
    }
    
    function checkConnection() {
        if (navigator.onLine) {
            alert("Conectado a Internet");
        } else {
            alert("Desconectado de Internet");
        }
    }
