import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';


@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient
  ) {

  }


  getData() {
    const headers = new HttpHeaders({authorization: `Basic ${btoa('admin:password')}`});
    const options = { headers: headers };
    return this.httpClient.get('http://demo.dsml.ru', options);
  }

}




