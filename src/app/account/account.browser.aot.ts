import { platformBrowser } from '@angular/platform-browser';
import { decorateModuleRef } from '../environment';

import { AccountModuleNgFactory } from '../../../compiled/src/app/account/account.module.ngfactory';

export function main(): Promise<any> {
  return platformBrowser()
    .bootstrapModuleFactory(AccountModuleNgFactory)
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}

export function bootstrapDomReady() {
  document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();
