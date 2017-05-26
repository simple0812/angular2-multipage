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

import { LoginComponent } from './login.component';
import { AccountComponent } from './account.component';
import { UserComponent } from './user.component';
import { LoginService } from './login.service';
import { UserRoutingModule } from './login.routing';

@NgModule({
    imports: [
        ShardModule,
        HttpModule,
        RouterModule,
        BrowserModule,
        FormsModule,
        CommonModule,
        FileUploadModule,
        UserRoutingModule,
        Ng2PaginationModule,
        CookieModule.forRoot()
    ],
    exports: [],
    declarations: [
        LoginComponent,
        AccountComponent,
        UserComponent
        ],
    providers: [LoginService, AuthGuard],
    bootstrap: [UserComponent]
})
export class AccountModule { }
