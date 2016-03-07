import 'angular2/testing';

import {SearchComponent} from './search.component';

describe('Search component', () => {
    var search;
    var router;

    beforeEach(() => {
        router = {
            navigate: () => {}
        };
        search = new SearchComponent(router);
    });

    describe('#onSearchSubmit', () => {
        it('should redirec to search results on search submit', () => {
            spyOn(search._router, 'navigate');
            search.onSearchSubmit();
            expect(search._router.navigate).toHaveBeenCalled();
        });
    });
});
