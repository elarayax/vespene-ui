import { Navbar } from '../assets/components/organisms/navbar.js';
import { Footer } from '../assets/components/organisms/footer.js';

const menuLinks = [
    { texto: "Inicio", url: "home.html" },
    { texto: "Contacto", url: "contacto.html" }
];

export const renderPagina = (contenidoHTML) => {
    const root = document.getElementById('root');
    
    root.innerHTML = `
        ${Navbar("FLAMEN", menuLinks)}
        <main id="main-content">
            ${contenidoHTML}
        </main>
        ${Footer("© 2026 Byron Aros - Ingeniería y Docencia")}
    `;
};