System.register(['angular2/http', '../utilities/test-utilities', './user.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, test_utilities_1, user_service_1;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (test_utilities_1_1) {
                test_utilities_1 = test_utilities_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            describe('User service', function () {
                var userService;
                var mocks;
                beforeEach(function () {
                    mocks = test_utilities_1.getMocks();
                    userService = new user_service_1.UserService(mocks.getHttp());
                });
                describe('#getOneUser', function () {
                    it('should load a requested user', function (done) {
                        var r = { foo: "bar" };
                        userService
                            .getOneUser('log')
                            .subscribe(function (res) {
                            expect(res.json()).toEqual(r);
                            expect(res.status).toEqual(200);
                            done();
                        });
                        var resp = new http_1.ResponseOptions({ body: r, status: 200 });
                        mocks.getConnection().mockRespond(new http_1.Response(resp));
                    });
                    it('should load a requested user', function (done) {
                        var r = { foo: "bar" };
                        userService
                            .getOneUser('log')
                            .subscribe(function (res) {
                            expect(res.json()).toEqual(r);
                            expect(res.status).toEqual(400);
                            done();
                        });
                        var response = new http_1.Response(new http_1.ResponseOptions({ body: r, status: 400, type: 3 }));
                        mocks.getConnection().mockRespond(response);
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=user.service.spec.js.map