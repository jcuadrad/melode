import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: Http) { }

  login() {
    return console.log('Going to spotify!');
  }

}
