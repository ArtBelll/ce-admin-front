import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivateChild {
    constructor(private userService: UserService, private router: Router) { }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isAuth = this.userService.isAuth();
        if (!isAuth) this.router.navigate(['/login']);
        return this.userService.isAuth();
    }
}