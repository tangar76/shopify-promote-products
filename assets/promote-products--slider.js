if (typeof PromoteProductsSlider !== 'function') {
  class PromoteProductsSlider extends HTMLElement {
    constructor() {
      super();
      this.list = this.querySelector('.promote-products--list');
    }
  }
  
  customElements.define('promote-products--slider', PromoteProductsSlider);
}
