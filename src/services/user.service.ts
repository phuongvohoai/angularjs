import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from '../models/user'

@Injectable()
export class UserService {

    public values: any;
    private userURL = "http://localhost:8080/api/users";
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    // Create new user
    public create(user: User) : Promise<User> {
        let body = JSON.stringify(new User(user.displayName, user.username, user.password, user.email, new Date()));
        return this.http
            .post(this.userURL, body, {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
}