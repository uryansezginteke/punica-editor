import * as punica from 'punica';
import view from './view';

export function create(): typeof punica {
  return <typeof punica>{
    view
  };
}
