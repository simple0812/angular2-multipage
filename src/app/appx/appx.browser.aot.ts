import { platformBrowser } from '@angular/platform-browser';
import { decorateModuleRef } from '../environment';

import { AppxModuleNgFactory } from '../../../compiled/src/app/appx/appx.module.ngfactory';

export function main(): Promise<any> {
  return platformBrowser()
    .bootstrapModuleFactory(AppxModuleNgFactory)
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}

export function bootstrapDomReady() {
  document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();
