import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

const baseUrl = environment.apiUrl + '/auth';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login() {
    return console.log('Going to spotify!');
  }

}
