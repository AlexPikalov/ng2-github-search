// angular components
import {Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES, Router} from 'angular2/router';
// models
import {GithubUser} from '../../user/github-user';
// services
import {SearchService} from '../search-service/search.service';
import {ScrollService} from '../../scroll/scroll.service';
// components
import {PagerComponent} from '../../pager/pager.component';
import {SearchFormComponent} from '../search-form/search-form.component';
import {AvatarComponent} from '../../avatar-component/avatar.component';

const FIRST_PAGE: number = 1;

@Component({
    selector: 'div.search-results',
    templateUrl: 'app/search/search-results/search-results.component.html',
    directives: [SearchFormComponent, PagerComponent, ROUTER_DIRECTIVES, AvatarComponent],
    providers: [SearchService]
})
export class SearchResultsComponent implements OnInit {
    result: GithubUser[] = [];

    error: String;

    submitted: boolean = false;

    totalCount: number;

    itemsPerPage: number = 30;

    currentPage: number;

    query: String;

    private _pagerHandler: Function;

    constructor(private _searchService: SearchService,
        private _scroll: ScrollService,
        private _routeParams: RouteParams,
        private _router: Router) {

        }

    onSearchSubmit(login: String) {
        this.query = login;
        this._router.navigate(['SearchResults', {login: login, page: FIRST_PAGE}]);
    }

    onSearchResults(res: any) {
        this.result = <GithubUser[]>res.items;
        this.totalCount = res.total_count;
    }

    showDetails(user: GithubUser) {
        console.log('result>', user);
    }

    onNewPage(newPage: number) {
        this._router.navigate(['SearchResults', {login: this.query, page: newPage}]);
    }

    private _requestFactory(login: String) {
        return (page: Number) => {
            this._scroll.scrollTop();
            this._searchService.getUsers(login, <number>page)
                .subscribe(
                        (users: any) => {
                            this.error = null;
                            this.onSearchResults(users.json());
                            this.submitted = true;
                        },
                        err => {
                            var message = err.json().message;
                            console.error('[GH Cli Error]: %s', message);
                            this.result = [];
                            this.error = message;
                            this.submitted = true;
                        });
        };
    }

    ngOnInit() {
        this.query = this._routeParams.get('login');
        this.currentPage = parseInt(this._routeParams.get('page')) || FIRST_PAGE;
        if (this.query !== null) {
            this._pagerHandler = this._requestFactory(this.query);
            this._pagerHandler(this.currentPage);
        }
    }

    private _isFirstPage(n: number): boolean {
        return n === FIRST_PAGE;
    }
}
