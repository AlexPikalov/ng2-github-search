import 'angular2/testing';

import {SearchFormComponent} from './search-form.component';

describe('Seacrh Form component', () => {
    var form;

    beforeEach(() => {
        form = new SearchFormComponent();
        form.onSearchSubmit = {
            emit: () => {}
        };
        spyOn(form.onSearchSubmit, 'emit');
    });

    it('should set up default values on init', () => {
        expect(form.submitted).toBeFalsy();
        expect(form.userNotFound).toBeFalsy();
    });

    describe('#onSearchSubmit', () => {
        it('should be an EventEmitter', () => {
            expect(typeof form.onSearchSubmit.emit).toBe('function');
        });
    });

    describe('#onSubmitHandler', () => {
        it('should mark a form as submitted', () => {
            form.submitted = false;
            form.onSubmitHandler({});
            expect(form.submitted).toBeTruthy();
        });

        it('should output a query if form is valid', () => {
            form.query = 'query';
            form.onSubmitHandler({valid: true});
            expect(form.onSearchSubmit.emit).toHaveBeenCalledWith(form.query);
        });

        it('should not output a query if form is invalid', () => {
            form.query = 'query';
            form.onSubmitHandler({valid: false});
            expect(form.onSearchSubmit.emit).not.toHaveBeenCalledWith(form.query);
        });
    });
});
