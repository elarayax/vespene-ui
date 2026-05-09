import { renderPagina } from './layout.js';
import { bloques } from '../assets/components/organisms/modelos.js';

const datosBloque = {
    clase: ""
}

const contenido = [
    {
        tipo: "boton",
        texto: "Solicitar Refuerzos",
        clase: "button is-warning is-large",
        onclick: "btn()"
    },
    {
        tipo: "modal",
        id: "modal-refuerzos",
        titulo: "Centro de Mando",
        contenido: [
            { tipo: "texto", tag: "p", contenido: "Seleccione el tipo de unidad a desplegar:" },
            { 
                tipo: "formulario", 
                boton: "Desplegar",
                onclick: "alerta()",
                contenido: [
                    { tipo: "input", placeholder: "Cantidad de Marines", inputTipo: "number" }
                ]
            }
        ]
    },
    {
        tipo: "columnas",
        columnas: [
            {
                clase: "is-4",
                contenido: [{ tipo: "imagen", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnb8q1nC17tIxcYUYlipgJLiRZJnHGUVCueg&s" }]
            },
            {
                clase: "is-4",
                contenido: [
                    { tipo: "texto", tag: "h1", contenido: "Soy un título", clase: "title" },
                    { tipo: "texto", tag: "p", contenido: "aquí puede ir más texto", clase: "text" },
                    { tipo: "imagen", clase: "is-4", url: "https://animeargentina.net/wp-content/uploads/2022/09/Emilia-rezero-23-de-septiembre-1024x576.jpg"}
                ]
            },
            {
                clase: "is-4",
                contenido: [
                    {
                        tipo: "texto",
                        tag: "p",
                        contenido: "Se pueden 3",
                        class: "text hast-text-white"
                    }
                ]
            }
        ]
    },
    {
        tipo: "tabla",
        headers: ["ID", "Nombre"],
        filas: [["1", "Byron"], ["2", "Andres"]]
    },
    {
        tipo: "formulario",
        // Pasamos un objeto para el botón con parámetros y métodos personalizados
        boton: {
            texto: "Guardar Datos",
            clase: "button is-success is-large",
            onclick: "alerta()", // Esto ahora aparecerá en el HTML
            id: "btn-principal"
        },
        contenido: [
            { tipo: "texto", tag: "h3", contenido: "Suscríbete" },
            { tipo: "input", placeholder: "Tu Email", inputTipo: "text"}
        ]
    }
];
renderPagina(bloques(datosBloque, contenido));