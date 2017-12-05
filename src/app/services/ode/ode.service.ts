import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class OdeService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: Http) { }

  createOde(newOde) {
    this.http.post(this.baseUrl + '/ode', newOde).subscribe();
    console.log('Posted:' + newOde);
  }

}
