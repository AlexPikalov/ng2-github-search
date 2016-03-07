System.register(['angular2/core', 'angular2/router', '../../user/user.service', '../../avatar-component/avatar.component'], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1, avatar_component_1;
    var UserProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (avatar_component_1_1) {
                avatar_component_1 = avatar_component_1_1;
            }],
        execute: function() {
            UserProfileComponent = (function () {
                function UserProfileComponent(_routeParams, _userService) {
                    this._routeParams = _routeParams;
                    this._userService = _userService;
                }
                UserProfileComponent.prototype.goBack = function () {
                    history.back();
                };
                UserProfileComponent.prototype.ngOnInit = function () {
                    this.userLogin = this._routeParams.get('login');
                    this.getUserDetails();
                };
                UserProfileComponent.prototype.getUserDetails = function () {
                    var _this = this;
                    this._userService.getOneUser(this.userLogin)
                        .subscribe(function (res) { return _this._setUserDetailsToProfile(res.json()); });
                };
                UserProfileComponent.prototype._setUserDetailsToProfile = function (details) {
                    this.profile = Object.assign(this.profile || {}, details);
                };
                UserProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'div.user-profile-wrapper.container',
                        templateUrl: 'app/search/user-profile/user-profile.html',
                        providers: [user_service_1.UserService],
                        directives: [avatar_component_1.AvatarComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, user_service_1.UserService])
                ], UserProfileComponent);
                return UserProfileComponent;
            }());
            exports_1("UserProfileComponent", UserProfileComponent);
        }
    }
});
//# sourceMappingURL=user-profile.component.js.map