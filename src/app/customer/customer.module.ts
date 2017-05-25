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

import { CustomersComponent } from './customers.component';
import { CustomerRoutingModule } from './customer.routing';
import { CustomerService } from './customer.service';

@NgModule({
    imports: [
        ShardModule,
        HttpModule,
        RouterModule,
        BrowserModule,
        FormsModule,
        CommonModule,
        FileUploadModule,
        CustomerRoutingModule,
        Ng2PaginationModule,
        CookieModule.forRoot()
    ],
    exports: [],
    declarations: [
        CustomersComponent
    ],
    providers: [CustomerService, AuthGuard],
    bootstrap: [CustomersComponent]

})
export class CustomerModule { }
