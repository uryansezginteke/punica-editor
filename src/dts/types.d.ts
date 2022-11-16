import * as punica from 'punica';

declare global {
  interface Window {
    punica: typeof punica;
  }
}
