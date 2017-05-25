import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowser } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { decorateModuleRef } from '../../app/environment';
import { bootloader } from '@angularclass/hmr';

import { AppxModule } from './index';

export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppxModule)
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}

bootloader(main);
