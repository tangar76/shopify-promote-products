if (typeof PromoteProductsSlider !== 'function') {
  class PromoteProductsSlider extends HTMLElement {
    constructor() {
      super();
      this.list = this.querySelector('.promote-products--list');
      this.buttonNext = this.querySelector('[name=next]');
      this.buttonPrev = this.querySelector('[name=prev]');

      this.toggleActionsVisibility();
      const resizeObserver = new ResizeObserver(this.toggleActionsVisibility.bind(this));
      resizeObserver.observe(this.list);
      this.buttonNext.addEventListener('click', this.onButtonClick.bind(this));
      this.buttonPrev.addEventListener('click', this.onButtonClick.bind(this));
    }

    toggleActionsVisibility() {
      if ((this.list.scrollWidth - this.list.clientWidth) > 0) {
        this.buttonNext.hidden = false;
        this.buttonPrev.hidden = false;
      } else {
        this.buttonNext.hidden = true;
        this.buttonPrev.hidden = true;
      }
    }

    onButtonClick(event) {
      const button = event.currentTarget;
      const step = button.dataset.step || 1;
      const itemOffset = this.list.children[0].clientWidth;

      event.preventDefault();
      this.listScrollPosition =
        button.name === 'next'
          ? this.list.scrollLeft + step * itemOffset
          : this.list.scrollLeft - step * itemOffset;
      this.list.scrollTo({
        left: this.listScrollPosition,
      });
    }
  }
  
  customElements.define('promote-products--slider', PromoteProductsSlider);
}
