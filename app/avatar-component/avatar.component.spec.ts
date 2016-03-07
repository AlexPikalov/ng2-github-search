import {
    it,
    injectAsync,
    TestComponentBuilder,
    ComponentFixture} from 'angular2/testing';
// import {ElementRef} from 'angular2/core';
import {AvatarComponent, octoCat} from './avatar.component';

describe('Avatar Component', () => {
    var img;
    var avatarComponent;

    beforeEach(() => {
        var _img = new Image();
        _img.crossOrigin = 'anonymous';

        img = {nativeElement: _img};

        avatarComponent = new AvatarComponent(img);
    });

    it('should load an image of provided src', (done) => {
        var base64 = octoCat;
        spyOn(avatarComponent, '_getImgBase64').and.returnValue(base64);
        spyOn(avatarComponent, 'setHostSrcData');
        avatarComponent.src = octoCat;

        var img = avatarComponent.img;
        setTimeout(() => {
            expect(img instanceof Image).toBeTruthy();
            expect(img.src).toEqual(octoCat);
            expect(avatarComponent._getImgBase64).toHaveBeenCalledWith(img);
            expect(avatarComponent.setHostSrcData).toHaveBeenCalledWith(base64);
            expect(avatarComponent._el.nativeElement.style.opacity).toEqual('1');
            done();
        });
    });

    describe('#setHostSrcData', () => {
        it('should set src provided as an argument', () => {
            var url = octoCat;
            avatarComponent.setHostSrcData(url);
            expect(avatarComponent._el.nativeElement.src).toEqual(url);
        });
    });

    describe('#ngOnInit', () => {
        it('should set host element url to octoCat', () => {
            spyOn(avatarComponent, 'setHostSrcData');
            avatarComponent.ngOnInit();
            expect(avatarComponent.setHostSrcData).toHaveBeenCalledWith(octoCat);
        });

        it('should set style properties to appropriate values', () => {
            avatarComponent.ngOnInit();
            expect(avatarComponent._el.nativeElement.style.opacity).toEqual('0.3');
        });
    });

    describe('#_getImgBase64', () => {
        it('should return base64 of provided img', () => {
            var octocatImg = new Image();
            octocatImg.src = octoCat;
            avatarComponent.img = octocatImg;
            expect(avatarComponent._getImgBase64(octocatImg)).toEqual(octoCat);
        })
    });
});
