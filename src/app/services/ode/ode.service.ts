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

  getRandom(excludeIds, require) {
    const filter = {
      excludeIds,
      require
    };
    return this.http.post(baseUrl + '/random', filter);
  }

}
