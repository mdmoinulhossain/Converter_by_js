class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    </body>
    </html>`;
  }
}

customElements.define("footer-comp", FooterComponent);
