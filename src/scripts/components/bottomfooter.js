class BottomFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <ul>
            <li tabindex="0">Copyright © 2020 - Nongky Apps</li>
            <li tabindex="0">Made with <i class="fa fa-coffee" aria-hidden="true"></i> in Bandung.</li>
        </ul>
        `;
    }
}

customElements.define('bottom-footer', BottomFooter);
