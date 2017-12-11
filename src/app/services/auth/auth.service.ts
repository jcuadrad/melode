import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';
import { User } from '../../models/user.model';

const baseUrl = environment.apiUrl + '/auth';

@Injectable()
export class AuthService {

  private loaded = false;
  public user;
  private userChange: Subject<User | null> = new Subject();

  // Observable string stream
  userChange$ = this.userChange.asObservable();

  constructor(private http: Http) { }

  setUser(user: User = null) {
    this.loaded = true;
    this.user = user;
    this.userChange.next(user);
  }

  login() {
    return this.http.get(baseUrl + '/spotify/start')
    .map(response => response.json());
  }

  me() {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl + '/me', options)
    .toPromise()
    .then(res => {
      const user = new User (res.json());
      this.setUser(user);
      return user;
    })
    .catch((err) => {
      if (err.status === 404) {
        this.setUser();
      }
    });
  }

  getUser() {
    return this.user;
  }

}
