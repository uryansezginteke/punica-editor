import * as punica from 'punica';

const view: typeof punica.view = {
  showInformationMessage: <T extends string>(
    message: string,
    ...items: T[]
  ): Array<T> => {
    console.log(message, items);
    return [];
  }
};

export default view;
