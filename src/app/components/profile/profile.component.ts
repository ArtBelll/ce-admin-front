import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {
    
    test = "hello";

    constructor() { }

    ngOnInit() { }
}