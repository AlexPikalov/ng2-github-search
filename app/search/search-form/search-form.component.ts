import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {UserService} from '../../user/user.service';
import {GithubUser} from '../../user/github-user';

@Component({
    selector: 'div.search-form-wrapper',
    templateUrl: 'app/search/search-form/search-form.component.html',
    providers: [UserService]
})
export class SearchFormComponent {
    @Input()
    query: String;

    submitted: Boolean;

    userNotFound: Boolean;

    @Output()
    onSearchSubmit = new EventEmitter<String>()

    constructor() {
        this.submitted = false;
        this.userNotFound = false;
    }
    onSubmitHandler(form) {
        this.submitted = true;
        if (!form.valid) {
            console.error('[Invalid form]:', form);
            return ;
        }
        this.onSearchSubmit.emit(this.query);
    }
}
