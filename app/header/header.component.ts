import {Component, OnInit} from 'angular2/core';
import {Router, Instruction, Location} from 'angular2/router';
@Component({
    selector: 'header',
    template: `
        <h3>Angular2-based App</h3>
    `
})
export class HeaderComponent implements OnInit{
    isSearchPage: boolean;
    constructor(private _router: Router, private _location: Location) { }

    updateIsSearchPage(current: Instruction) {
        this.isSearchPage = this._router.isRouteActive(current);
    }

    ngOnInit() {
        this._router.subscribe(val => {
            this.isSearchPage = val === 'search';
        });
    }
}
