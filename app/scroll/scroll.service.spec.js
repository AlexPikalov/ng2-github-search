System.register(['angular2/testing', './scroll.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var scroll_service_1;
    return {
        setters:[
            function (_1) {},
            function (scroll_service_1_1) {
                scroll_service_1 = scroll_service_1_1;
            }],
        execute: function() {
            describe('ScrollService', function () {
                var scroll;
                beforeEach(function () {
                    scroll = new scroll_service_1.ScrollService;
                });
                describe('#scrollTop', function () {
                    it('should scroll up', function () {
                        document.body.scrollTop = 10;
                        scroll.scrollTop();
                        expect(document.body.scrollTop).toEqual(0);
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=scroll.service.spec.js.map