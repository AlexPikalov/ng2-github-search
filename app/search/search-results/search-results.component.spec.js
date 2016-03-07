System.register(['./search-results.component', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var search_results_component_1, Rx_1;
    return {
        setters:[
            function (search_results_component_1_1) {
                search_results_component_1 = search_results_component_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            describe('Search Result component', function () {
                var searchResults;
                var routerMock;
                var scrollMock;
                var routerParamsMock;
                var userSearchMock;
                beforeEach(function () {
                    routerMock = {
                        navigate: function () { }
                    };
                    spyOn(routerMock, 'navigate');
                    scrollMock = {
                        scrollTop: function () { }
                    };
                    spyOn(scrollMock, 'scrollTop');
                    routerParamsMock = {
                        get: function () { }
                    };
                    userSearchMock = {
                        getUsers: function () { }
                    };
                    searchResults = new search_results_component_1.SearchResultsComponent(userSearchMock, scrollMock, routerParamsMock, routerMock);
                });
                describe('#onSearchSubmit', function () {
                    it('should set taken query', function () {
                        var login = 'login';
                        searchResults.onSearchSubmit(login);
                        expect(searchResults.query).toBe(login);
                    });
                    it('should navigate to search results', function () {
                        var login = 'login';
                        searchResults.onSearchSubmit(login);
                        var args = searchResults._router.navigate.calls.argsFor(0)[0];
                        expect(args[0]).toEqual('SearchResults');
                        expect(args[1]).toEqual({ login: login, page: 1 });
                    });
                });
                describe('#onSearchResults', function () {
                    it('should set result', function () {
                        var items = [];
                        searchResults.onSearchResults({ items: items });
                        expect(searchResults.result).toBe(items);
                    });
                    it('should set result', function () {
                        var count = 6;
                        searchResults.onSearchResults({ total_count: count });
                        expect(searchResults.totalCount).toBe(count);
                    });
                });
                describe('#showDetails', function () {
                    it('should been stabbed', function () {
                        spyOn(console, 'log');
                        searchResults.showDetails();
                        expect(console.log).toHaveBeenCalled();
                    });
                });
                describe('#onNewPage', function () {
                    it('should navigate to search results', function () {
                        searchResults.query = 'login';
                        var page = 2;
                        searchResults.onNewPage(page);
                        var args = searchResults._router.navigate.calls.argsFor(0)[0];
                        expect(args[0]).toEqual('SearchResults');
                        expect(args[1]).toEqual({ login: searchResults.query, page: page });
                    });
                });
                describe('#ngOnInit', function () {
                    it('should save taken query', function () {
                        var login = 'query';
                        spyOn(routerParamsMock, 'get').and.returnValue(login);
                        searchResults._requestFactory = function () {
                            return function () { };
                        };
                        searchResults.ngOnInit();
                        expect(searchResults.query).toEqual(login);
                    });
                    it('should set first page by default', function () {
                        searchResults._routeParams.get = function () { return null; };
                        searchResults.ngOnInit();
                        expect(searchResults.currentPage).toEqual(1);
                    });
                    it('should set taken page', function () {
                        var page = 3;
                        spyOn(routerParamsMock, 'get').and.callFake(function (p) {
                            if (p === 'page') {
                                return page;
                            }
                            else {
                                return null;
                            }
                        });
                        searchResults.ngOnInit();
                        expect(searchResults.currentPage).toEqual(page);
                    });
                    it('should do nothing if query is not provided', function () {
                        spyOn(searchResults, '_requestFactory');
                        searchResults._routeParams.get = function () { return null; };
                        searchResults.ngOnInit();
                        expect(searchResults._requestFactory).not.toHaveBeenCalled();
                    });
                    it('should make request if query provided', function () {
                        var mocks = {
                            handler: function () { }
                        };
                        spyOn(mocks, 'handler');
                        spyOn(searchResults, '_requestFactory').and.returnValue(mocks.handler);
                        searchResults.query = 'query';
                        searchResults.currentPage = 3;
                        searchResults.ngOnInit();
                        expect(searchResults._requestFactory).toHaveBeenCalledWith(searchResults.query);
                        expect(searchResults._pagerHandler).toBeDefined();
                        expect(mocks.handler).toHaveBeenCalledWith(searchResults.currentPage);
                    });
                });
                describe('#_requestFactory', function () {
                    it('show results on success', function () {
                        spyOn(searchResults, 'onSearchResults');
                        spyOn(searchResults, '_isFirstPage');
                        var login = 'login';
                        var page = 3;
                        var res = {
                            json: function () {
                                return 'res';
                            }
                        };
                        userSearchMock.getUsers = function () {
                            return Rx_1.Observable.create(function (obs) {
                                obs.next(res);
                            });
                        };
                        spyOn(searchResults._searchService, 'getUsers').and.callThrough();
                        searchResults._requestFactory(login)(page);
                        expect(searchResults.error).toBeNull();
                        expect(searchResults.submitted).toBeTruthy();
                        expect(searchResults.onSearchResults).toHaveBeenCalledWith('res');
                    });
                    it('show error message on error', function () {
                        spyOn(console, 'error');
                        spyOn(searchResults, '_isFirstPage');
                        var login = 'login';
                        var page = 3;
                        var res = {
                            json: function () {
                                return { message: 'error' };
                            }
                        };
                        userSearchMock.getUsers = function () {
                            return Rx_1.Observable.create(function (obs) {
                                obs.error(res);
                            });
                        };
                        spyOn(searchResults._searchService, 'getUsers').and.callThrough();
                        searchResults._requestFactory(login)(page);
                        expect(searchResults.error).toEqual('error');
                        expect(searchResults.submitted).toBeTruthy();
                        expect(console.error).toHaveBeenCalled();
                        expect(searchResults.result).toEqual([]);
                    });
                });
                describe('#_isFirstPage', function () {
                    it('should return true if page is first', function () {
                        expect(searchResults._isFirstPage(1)).toBeTruthy();
                    });
                    it('should return false if page is not first', function () {
                        expect(searchResults._isFirstPage(2)).toBeFalsy();
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=search-results.component.spec.js.map