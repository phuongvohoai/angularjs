import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { Constants } from '../constants/constants';

@Injectable()
export class SignUpService {
    private apiURL:string = Constants.RestfulAPIURL + "users";
    constructor(private http: Http) { }

    postUserAPI(user: User)
    {
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, method: "post" });
        return this.http.post(this.apiURL, body,options)
                                   .map(res => res.json())
                                   .catch(this.handleError);
    }

    private handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }
}