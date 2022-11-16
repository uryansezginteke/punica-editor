class Grid {
  readonly element: HTMLElement;

  constructor(private container: HTMLElement) {
    // Label Container
    this.element = document.createElement('a');
    this.element.tabIndex = -1; // allows screen readers to read title, but still prevents tab focus.
    this.element.setAttribute('role', 'button');

    // Label (with support for progress)
    this.container.appendChild(this.element);
  }
}

export default Grid;
