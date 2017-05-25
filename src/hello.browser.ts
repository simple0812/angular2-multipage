import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowser } from '@angular/platform-browser';
import { HelloComponent } from './app/shard/hello.component';
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { decorateModuleRef } from './app/environment';
import { bootloader } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
  ],
  declarations: [
    HelloComponent,
  ],
  providers: [],
  bootstrap: [ HelloComponent ],
})
class HelloModule { }

export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(HelloModule)
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}

bootloader(main);
