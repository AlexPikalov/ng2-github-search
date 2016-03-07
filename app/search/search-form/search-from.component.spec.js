System.register(['angular2/testing', './search-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var search_form_component_1;
    return {
        setters:[
            function (_1) {},
            function (search_form_component_1_1) {
                search_form_component_1 = search_form_component_1_1;
            }],
        execute: function() {
            describe('Seacrh Form component', function () {
                var form;
                beforeEach(function () {
                    form = new search_form_component_1.SearchFormComponent();
                    form.onSearchSubmit = {
                        emit: function () { }
                    };
                    spyOn(form.onSearchSubmit, 'emit');
                });
                it('should set up default values on init', function () {
                    expect(form.submitted).toBeFalsy();
                    expect(form.userNotFound).toBeFalsy();
                });
                describe('#onSearchSubmit', function () {
                    it('should be an EventEmitter', function () {
                        expect(typeof form.onSearchSubmit.emit).toBe('function');
                    });
                });
                describe('#onSubmitHandler', function () {
                    it('should mark a form as submitted', function () {
                        form.submitted = false;
                        form.onSubmitHandler({});
                        expect(form.submitted).toBeTruthy();
                    });
                    it('should output a query if form is valid', function () {
                        form.query = 'query';
                        form.onSubmitHandler({ valid: true });
                        expect(form.onSearchSubmit.emit).toHaveBeenCalledWith(form.query);
                    });
                    it('should not output a query if form is invalid', function () {
                        form.query = 'query';
                        form.onSubmitHandler({ valid: false });
                        expect(form.onSearchSubmit.emit).not.toHaveBeenCalledWith(form.query);
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=search-from.component.spec.js.map