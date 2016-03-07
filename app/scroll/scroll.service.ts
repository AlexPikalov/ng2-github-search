import {Injectable} from 'angular2/core';
@Injectable()
export class ScrollService {
    scrollTop() {
        document.body.scrollTop = 0;
    }
}
