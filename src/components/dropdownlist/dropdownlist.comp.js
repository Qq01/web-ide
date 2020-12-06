import { loadTemplate } from "../template.js";

export class DropdownlistComponent extends HTMLElement {
    constructor(...args) {
        super(...args);
        this.attachShadow({mode: 'open'});
        loadTemplate(import.meta.url, 'dropdownlist.comp.html', 'dropdownlist.comp.css').then(t => {
            this.shadowRoot.innerHTML = t;
        });
    }
}

customElements.define('ide-dropdownlist', DropdownlistComponent);