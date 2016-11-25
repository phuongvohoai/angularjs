import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Constants } from '../constants/constants';

@Injectable()
export class AuthService {

  private link: string = Constants.RestfulAPIURL + "auth";
  
  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

  login(username: string, password: string) {
    var data = JSON.stringify({ username: username, password: password });
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.post(this.link, data, {headers: headers})
        .map(response => response.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          console.log('Error!');
          resolve(error);
        });
    });
  }
}
