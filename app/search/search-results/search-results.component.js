System.register(['angular2/core', 'angular2/router', '../search-service/search.service', '../../scroll/scroll.service', '../../pager/pager.component', '../search-form/search-form.component', '../../avatar-component/avatar.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, search_service_1, scroll_service_1, pager_component_1, search_form_component_1, avatar_component_1;
    var FIRST_PAGE, SearchResultsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (search_service_1_1) {
                search_service_1 = search_service_1_1;
            },
            function (scroll_service_1_1) {
                scroll_service_1 = scroll_service_1_1;
            },
            function (pager_component_1_1) {
                pager_component_1 = pager_component_1_1;
            },
            function (search_form_component_1_1) {
                search_form_component_1 = search_form_component_1_1;
            },
            function (avatar_component_1_1) {
                avatar_component_1 = avatar_component_1_1;
            }],
        execute: function() {
            FIRST_PAGE = 1;
            SearchResultsComponent = (function () {
                function SearchResultsComponent(_searchService, _scroll, _routeParams, _router) {
                    this._searchService = _searchService;
                    this._scroll = _scroll;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.result = [];
                    this.submitted = false;
                    this.itemsPerPage = 30;
                }
                SearchResultsComponent.prototype.onSearchSubmit = function (login) {
                    this.query = login;
                    this._router.navigate(['SearchResults', { login: login, page: FIRST_PAGE }]);
                };
                SearchResultsComponent.prototype.onSearchResults = function (res) {
                    this.result = res.items;
                    this.totalCount = res.total_count;
                };
                SearchResultsComponent.prototype.showDetails = function (user) {
                    console.log('result>', user);
                };
                SearchResultsComponent.prototype.onNewPage = function (newPage) {
                    this._router.navigate(['SearchResults', { login: this.query, page: newPage }]);
                };
                SearchResultsComponent.prototype._requestFactory = function (login) {
                    var _this = this;
                    return function (page) {
                        _this._scroll.scrollTop();
                        _this._searchService.getUsers(login, page)
                            .subscribe(function (users) {
                            _this.error = null;
                            _this.onSearchResults(users.json());
                            _this.submitted = true;
                        }, function (err) {
                            var message = err.json().message;
                            console.error('[GH Cli Error]: %s', message);
                            _this.result = [];
                            _this.error = message;
                            _this.submitted = true;
                        });
                    };
                };
                SearchResultsComponent.prototype.ngOnInit = function () {
                    this.query = this._routeParams.get('login');
                    this.currentPage = parseInt(this._routeParams.get('page')) || FIRST_PAGE;
                    if (this.query !== null) {
                        this._pagerHandler = this._requestFactory(this.query);
                        this._pagerHandler(this.currentPage);
                    }
                };
                SearchResultsComponent.prototype._isFirstPage = function (n) {
                    return n === FIRST_PAGE;
                };
                SearchResultsComponent = __decorate([
                    core_1.Component({
                        selector: 'div.search-results',
                        templateUrl: 'app/search/search-results/search-results.component.html',
                        directives: [search_form_component_1.SearchFormComponent, pager_component_1.PagerComponent, router_1.ROUTER_DIRECTIVES, avatar_component_1.AvatarComponent],
                        providers: [search_service_1.SearchService]
                    }), 
                    __metadata('design:paramtypes', [search_service_1.SearchService, scroll_service_1.ScrollService, router_1.RouteParams, router_1.Router])
                ], SearchResultsComponent);
                return SearchResultsComponent;
            }());
            exports_1("SearchResultsComponent", SearchResultsComponent);
        }
    }
});
//# sourceMappingURL=search-results.component.js.map