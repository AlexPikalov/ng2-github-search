import {Component, Input, Output, EventEmitter, OnChanges} from 'angular2/core';
@Component({
    selector: 'pager',
    templateUrl: 'app/pager/pager.component.html'
})
export class PagerComponent implements OnChanges {
    @Input()
    totalCount: number;

    @Input()
    itemsPerPage: number;

    @Input()
    current: number;

    @Output()
    onNewPage = new EventEmitter<number>();

    nextDisabled: boolean = true;

    prevDisabled: boolean = true;

    next() {
        this.current += 1;
        this.onNewPage.emit(this.current);
        this.updateState();
    }

    prev() {
        this.current -= 1;
        this.onNewPage.emit(this.current);
        this.updateState();
    }

    updateState() {
        this.prevDisabled = this.current === 1;
        var totalPages = Math.ceil(this.totalCount/this.itemsPerPage);
        this.nextDisabled = this.current === totalPages;
    }

    ngOnChanges() {
        this.updateState();
    }
}
