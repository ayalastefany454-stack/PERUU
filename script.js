
// INFORMACIÓN DE LOS DESTINOS
const destinos = {

    machu: {
        nombre: "Machu Picchu",

        descripcion:
            "Machu Picchu es una antigua ciudadela inca ubicada en Cusco. Es uno de los lugares turísticos más famosos del mundo y fue declarada Patrimonio de la Humanidad."
    },

    montana: {
        nombre: "Montaña de 7 colores",

        descripcion:
            "Vinicunca, conocida como la Montaña de 7 colores, destaca por sus impresionantes franjas naturales de diferentes tonalidades. Está ubicada en la región Cusco."
    },

    huacachina: {
        nombre: "Huacachina",

        descripcion:
            "Huacachina es un oasis ubicado en Ica, rodeado de grandes dunas de arena. Es un destino ideal para disfrutar de paseos en vehículos areneros y practicar sandboard."
    },

    titicaca: {
        nombre: "Lago Titicaca",

        descripcion:
            "El lago Titicaca se encuentra entre Perú y Bolivia. Es conocido por sus islas flotantes de los Uros y por sus tradiciones culturales."
    }

};


// MOSTRAR INFORMACIÓN DEL DESTINO
function mostrarDestino(lugar) {

    const destino = destinos[lugar];

    if (!destino) return;

    document.getElementById("informacionDestino").innerHTML = `

        <h4 class="text-success fw-bold">
            ${destino.nombre}
        </h4>

        <p>
            ${destino.descripcion}
        </p>

        <p class="mb-0">
            ¡Anímate a conocer este maravilloso lugar!
        </p>

    `;

    const modal = new bootstrap.Modal(
        document.getElementById("destinoModal")
    );

    modal.show();

}


// CUESTIONARIO INTERACTIVO
let respondido = false;

function comprobarRespuesta(boton, correcta) {

    if (respondido) return;

    respondido = true;

    const resultado = document.getElementById("resultado");

    const opciones = document.querySelectorAll(".opcion");

    opciones.forEach(opcion => {
        opcion.disabled = true;
    });


    if (correcta) {

        resultado.textContent =
            "¡Excelente! Respuesta correcta. 🎉";

        resultado.style.color = "#16834c";

        boton.style.background = "#d4edda";

    } else {

        resultado.textContent =
            "¡Inténtalo nuevamente! La respuesta era Cusco.";

        resultado.style.color = "#dc3545";

        opciones.forEach(opcion => {

            if (opcion.textContent.trim() === "Cusco") {

                opcion.style.background = "#d4edda";

            }

        });

    }

}


// REINICIAR CUESTIONARIO
function reiniciarQuiz() {

    respondido = false;

    document.getElementById("resultado").textContent = "";

    document.querySelectorAll(".opcion").forEach(opcion => {

        opcion.disabled = false;

        opcion.style.background = "";

    });

}
