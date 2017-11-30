import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
    selector: 'main-menu',
    templateUrl: 'main-menu.component.html',
    styleUrls: ['main-menu.component.scss']
})

export class MainMenuComponent implements OnInit {

    navbarHidden = false;

    constructor() { }

    ngOnInit() { 
    }
}