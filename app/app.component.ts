import {Component, provide} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_DIRECTIVES} from 'angular2/common';

import {SearchResultsComponent} from './search/search-results/search-results.component';
import {SearchComponent} from './search/search.component';
import {UserProfileComponent} from './search/user-profile/user-profile.component';
import {ScrollService} from './scroll/scroll.service';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [FORM_DIRECTIVES, ScrollService]
})
@RouteConfig([
    {path: '/search', name: 'Search', component: SearchComponent, useAsDefault: true},
    {path: '/search-results/:login/:page', name: 'SearchResults', component: SearchResultsComponent},
    {path: '/user/:login/details', name: 'UserProfile', component: UserProfileComponent}
])
export class AppComponent { }
