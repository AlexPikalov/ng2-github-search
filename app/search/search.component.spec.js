System.register(['angular2/testing', './search.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var search_component_1;
    return {
        setters:[
            function (_1) {},
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            }],
        execute: function() {
            describe('Search component', function () {
                var search;
                var router;
                beforeEach(function () {
                    router = {
                        navigate: function () { }
                    };
                    search = new search_component_1.SearchComponent(router);
                });
                describe('#onSearchSubmit', function () {
                    it('should redirec to search results on search submit', function () {
                        spyOn(search._router, 'navigate');
                        search.onSearchSubmit();
                        expect(search._router.navigate).toHaveBeenCalled();
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=search.component.spec.js.map