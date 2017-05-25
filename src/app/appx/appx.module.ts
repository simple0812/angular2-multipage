import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { Ng2PaginationModule } from 'ng2-pagination/dist/ng2-pagination';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';
import { AuthGuard } from '../shard/auth.guard';
import { Routes, RouterModule, Router } from '@angular/router';

import { ShardModule } from '../shard/shard.module';

import { AppxRoutingModule } from './appx.routing';
import { AppxService } from './appx.service';
import { AppxComponent } from './appx.component';

@NgModule({
    imports: [
        ShardModule,
        HttpModule,
        RouterModule,
        BrowserModule,
        FormsModule,
        CommonModule,
        FileUploadModule,
        AppxRoutingModule,
        Ng2PaginationModule,
        CookieModule.forRoot()
    ],
    exports: [
        
    ],
    declarations: [
        AppxComponent,
    ],
    providers: [AppxService, AuthGuard],
    bootstrap: [AppxComponent]
})
export class AppxModule { }
