import { Texto } from '../atoms/texto.js';

export const Footer = (copy) => {
    return `
    <footer class="footer has-background-dark has-text-white">
        <div class="content has-text-centered">
            ${Texto(copy, 'has-text-white', 'p')}
        </div>
    </footer>`;
};