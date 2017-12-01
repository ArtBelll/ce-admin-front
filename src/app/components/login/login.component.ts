import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {

    hidePassword = true;

    email = "artur.belogur@korbit.ru";
    password = "superuser";

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() { }

    login() {
        this.userService.login(this.email, this.password)
            .subscribe(user => this.router.navigate(['']));
    }

    getMe() {
        this.userService.getMe()
            .subscribe(user => console.log(user));
    }
}