import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Constants } from '../constants';

@Injectable()
export class AuthGuard implements CanActivateChild {
    constructor(private userService: UserService, private router: Router) { }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isAuth = localStorage.getItem(Constants.TOKEN) !== null;;
        if (!isAuth) this.router.navigate(['/login']);
        return isAuth;
    }
}