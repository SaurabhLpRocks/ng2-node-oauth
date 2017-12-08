import { Component } from '@angular/core';
import { Headers, Http, Request, RequestOptions, Response, XHRBackend } from '@angular/http';
import { environment } from '../environments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  userInfo:any;

  constructor(private http: Http){}

  onLogin(): void {
    this.http.get(environment.loginUrl,null).subscribe
      (res => {
         console.log('Login Service success', res);
      },
      err =>{
        console.log('Login Service failed', err);
      });

    }
}
