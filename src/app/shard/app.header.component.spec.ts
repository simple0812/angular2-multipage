import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, Component, DebugElement } from '@angular/core';
import { Router } from '@angular/router';

import { RouterStub }   from '../testing/router-stub';
import {  RouterLinkStubDirective } from '../testing/router.link.stub.directive';
import {  RouterOutletStubComponent } from '../testing/router.outlet.stub.component';
import {  CookieService } from 'ngx-cookie';

import { HeaderComponent } from './app.header.component';

let comp: HeaderComponent;
let fixture: ComponentFixture<HeaderComponent>;
let cookieService: CookieService;

class CookieServiceStub {
    public get(name: string): string {
        return 'test';
    }
}

describe('App HeaderComponent', () => {
    beforeEach( async(() => {
        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            declarations: [ HeaderComponent, RouterLinkStubDirective ],
            schemas:      [ NO_ERRORS_SCHEMA ],
            providers: [
            { provide: CookieService, useClass: CookieServiceStub },
            { provide: XHRBackend, useClass: MockBackend },
            { provide: Router, useClass: RouterStub }
            ]
        }).compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(HeaderComponent);
            comp    = fixture.componentInstance;
            cookieService = TestBed.get(CookieService);
        });
    }));
    
    beforeEach(() => {
        fixture.detectChanges();
    });
    
    it('can instantiate it', () => {
        expect(comp).not.toBeNull();
    });
    
    it('can get user info', () => {
        let de = fixture.debugElement.query(By.css('.dropdown-toggle'));
        let el = de.nativeElement;
        expect(el.textContent).toBe('test');
    });
    
    it('user info is empty when no cookie', () => {
        let de = fixture.debugElement.query(By.css('.dropdown-toggle'));
        let el = de.nativeElement;
        
        spyOn(cookieService, 'get').and.returnValue(' ');
        fixture.detectChanges();
        expect(el.textContent.trim()).toEqual('');
    });
});
