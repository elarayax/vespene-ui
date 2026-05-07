import { renderPagina } from './layout.js';
import { bloques } from '../assets/components/organisms/modelos.js';

const contenidoContacto = [
    { tipo: "texto", contenido: "Contáctanos", tag: "h1", clase: "title" },
    { tipo: "input", placeholder: "Tu Email", inputTipo: "email" },
    { tipo: "texto", tag: "button", contenido: "Enviar", clase: "button is-primary" }
];

renderPagina(bloques({ clase: "is-warning" }, contenidoContacto));