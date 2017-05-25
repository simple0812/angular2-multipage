import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'hello',
  providers: [],
  template: `
   <h1>hello world, {{title}}</h1>
 `
})
export class HelloComponent implements OnInit {
  public title = 'Tour of Heroes';
  public isshow = true;

  constructor( private http: Http) {
  }

  public ngOnInit(): void {
     this.http.get('/').subscribe((res: Response) => {
        this.title = res.text();
     }, (err) => {
        console.log(err.message);
    });
  }
}
