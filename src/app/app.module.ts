import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AuthGuard } from './shard/auth.guard';
import { CookieModule } from 'ngx-cookie';

import { NotFoundComponent } from './shard/notfound.component';

import { HeaderComponent } from './shard/app.header.component';
import { FooterComponent } from './shard/app.footer.component';
import { HelloComponent } from './shard/hello.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CookieModule.forRoot(),
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HelloComponent,
        NotFoundComponent,
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent, HeaderComponent],
})
export class AppModule { }
