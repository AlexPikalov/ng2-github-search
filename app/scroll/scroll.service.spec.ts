import 'angular2/testing';
import {ScrollService} from './scroll.service';

describe('ScrollService', () => {
    var scroll;

    beforeEach(() => {
        scroll = new ScrollService;
    });

    describe('#scrollTop', () => {
        it('should scroll up', () => {
            document.body.scrollTop = 10;
            scroll.scrollTop();
            expect(document.body.scrollTop).toEqual(0);
        });
    });
});
