declare module 'punica' {
  /**
   *
   */
  export namespace view {
    /**
     *
     * @param message The message to show.
     * @param items A set of items that will be rendered as actions in the message.
     * @return A thenable that resolves to the selected item or `undefined` when being dismissed.
     */
    export function showInformationMessage<T extends string>(
      message: string,
      ...items: T[]
    ): Array<T | undefined>;
  }
}
