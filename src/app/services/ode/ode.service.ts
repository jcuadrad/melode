import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

const baseUrl = environment.apiUrl + '/ode';

@Injectable()
export class OdeService {


  constructor(private http: Http) { }

  createOde(newOde) {
    return this.http.post(baseUrl, newOde);
  }

  getRandom(excludeIds) {
    const filter = {
      excludeIds
    };
    return this.http.post(baseUrl + '/random', filter)
     .map(response => response.json());
  }

}
