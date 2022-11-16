export interface IView {
  /**
   * The DOM element for this view.
   */
  readonly element: HTMLElement;

  /**
   * A minimum width for this view.
   *
   * @remarks If none, set it to `0`.
   */
  readonly minimumWidth: number;

  /**
   * A minimum width for this view.
   *
   * @remarks If none, set it to `Number.POSITIVE_INFINITY`.
   */
  readonly maximumWidth: number;

  /**
   * A minimum height for this view.
   *
   * @remarks If none, set it to `0`.
   */
  readonly minimumHeight: number;

  /**
   * A minimum height for this view.
   *
   * @remarks If none, set it to `Number.POSITIVE_INFINITY`.
   */
  readonly maximumHeight: number;

  /**
   * This will be called by the {@link GridView} during layout. A view meant to
   * pass along the layout information down to its descendants.
   */
  layout(width: number, height: number, top: number, left: number): void;

  /**
   * This will be called by the {@link GridView} whenever this view is made
   * visible or hidden.
   *
   * @param visible Whether the view becomes visible.
   */
  setVisible?(visible: boolean): void;
}

export default IView;
