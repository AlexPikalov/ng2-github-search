System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var PagerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PagerComponent = (function () {
                function PagerComponent() {
                    this.onNewPage = new core_1.EventEmitter();
                    this.nextDisabled = true;
                    this.prevDisabled = true;
                }
                PagerComponent.prototype.next = function () {
                    this.current += 1;
                    this.onNewPage.emit(this.current);
                    this.updateState();
                };
                PagerComponent.prototype.prev = function () {
                    this.current -= 1;
                    this.onNewPage.emit(this.current);
                    this.updateState();
                };
                PagerComponent.prototype.updateState = function () {
                    this.prevDisabled = this.current === 1;
                    var totalPages = Math.ceil(this.totalCount / this.itemsPerPage);
                    this.nextDisabled = this.current === totalPages;
                };
                PagerComponent.prototype.ngOnChanges = function () {
                    this.updateState();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], PagerComponent.prototype, "totalCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], PagerComponent.prototype, "itemsPerPage", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], PagerComponent.prototype, "current", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], PagerComponent.prototype, "onNewPage", void 0);
                PagerComponent = __decorate([
                    core_1.Component({
                        selector: 'pager',
                        templateUrl: 'app/pager/pager.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], PagerComponent);
                return PagerComponent;
            }());
            exports_1("PagerComponent", PagerComponent);
        }
    }
});
//# sourceMappingURL=pager.component.js.map