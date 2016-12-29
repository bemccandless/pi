import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Temperature } from './temperature';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TemperatureService {
    private backendIp = "192.168.2.11";
    private backendPort = "3000";
    private backendUrl = "http://" + this.backendIp + ":" + this.backendPort;

    constructor(private http: Http) { }

    getTemperature(): Observable<Temperature> {
        return this.http.get(this.backendUrl + '/temperature').map((response: Response) => <Temperature> response.json());
    }

}
