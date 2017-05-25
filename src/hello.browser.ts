import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowser } from '@angular/platform-browser';
import { ShardModule } from './app/shard/shard.module';
import { NgModule } from '@angular/core';


import { decorateModuleRef } from './app/environment';
import { bootloader } from '@angularclass/hmr';

export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(ShardModule)
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}

bootloader(main);
