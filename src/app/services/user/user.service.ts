import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

const baseUrl = environment.apiUrl + '/user';

@Injectable()
export class UserService {

  constructor() { }

}
