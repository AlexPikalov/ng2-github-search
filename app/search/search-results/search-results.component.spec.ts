import {SearchResultsComponent} from './search-results.component';
import {Observable} from 'rxjs/Rx';

describe('Search Result component', () => {
    var searchResults;
    var routerMock;
    var scrollMock;
    var routerParamsMock;
    var userSearchMock;
    beforeEach(() => {
        routerMock = {
            navigate: () => {}
        };
        spyOn(routerMock, 'navigate');

        scrollMock = {
            scrollTop: () => {}
        };
        spyOn(scrollMock, 'scrollTop');

        routerParamsMock = {
            get: () => {}
        };

        userSearchMock = {
            getUsers: () => {}
        };

        searchResults = new SearchResultsComponent(userSearchMock, scrollMock, routerParamsMock, routerMock);
    });

    describe('#onSearchSubmit', () => {
        it('should set taken query', () => {
            var login = 'login';
            searchResults.onSearchSubmit(login);
            expect(searchResults.query).toBe(login);
        });

        it('should navigate to search results', () => {
            var login = 'login';
            searchResults.onSearchSubmit(login);
            var args = searchResults._router.navigate.calls.argsFor(0)[0];
            expect(args[0]).toEqual('SearchResults');
            expect(args[1]).toEqual({login: login, page: 1});
        });
    });

    describe('#onSearchResults', () => {
        it('should set result', () => {
            var items = [];
            searchResults.onSearchResults({items: items})
            expect(searchResults.result).toBe(items);
        });

        it('should set result', () => {
            var count = 6;
            searchResults.onSearchResults({total_count: count})
            expect(searchResults.totalCount).toBe(count);
        });
    });

    describe('#showDetails', () => {
        it('should been stabbed', () => {
            spyOn(console, 'log');
            searchResults.showDetails();
            expect(console.log).toHaveBeenCalled();
        });
    });

    describe('#onNewPage', () => {
        it('should navigate to search results', () => {
            searchResults.query = 'login';
            var page = 2;
            searchResults.onNewPage(page);
            var args = searchResults._router.navigate.calls.argsFor(0)[0];
            expect(args[0]).toEqual('SearchResults');
            expect(args[1]).toEqual({login: searchResults.query, page: page});
        });
    });

    describe('#ngOnInit', () => {
        it('should save taken query', () => {
            var login = 'query';
            spyOn(routerParamsMock, 'get').and.returnValue(login);
            searchResults._requestFactory = () => {
                return () => {};
            };
            searchResults.ngOnInit();
            expect(searchResults.query).toEqual(login);
        });

        it('should set first page by default', () => {
            searchResults._routeParams.get = () => null;
            searchResults.ngOnInit();
            expect(searchResults.currentPage).toEqual(1);
        });

        it('should set taken page', () => {
            var page = 3;
            spyOn(routerParamsMock, 'get').and.callFake((p) => {
                if (p === 'page') {
                    return page;
                } else {
                    return null
                }
            });
            searchResults.ngOnInit();
            expect(searchResults.currentPage).toEqual(page);
        });

        it('should do nothing if query is not provided', () => {
            spyOn(searchResults, '_requestFactory');
            searchResults._routeParams.get = () => null;
            searchResults.ngOnInit();
            expect(searchResults._requestFactory).not.toHaveBeenCalled();
        })

        it('should make request if query provided', () => {
            var mocks = {
                handler: () => {}
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

    describe('#_requestFactory', () => {
        it('show results on success', () => {
            spyOn(searchResults, 'onSearchResults');
            spyOn(searchResults, '_isFirstPage');
            var login = 'login';
            var page = 3;
            var res = {
                json: () => {
                    return 'res';
                }
            };

            userSearchMock.getUsers = () => {
                return Observable.create((obs) => {
                    obs.next(res);
                });
            }
            spyOn(searchResults._searchService, 'getUsers').and.callThrough();
            searchResults._requestFactory(login)(page);
            expect(searchResults.error).toBeNull();
            expect(searchResults.submitted).toBeTruthy();
            expect(searchResults.onSearchResults).toHaveBeenCalledWith('res');
        });

        it('show error message on error', () => {
            spyOn(console, 'error');
            spyOn(searchResults, '_isFirstPage');
            var login = 'login';
            var page = 3;
            var res = {
                json: () => {
                    return {message: 'error'};
                }
            };

            userSearchMock.getUsers = () => {
                return Observable.create((obs) => {
                    obs.error(res);
                });
            }
            spyOn(searchResults._searchService, 'getUsers').and.callThrough();
            searchResults._requestFactory(login)(page);
            expect(searchResults.error).toEqual('error');
            expect(searchResults.submitted).toBeTruthy();
            expect(console.error).toHaveBeenCalled();
            expect(searchResults.result).toEqual([])
        });
    });

    describe('#_isFirstPage', () => {
        it('should return true if page is first', () => {
            expect(searchResults._isFirstPage(1)).toBeTruthy();
        });

        it('should return false if page is not first', () => {
            expect(searchResults._isFirstPage(2)).toBeFalsy();
        });
    });
});
