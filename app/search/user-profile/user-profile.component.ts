import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {GithubUser} from '../../user/github-user';
import {UserService} from '../../user/user.service';
import {AvatarComponent} from '../../avatar-component/avatar.component';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'div.user-profile-wrapper.container',
    templateUrl: 'app/search/user-profile/user-profile.html',
    providers: [UserService],
    directives: [AvatarComponent]
})
export class UserProfileComponent implements OnInit {
    profile: GithubUser;

    userLogin: String;

    constructor(
        private _routeParams: RouteParams,
        private _userService: UserService) { }

    goBack() {
        history.back();
    }

    ngOnInit() {
        this.userLogin = this._routeParams.get('login');
        this.getUserDetails();
    }

    getUserDetails() {
        this._userService.getOneUser(this.userLogin)
            .subscribe(res => this._setUserDetailsToProfile(res.json()));
    }

    private _setUserDetailsToProfile(details: GithubUser) {
        this.profile = <GithubUser>Object.assign(this.profile || {}, details);
    }
}
