System.register(['angular2/core', '../../user/user.service'], function(exports_1, context_1) {
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
    var core_1, user_service_1;
    var SearchFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            SearchFormComponent = (function () {
                function SearchFormComponent() {
                    this.onSearchSubmit = new core_1.EventEmitter();
                    this.submitted = false;
                    this.userNotFound = false;
                }
                SearchFormComponent.prototype.onSubmitHandler = function (form) {
                    this.submitted = true;
                    if (!form.valid) {
                        console.error('[Invalid form]:', form);
                        return;
                    }
                    this.onSearchSubmit.emit(this.query);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SearchFormComponent.prototype, "query", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SearchFormComponent.prototype, "onSearchSubmit", void 0);
                SearchFormComponent = __decorate([
                    core_1.Component({
                        selector: 'div.search-form-wrapper',
                        templateUrl: 'app/search/search-form/search-form.component.html',
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchFormComponent);
                return SearchFormComponent;
            }());
            exports_1("SearchFormComponent", SearchFormComponent);
        }
    }
});
//# sourceMappingURL=search-form.component.js.map