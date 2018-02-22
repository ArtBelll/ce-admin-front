import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from '../modeles/user';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import { Constants } from '../constants';
import { Organisation } from '../modeles/organisation';

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) { }

    login(email: string, password: string): Observable<void> {
        return this.httpClient.request<void>('post', 'auth/login',
            {
                body:
                    {
                        email: email,
                        password: password
                    },
                observe: 'response'
            })
            .map(response => {
                localStorage.setItem(Constants.TOKEN, response.body['token']);
            });
    }

    signUp(organisation: Organisation): Observable<void> {
        return this.httpClient.post<void>(§)
    }

    getMe(): Observable<User> {
        return this.httpClient.get<User>('users/me');
    }
}