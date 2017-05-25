import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowser } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { bootloader } from '@angularclass/hmr';
import { decorateModuleRef } from '../../app/environment';

import { DeviceModule } from './index';

export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(DeviceModule)
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}

bootloader(main);
