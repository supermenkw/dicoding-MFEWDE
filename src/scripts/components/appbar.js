class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="app-bar__menu">
                <button id="hamburgerButton">☰</button>
            </div>
            <div class="app-bar__brand">
                <h1 aria-label="Nongky Website" tabindex="0"><a href="/">N🍽ngky</a></h1>
            </div>
            <nav id="navigationDrawer" class="app-bar__navigation">
                <ul>
                    <li><a href="#/home">Home</a></li>
                    <li><a href="#/favorite">Favorite</a></li>
                    <li><a href="#/about">About Us</a></li>
                </ul>
            </nav>
        `;

        this.querySelector('#hamburgerButton').addEventListener('click', this._clickEvent);
    }
}

customElements.define('app-bar', AppBar);
