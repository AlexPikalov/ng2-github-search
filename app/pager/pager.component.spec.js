System.register(['angular2/testing', './pager.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, pager_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (pager_component_1_1) {
                pager_component_1 = pager_component_1_1;
            }],
        execute: function() {
            testing_1.describe('PagerComponent', function () {
                var ee;
                var pager;
                testing_1.beforeEach(function () {
                    ee = {
                        emit: function () { }
                    };
                    pager = new pager_component_1.PagerComponent();
                    pager.onNewPage = ee;
                });
                testing_1.describe('#ngOnChanges', function () {
                    testing_1.it('should update pager state', function () {
                        spyOn(pager, 'updateState');
                        pager.ngOnChanges();
                        testing_1.expect(pager.updateState).toHaveBeenCalled();
                    });
                });
                testing_1.describe('#next', function () {
                    testing_1.it('should increment current page number', function () {
                        pager.current = 1;
                        pager.next();
                        testing_1.expect(pager.current).toEqual(2);
                    });
                    testing_1.it('should publish a change event', function () {
                        pager.current = 1;
                        spyOn(pager.onNewPage, 'emit');
                        pager.next();
                        testing_1.expect(pager.onNewPage.emit).toHaveBeenCalledWith(2);
                    });
                    testing_1.it('should update pager state', function () {
                        spyOn(pager, 'updateState');
                        pager.next();
                        testing_1.expect(pager.updateState).toHaveBeenCalled();
                    });
                });
                testing_1.describe('#prev', function () {
                    testing_1.it('should decrement current page number', function () {
                        pager.current = 2;
                        pager.prev();
                        testing_1.expect(pager.current).toEqual(1);
                    });
                    testing_1.it('should publish a change event', function () {
                        pager.current = 2;
                        spyOn(pager.onNewPage, 'emit');
                        pager.prev();
                        testing_1.expect(pager.onNewPage.emit).toHaveBeenCalledWith(1);
                    });
                    testing_1.it('should update pager state', function () {
                        spyOn(pager, 'updateState');
                        pager.prev();
                        testing_1.expect(pager.updateState).toHaveBeenCalled();
                    });
                });
                testing_1.describe('#updateState', function () {
                    testing_1.it('should disable next if current page is last', function () {
                        pager.totalCount = 2;
                        pager.itemsPerPage = 1;
                        pager.current = 2;
                        pager.updateState();
                        testing_1.expect(pager.nextDisabled).toBeTruthy();
                    });
                    testing_1.it('should not disable next if current page is not last', function () {
                        pager.totalCount = 2;
                        pager.itemsPerPage = 1;
                        pager.current = 1;
                        pager.updateState();
                        testing_1.expect(pager.nextDisabled).toBeFalsy();
                    });
                    testing_1.it('should disable prev if current page is first', function () {
                        pager.totalCount = 2;
                        pager.itemsPerPage = 1;
                        pager.current = 1;
                        pager.updateState();
                        testing_1.expect(pager.prevDisabled).toBeTruthy();
                    });
                    testing_1.it('should not disable prev if current page is not first', function () {
                        pager.totalCount = 2;
                        pager.itemsPerPage = 1;
                        pager.current = 2;
                        pager.updateState();
                        testing_1.expect(pager.prevDisabled).toBeFalsy();
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=pager.component.spec.js.map