import { platformBrowser } from '@angular/platform-browser';
import { decorateModuleRef } from '../../app/environment';

import { ConsumableModuleNgFactory } from 
    '../compiled/src/app/consumable/consumable.module.ngfactory';

export function main(): Promise<any> {
  return platformBrowser()
    .bootstrapModuleFactory(ConsumableModuleNgFactory)
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}

export function bootstrapDomReady() {
  document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();
