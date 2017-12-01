import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class APIInterceptor implements HttpInterceptor {

    readonly BASE_URL = "http://localhost:8081/api/admin/v1"

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        const authReq = req.clone(
            { 
                url: `${this.BASE_URL}/${req.url}`
            },
        );

        return next.handle(authReq);
    }
}