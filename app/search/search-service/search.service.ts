import {Injectable} from 'angular2/core';
import {GithubUser} from '../../user/github-user';
import {Http, Headers, RequestOptions, URLSearchParams} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class SearchService{
    Headers: Function = Headers;
    RequestOptions: Function = RequestOptions;
    constructor(
        private _http: Http) { }

    private _searchUsersUrl = 'https://api.github.com/search/users';

    getUsers(userId: String, page?: number) {
        if (typeof page === 'undefined') {
            page = 1;
        }
        var url = `${this._searchUsersUrl}?q=${userId}&page=${page}`;
        return this._http.get(url);
            // .map(res => res.json())
            // .catch(err => Observable.throw(err.json() || 'Server error'));
    }
}
