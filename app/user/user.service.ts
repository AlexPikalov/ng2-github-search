import {Injectable} from 'angular2/core';
import {GithubUser} from './github-user';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserService{
    constructor(private _http: Http) { }

    private _usersUrl = 'https://api.github.com/users';

    getOneUser(userLogin: String): Observable<Response> {
        var url = `${this._usersUrl}/${userLogin}`;
        return this._http.get(url);
    }
}
