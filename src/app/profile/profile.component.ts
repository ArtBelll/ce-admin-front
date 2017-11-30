import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'profile',
    templateUrl: 'profie.component.html'
})

export class ProfileComponent implements OnInit {
    
    test = "hello";

    constructor() { }

    ngOnInit() { }
}