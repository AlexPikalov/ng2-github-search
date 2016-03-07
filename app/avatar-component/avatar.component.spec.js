System.register(['angular2/testing', './avatar.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, avatar_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (avatar_component_1_1) {
                avatar_component_1 = avatar_component_1_1;
            }],
        execute: function() {
            describe('Avatar Component', function () {
                var img;
                var avatarComponent;
                beforeEach(function () {
                    var _img = new Image();
                    _img.crossOrigin = 'anonymous';
                    img = { nativeElement: _img };
                    avatarComponent = new avatar_component_1.AvatarComponent(img);
                });
                testing_1.it('should load an image of provided src', function (done) {
                    var base64 = avatar_component_1.octoCat;
                    spyOn(avatarComponent, '_getImgBase64').and.returnValue(base64);
                    spyOn(avatarComponent, 'setHostSrcData');
                    avatarComponent.src = avatar_component_1.octoCat;
                    var img = avatarComponent.img;
                    setTimeout(function () {
                        expect(img instanceof Image).toBeTruthy();
                        expect(img.src).toEqual(avatar_component_1.octoCat);
                        expect(avatarComponent._getImgBase64).toHaveBeenCalledWith(img);
                        expect(avatarComponent.setHostSrcData).toHaveBeenCalledWith(base64);
                        expect(avatarComponent._el.nativeElement.style.opacity).toEqual('1');
                        done();
                    });
                });
                describe('#setHostSrcData', function () {
                    testing_1.it('should set src provided as an argument', function () {
                        var url = avatar_component_1.octoCat;
                        avatarComponent.setHostSrcData(url);
                        expect(avatarComponent._el.nativeElement.src).toEqual(url);
                    });
                });
                describe('#ngOnInit', function () {
                    testing_1.it('should set host element url to octoCat', function () {
                        spyOn(avatarComponent, 'setHostSrcData');
                        avatarComponent.ngOnInit();
                        expect(avatarComponent.setHostSrcData).toHaveBeenCalledWith(avatar_component_1.octoCat);
                    });
                    testing_1.it('should set style properties to appropriate values', function () {
                        avatarComponent.ngOnInit();
                        expect(avatarComponent._el.nativeElement.style.opacity).toEqual('0.3');
                    });
                });
                describe('#_getImgBase64', function () {
                    testing_1.it('should return base64 of provided img', function () {
                        var octocatImg = new Image();
                        octocatImg.src = avatar_component_1.octoCat;
                        avatarComponent.img = octocatImg;
                        expect(avatarComponent._getImgBase64(octocatImg)).toEqual(avatar_component_1.octoCat);
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=avatar.component.spec.js.map