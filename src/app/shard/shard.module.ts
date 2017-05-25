import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './app.header.component';
import { FooterComponent } from './app.footer.component';
import { HelloComponent } from './hello.component';
import { NotFoundComponent } from './notfound.component';

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        HelloComponent,
        NotFoundComponent
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        HelloComponent,
        NotFoundComponent
    ],
    providers: [],
    bootstrap: [ HelloComponent ],
})
export class ShardModule { }
