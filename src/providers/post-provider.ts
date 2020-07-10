import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostProvider {
    server: string = 'http://localhost/server_api';

    constructor(public http: HttpClient) {

    }

    postData(body, file){
        let type = 'application/json; charset=utf-8';
        let headers = new HttpHeaders({ 'Content-Type': type });
        let options = {
            headers: headers
        }

        return this.http.post(this.server + file, JSON.stringify(body), options).map(res => res);
    }
}
