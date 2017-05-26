import { NgModule } from '@angular/core';
import {  RouterLinkStubDirective } from '../testing/router.link.stub.directive';
import {  RouterOutletStubComponent } from '../testing/router.outlet.stub.component';

@NgModule({
    imports: [
        
    ],
    declarations: [
        RouterLinkStubDirective,
        RouterOutletStubComponent
    ]
})
// fix error: Cannot determine the module for class...
export class FakeRouterModule {
}
