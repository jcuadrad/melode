import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

const baseUrl = environment.apiUrl + '/auth';

@Injectable()
export class AuthService {

  public user;

  constructor(private http: Http) { }

  setUser(user) {
    this.user = user;
  }

  login() {
    return this.http.get(baseUrl + '/spotify/start')
    .map(response => response.json());
  }

  getMe(id) {
    return this.http.get(baseUrl + `/me/${id}`);
  }

  getMeBack() {
    console.log(this.user);
    return this.user;
  }

}
