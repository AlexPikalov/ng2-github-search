import {Observable} from 'rxjs/Rx';
import {UserProfileComponent} from './user-profile.component';

describe('User Profile component', () => {
    var routerParamsMock;
    var userServiceMock;
    var userProfileComponent;

    beforeEach(() => {
        routerParamsMock = {
            'get': () => {}
        };

        userServiceMock = {
            getOneUser: () => {}
        };

        userProfileComponent = new UserProfileComponent(routerParamsMock, userServiceMock);
    });

    describe('#getUserDetails', () => {
        var response;

        beforeEach(() => {
            response = {};
            spyOn(userServiceMock, 'getOneUser').and.callFake(() => {
                return Observable.create((obs) => {
                    obs.next({json: () => response});
                });
            });
        });

        it('should call user service passing user login', () => {
            userProfileComponent.userLogin = 'foo';
            userProfileComponent.getUserDetails();
            expect(userServiceMock.getOneUser).toHaveBeenCalledWith(userProfileComponent.userLogin);
        });

        it('should update profile data', () => {
            response = {foo: 'bar'};
            spyOn(userProfileComponent, '_setUserDetailsToProfile');
            userProfileComponent.getUserDetails();
            expect(userProfileComponent._setUserDetailsToProfile).toHaveBeenCalledWith(response);
        });
    });

    describe('#ngOnInit', () => {
        it('should get user details', () => {
            var login = 'bar';
            spyOn(routerParamsMock, 'get').and.returnValue(login);
            spyOn(userProfileComponent, 'getUserDetails');
            userProfileComponent.ngOnInit();
            expect(routerParamsMock.get).toHaveBeenCalledWith('login');
            expect(userProfileComponent.userLogin).toBe(login);
            expect(userProfileComponent.getUserDetails).toHaveBeenCalled();
        });
    });

    describe('#goBack', () => {
        it('should redirect user to the previous state', () => {
            spyOn(history, 'back');
            userProfileComponent.goBack();
            expect(history.back).toHaveBeenCalled();
        });
    });
});
