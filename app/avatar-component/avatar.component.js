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
    var octoCat, AvatarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("octoCat", octoCat = 'data:image/png;base64,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');
            AvatarComponent = (function () {
                function AvatarComponent(_el) {
                    this._el = _el;
                }
                Object.defineProperty(AvatarComponent.prototype, "src", {
                    set: function (src) {
                        var _this = this;
                        this.img = new Image();
                        this.img.crossOrigin = 'anonymous';
                        this.img.onload = function () {
                            var data = _this._getImgBase64(_this.img);
                            _this.setHostSrcData(data);
                            _this._el.nativeElement.style.opacity = 1;
                        };
                        this.img.src = src;
                    },
                    enumerable: true,
                    configurable: true
                });
                AvatarComponent.prototype.setHostSrcData = function (data) {
                    this._el.nativeElement.src = data;
                };
                AvatarComponent.prototype.ngOnInit = function () {
                    this._el.nativeElement.style.opacity = 0.3;
                    this.setHostSrcData(octoCat);
                };
                AvatarComponent.prototype._getImgBase64 = function (img) {
                    var width = this.img.width;
                    var height = this.img.height;
                    var canvas = document.createElement('CANVAS');
                    canvas.width = width;
                    canvas.height = height;
                    var ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    return canvas.toDataURL('image/png');
                };
                __decorate([
                    core_1.Input('github-avatar'), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], AvatarComponent.prototype, "src", null);
                AvatarComponent = __decorate([
                    core_1.Directive({
                        selector: '[github-avatar]',
                        providers: [core_1.ElementRef]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AvatarComponent);
                return AvatarComponent;
            }());
            exports_1("AvatarComponent", AvatarComponent);
        }
    }
});
//# sourceMappingURL=avatar.component.js.map