class HomeComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button><a href="./index.html" style="text-decoration: none;">&#8592; Back to Home</a></button>`;
  }
}

customElements.define("home-link", HomeComponent);
