import 'angular2/testing';
import {ResponseOptions, Response, ResponseType} from 'angular2/http';
import {SearchService} from './search.service';
import {getMocks} from '../../utilities/test-utilities';

describe('Search Service', () => {
    var searchService;
    var mocks;
    beforeEach(() => {
        mocks = getMocks();
        searchService = new SearchService(mocks.getHttp());
    });

    describe('#getUsers', () => {
        it('should load a requested user', (done) => {
            var r = {foo: "bar"};
            searchService
                .getUsers('log', 1)
                .subscribe((res) => {
                    expect(res.json()).toEqual(r);
                    expect(res.status).toEqual(200);
                    done();
                });
            var resp = new ResponseOptions({body: r, status: 200});
            mocks.getConnection().mockRespond(new Response(resp));
        });

        it('should load first page by default', (done) => {
            var r = {foo: "bar"};
            spyOn(searchService._http, 'get').and.callThrough();
            searchService
                .getUsers('log')
                .subscribe((res) => {
                    expect(searchService._http.get).toHaveBeenCalledWith('https://api.github.com/search/users?q=log&page=1')
                    done();
                });
            var resp = new ResponseOptions({body: r, status: 200});
            mocks.getConnection().mockRespond(new Response(resp));
        });

        it('should load a requested user', (done) => {
            var r = {foo: "bar"};
            searchService
                .getUsers('log', 2)
                .subscribe((res) => {
                    expect(res.json()).toEqual(r);
                    expect(res.status).toEqual(400);
                    done();
                });
            var response = new Response(new ResponseOptions({body: r, status: 400, type: 3}));
            mocks.getConnection().mockRespond(response);
        });
    });
});
