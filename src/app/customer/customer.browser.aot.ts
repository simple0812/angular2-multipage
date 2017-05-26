import { platformBrowser } from '@angular/platform-browser';
import { decorateModuleRef } from '../environment';

import { CustomerModuleNgFactory } from '../../../compiled/src/app/customer/customer.module.ngfactory';

export function main(): Promise<any> {
  return platformBrowser()
    .bootstrapModuleFactory(CustomerModuleNgFactory)
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}

export function bootstrapDomReady() {
  document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();
