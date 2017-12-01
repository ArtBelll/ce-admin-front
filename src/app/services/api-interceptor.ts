import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import { Constants } from '../constants';

@Injectable()
export class APIInterceptor implements HttpInterceptor {

    readonly BASE_URL = "http://localhost:8081/api/admin/v1"

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const request = req.clone(
            {
                url: `${this.BASE_URL}/${req.url}`,
                setHeaders: {
                    'X-EventCalendar-Token': localStorage.getItem(Constants.TOKEN)
                }
            },
        );

        return next.handle(request)
            .do(event => { }, err => console.log(err.error.message));
    }
}