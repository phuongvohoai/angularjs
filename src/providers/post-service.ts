import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Constants } from '../constants/constants';

@Injectable()
export class PostService {
    private postURI: string = Constants.RestfulAPIURL + "/posts?Latitude=10.866350161079781&Longitude=106.802237033844";
    posts: any;

    constructor(public http: Http) {
        console.log('Hello PostService Provider');
    }

    load() {
        if (this.posts) {
            return Promise.resolve(this.posts);         // already loaded data
        }
        return new Promise(resolve => {                 // don't have the data yet
            this.http.get(this.postURI)
                .map(res => res.json())
                .subscribe(data => {
                    this.posts = data;
                    resolve(this.posts);
                    console.log(this.posts);
                });
        });
    }
}
