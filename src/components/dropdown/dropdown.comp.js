
// const templateURL = new URL('dropdown.comp.html', import.meta.url);
// const styleURL = new URL('dropdown.comp.css', import.meta.url);
// let template;
// async function loadTemplate(element) {
//     if (template) {
//         return template;
//     }
//     const response = await fetch(templateURL);
//     template = await response.text();
//     template = `<link rel="stylesheet" href="${styleURL}" />${template}`;
//     if (element) {
//         element.innerHTML = template;
//     }
//     return template;
// }

import { loadTemplate } from "../template.js";

export class DropdownComponent extends HTMLElement {
    constructor(...args) {
        super(...args);
        this.attachShadow({mode: 'open'});
        
        loadTemplate(import.meta.url, 'dropdown.comp.html', 'dropdown.comp.css').then(t => {
            this.shadowRoot.innerHTML = t;
            this.shadowRoot.querySelector('.overlay').addEventListener('click', e => {
                this.removeAttribute('open');
            }, {passive: true});
        });
        this.addEventListener('focusin', e => {
            this.setAttribute('open', '');
        }, {passive: true});
    }
}

customElements.define('ide-dropdown', DropdownComponent);