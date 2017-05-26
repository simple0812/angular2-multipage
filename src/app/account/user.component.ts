import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user',
    template: `
        <header></header>
        <router-outlet></router-outlet>
        <footer></footer>
    `
})
export class UserComponent { }
