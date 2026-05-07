import { Enlace } from '../atoms/link.js';
import { Boton } from '../atoms/boton.js';

export const Navbar = (logo, links) => {
    return `
    <nav class="navbar is-white shadow-sm" role="navigation">
        <div class="navbar-brand">
            <a class="navbar-item font-bold">${logo}</a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                ${links.map(link => 
                    Enlace(link.url, 'navbar-item', link.texto)
                ).join('')}
                <div class="navbar-item">
                    ${Boton('Login', 'button is-light')}
                </div>
            </div>
        </div>
    </nav>`;
};