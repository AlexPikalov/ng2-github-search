System.register(['rxjs/Rx', './user-profile.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rx_1, user_profile_component_1;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (user_profile_component_1_1) {
                user_profile_component_1 = user_profile_component_1_1;
            }],
        execute: function() {
            describe('User Profile component', function () {
                var routerParamsMock;
                var userServiceMock;
                var userProfileComponent;
                beforeEach(function () {
                    routerParamsMock = {
                        'get': function () { }
                    };
                    userServiceMock = {
                        getOneUser: function () { }
                    };
                    userProfileComponent = new user_profile_component_1.UserProfileComponent(routerParamsMock, userServiceMock);
                });
                describe('#getUserDetails', function () {
                    var response;
                    beforeEach(function () {
                        response = {};
                        spyOn(userServiceMock, 'getOneUser').and.callFake(function () {
                            return Rx_1.Observable.create(function (obs) {
                                obs.next({ json: function () { return response; } });
                            });
                        });
                    });
                    it('should call user service passing user login', function () {
                        userProfileComponent.userLogin = 'foo';
                        userProfileComponent.getUserDetails();
                        expect(userServiceMock.getOneUser).toHaveBeenCalledWith(userProfileComponent.userLogin);
                    });
                    it('should update profile data', function () {
                        response = { foo: 'bar' };
                        spyOn(userProfileComponent, '_setUserDetailsToProfile');
                        userProfileComponent.getUserDetails();
                        expect(userProfileComponent._setUserDetailsToProfile).toHaveBeenCalledWith(response);
                    });
                });
                describe('#ngOnInit', function () {
                    it('should get user details', function () {
                        var login = 'bar';
                        spyOn(routerParamsMock, 'get').and.returnValue(login);
                        spyOn(userProfileComponent, 'getUserDetails');
                        userProfileComponent.ngOnInit();
                        expect(routerParamsMock.get).toHaveBeenCalledWith('login');
                        expect(userProfileComponent.userLogin).toBe(login);
                        expect(userProfileComponent.getUserDetails).toHaveBeenCalled();
                    });
                });
                describe('#goBack', function () {
                    it('should redirect user to the previous state', function () {
                        spyOn(history, 'back');
                        userProfileComponent.goBack();
                        expect(history.back).toHaveBeenCalled();
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=user-profile.component.spec.js.map