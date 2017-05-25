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

import { HeaderComponent } from '../shard/app.header.component';
import { FooterComponent } from '../shard/app.footer.component';

import { DevicesComponent } from './devices.component';
import { DeviceService } from './device.service';
import { DeviceRoutingModule } from './device.routing';
import { MyDeviceType } from './pipe';

@NgModule({
    imports: [
         HttpModule,
            RouterModule,
            BrowserModule,
            FormsModule,
            CommonModule,
            FileUploadModule,
            DeviceRoutingModule,
            Ng2PaginationModule,
            CookieModule.forRoot()
    ],
    exports: [],
    declarations: [
        DevicesComponent,
        MyDeviceType,
        HeaderComponent,
        FooterComponent
    ],
    providers: [DeviceService, AuthGuard],
    bootstrap: [DevicesComponent, HeaderComponent]
})
export class DeviceModule { }
