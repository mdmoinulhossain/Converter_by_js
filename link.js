class HomeComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<a href="./index.html">Home</a>`;
  }
}

customElements.define("home-link", HomeComponent);
