import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Temperature } from './temperature';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TemperatureService {
    constructor(private http: Http) { }

    getTemperature(): Observable<Temperature> {
        return this.http.get('/temperature').map((response: Response) => <Temperature> response.json());
    }

}
