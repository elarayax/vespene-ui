// assets/components/molecules/contenido.js
import { Texto } from '../atoms/texto.js';
import { Imagen } from '../atoms/imagen.js';
import { Enlace } from '../atoms/link.js';
import { Lista } from '../atoms/lista.js';
import { Input } from '../atoms/input.js';
import { Columnas } from './columnas.js';
import { Tabla } from '../atoms/tabla.js';
import { Formulario } from './formulario.js';


const componentes = {
    texto: (item) => Texto(item.contenido, item.clase, item.tag),
    imagen: (item) => Imagen(item.url, item.clase, item.nombre),
    enlace: (item) => Enlace(item.enlace, item.clase, item.contenido),
    lista: (item) => Lista(item.items, item.clase),
    input: (item) => Input(item),
    columnas: (item) => Columnas(item.columnas),
    tabla: (item) => Tabla(item.headers, item.filas),
    formulario: (item) => Formulario(item.contenido, item.boton),
};

export const BloqueContenido = (elementos) => {
    // Si elementos no es un array o está vacío, no mostrará nada
    if (!elementos || !Array.isArray(elementos)) return '';

    return `
        <div class="content">
            ${elementos.map(item => {
                const render = componentes[item.tipo];
                return render ? render(item) : '';
            }).join('')}
        </div>
    `;
};