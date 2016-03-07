import {Injector, provide} from 'angular2/core';
import {MockBackend} from 'angular2/http/testing';
import {BaseRequestOptions, Http} from 'angular2/http';

export function getMocks() {
    var conn;
    var injector = Injector.resolveAndCreate([
        MockBackend,
        provide(Http, {
            useFactory: (backend) => {
                return new Http(backend, new BaseRequestOptions());
            },
            deps: [MockBackend]
        })
    ]);
    var http = injector.get(Http);
    var backend = injector.get(MockBackend);
    backend.connections.subscribe(c => {
        conn = c;
    });

    return {
        getConnection: () => {
            return conn;
        },
        getHttp: () => {
            return http;
        }
    };
}
