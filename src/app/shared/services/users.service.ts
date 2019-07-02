import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';


@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient
  ) {

  }


  getData(): Observable<object> {
    return this.httpClient.get<object>('http://demo.dsml.ru');
  }

}




