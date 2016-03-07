import {Injector, provide} from 'angular2/core';
import {inject, injectAsync} from 'angular2/testing';
import {ResponseOptions, Response, ResponseType} from 'angular2/http';

import {Observable} from 'rxjs/Rx';
import {getMocks} from '../utilities/test-utilities';

import {UserService} from './user.service';

describe('User service', () => {
    var userService;
    var mocks;
    beforeEach(() => {
        mocks = getMocks();
        userService = new UserService(mocks.getHttp());
    });

    describe('#getOneUser', () => {
        it('should load a requested user', (done) => {
            var r = {foo: "bar"};
            userService
                .getOneUser('log')
                .subscribe((res) => {
                    expect(res.json()).toEqual(r);
                    expect(res.status).toEqual(200);
                    done();
                });
            var resp = new ResponseOptions({body: r, status: 200});
            mocks.getConnection().mockRespond(new Response(resp));
        });

        it('should load a requested user', (done) => {
            var r = {foo: "bar"};
            userService
                .getOneUser('log')
                .subscribe((res) => {
                    expect(res.json()).toEqual(r);
                    expect(res.status).toEqual(400);
                    done();
                });
            var response = new Response(new ResponseOptions({body: r, status: 400, type: 3}));
            mocks.getConnection().mockRespond(response);
        });
    });
});
