import * as tmp from './header.html';

export default class HeaderComponent extends HTMLElement {

    constructor() {
        super();

        let sr = this.attachShadow({mode: 'open'});
        sr.appendChild(tmp.content);
    }
};

window.customElements.define('hw-header', HeaderComponent);
