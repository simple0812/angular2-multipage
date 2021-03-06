import { platformBrowser } from '@angular/platform-browser';
import { decorateModuleRef } from '../environment';

import { DeviceModuleNgFactory } from '../../../compiled/src/app/device/device.module.ngfactory';

export function main(): Promise<any> {
  return platformBrowser()
    .bootstrapModuleFactory(DeviceModuleNgFactory)
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}

export function bootstrapDomReady() {
  document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();
