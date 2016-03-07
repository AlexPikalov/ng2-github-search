System.register(['angular2/core', 'angular2/http/testing', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, testing_1, http_1;
    function getMocks() {
        var conn;
        var injector = core_1.Injector.resolveAndCreate([
            testing_1.MockBackend,
            core_1.provide(http_1.Http, {
                useFactory: function (backend) {
                    return new http_1.Http(backend, new http_1.BaseRequestOptions());
                },
                deps: [testing_1.MockBackend]
            })
        ]);
        var http = injector.get(http_1.Http);
        var backend = injector.get(testing_1.MockBackend);
        backend.connections.subscribe(function (c) {
            conn = c;
        });
        return {
            getConnection: function () {
                return conn;
            },
            getHttp: function () {
                return http;
            }
        };
    }
    exports_1("getMocks", getMocks);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=test-utilities.js.map