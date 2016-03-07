System.register(['angular2/testing', 'angular2/http', './search.service', '../../utilities/test-utilities'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, search_service_1, test_utilities_1;
    return {
        setters:[
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (search_service_1_1) {
                search_service_1 = search_service_1_1;
            },
            function (test_utilities_1_1) {
                test_utilities_1 = test_utilities_1_1;
            }],
        execute: function() {
            describe('Search Service', function () {
                var searchService;
                var mocks;
                beforeEach(function () {
                    mocks = test_utilities_1.getMocks();
                    searchService = new search_service_1.SearchService(mocks.getHttp());
                });
                describe('#getUsers', function () {
                    it('should load a requested user', function (done) {
                        var r = { foo: "bar" };
                        searchService
                            .getUsers('log', 1)
                            .subscribe(function (res) {
                            expect(res.json()).toEqual(r);
                            expect(res.status).toEqual(200);
                            done();
                        });
                        var resp = new http_1.ResponseOptions({ body: r, status: 200 });
                        mocks.getConnection().mockRespond(new http_1.Response(resp));
                    });
                    it('should load first page by default', function (done) {
                        var r = { foo: "bar" };
                        spyOn(searchService._http, 'get').and.callThrough();
                        searchService
                            .getUsers('log')
                            .subscribe(function (res) {
                            expect(searchService._http.get).toHaveBeenCalledWith('https://api.github.com/search/users?q=log&page=1');
                            done();
                        });
                        var resp = new http_1.ResponseOptions({ body: r, status: 200 });
                        mocks.getConnection().mockRespond(new http_1.Response(resp));
                    });
                    it('should load a requested user', function (done) {
                        var r = { foo: "bar" };
                        searchService
                            .getUsers('log', 2)
                            .subscribe(function (res) {
                            expect(res.json()).toEqual(r);
                            expect(res.status).toEqual(400);
                            done();
                        });
                        var response = new http_1.Response(new http_1.ResponseOptions({ body: r, status: 400, type: 3 }));
                        mocks.getConnection().mockRespond(response);
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=search.service.spec.js.map