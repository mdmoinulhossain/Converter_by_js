class HomeComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<a href="./index.html">&#8592; Back to Home</a>`;
  }
}

customElements.define("home-link", HomeComponent);
