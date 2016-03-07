module.exports = function (config) {
    basePath: '.',

    frameworks: ['jasmine'],

    files: [
        // paths loaded by Karma
        {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true},
        {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
        {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
        {pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: true},
        {pattern: 'node_modules/angular2/bundles/http.dev.js', included: true, watched: true},
        {pattern: 'node_modules/angular2/bundles/router.dev.js', included: true, watched: true},
        {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
        {pattern: 'karma-test-shim.js', included: true, watched: true},

        // paths loaded via module imports
        {pattern: 'app/**/*.js', included: false, watched: true},

        // paths to support debugging with source maps in dev tools
        {pattern: 'app/**/*.ts', included: false, watched: false},
        {pattern: 'app/**/*.js.map', included: false, watched: false}
    ],
};
