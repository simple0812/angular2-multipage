import { platformBrowser } from '@angular/platform-browser';
import { decorateModuleRef } from './app/environment';

import { ShardModuleNgFactory } from '../compiled/src/app/shard/shard.module.ngfactory';

export function main(): Promise<any> {
  return platformBrowser()
    .bootstrapModuleFactory(ShardModuleNgFactory)
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}

export function bootstrapDomReady() {
  document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();
