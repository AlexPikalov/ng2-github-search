import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {PagerComponent} from './pager.component';

describe('PagerComponent', () => {
    var ee;
    var pager: PagerComponent;

    beforeEach(() => {
        ee = {
            emit: () => {}
        };
        pager = new PagerComponent();
        pager.onNewPage = ee;
    });

    describe('#ngOnChanges', () => {
        it('should update pager state', () => {
            spyOn(pager, 'updateState');
            pager.ngOnChanges();
            expect(pager.updateState).toHaveBeenCalled();
        });
    });

    describe('#next', () => {
        it('should increment current page number', () => {
            pager.current = 1;
            pager.next();
            expect(pager.current).toEqual(2);
        });

        it('should publish a change event', () => {
            pager.current = 1;
            spyOn(pager.onNewPage, 'emit');
            pager.next();
            expect(pager.onNewPage.emit).toHaveBeenCalledWith(2);
        });

        it('should update pager state', () => {
            spyOn(pager, 'updateState');
            pager.next();
            expect(pager.updateState).toHaveBeenCalled();
        });
    });

    describe('#prev', () => {
        it('should decrement current page number', () => {
            pager.current = 2;
            pager.prev();
            expect(pager.current).toEqual(1);
        });

        it('should publish a change event', () => {
            pager.current = 2;
            spyOn(pager.onNewPage, 'emit');
            pager.prev();
            expect(pager.onNewPage.emit).toHaveBeenCalledWith(1);
        });

        it('should update pager state', () => {
            spyOn(pager, 'updateState');
            pager.prev();
            expect(pager.updateState).toHaveBeenCalled();
        });
    });

    describe('#updateState', () => {
        it('should disable next if current page is last', () => {
            pager.totalCount = 2;
            pager.itemsPerPage = 1;
            pager.current = 2;
            pager.updateState();
            expect(pager.nextDisabled).toBeTruthy();
        });

        it('should not disable next if current page is not last', () => {
            pager.totalCount = 2;
            pager.itemsPerPage = 1;
            pager.current = 1;
            pager.updateState();
            expect(pager.nextDisabled).toBeFalsy();
        });

        it('should disable prev if current page is first', () => {
            pager.totalCount = 2;
            pager.itemsPerPage = 1;
            pager.current = 1;
            pager.updateState();
            expect(pager.prevDisabled).toBeTruthy();
        });

        it('should not disable prev if current page is not first', () => {
            pager.totalCount = 2;
            pager.itemsPerPage = 1;
            pager.current = 2;
            pager.updateState();
            expect(pager.prevDisabled).toBeFalsy();
        });
    });
})
