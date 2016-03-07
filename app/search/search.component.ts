import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {SearchFormComponent} from './search-form/search-form.component';
@Component({
    selector: 'search-page',
    templateUrl: 'app/search/search.html',
    directives: [SearchFormComponent]
})
export class SearchComponent {
    query: String;

    constructor(private _router: Router) {}

    onSearchSubmit(res: any) {
        this._router.navigate(['SearchResults', {login: <String>res, page: 1}]);
    }
}
