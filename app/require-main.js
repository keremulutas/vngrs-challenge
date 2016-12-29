require.config({
    paths: {
        jquery: "vendor/jquery/dist/jquery.min",
        bootstrap: "vendor/bootstrap/dist/js/bootstrap.min",
        lodash: "vendor/lodash/dist/lodash.min",
        underscore: "vendor/underscore/underscore-min",
        backbone: "vendor/backbone/backbone-min",
        "backbone.radio": "vendor/backbone.radio/build/backbone.radio.min",
        marionette: "vendor/backbone.marionette/lib/backbone.marionette.min",
        text: "vendor/requirejs-text/text",
        handlebars: "vendor/handlebars/handlebars.amd.min",
        moment: "vendor/moment/min/moment.min",
        utils: "utils",
    },
    shim: {
        underscore: {
            exports: "_",
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone",
        },
        "backbone.radio": {
            deps: ["backbone"],
            exports: "BackboneRadio",
        },
        marionette: {
            deps: ["backbone"],
            exports: "Marionette",
        },
        bootstrap: {
            deps: ["jquery"],
            exports: "Bootstrap",
        },
    },
});

require([
    "app",
    "router",
], function(
    BookReviewApp,
    Router
) {
    $(document).ready(function() {
        window.bookReviewNs = window.bookReviewNs || {};
        window.bookReviewNs.app = BookReviewApp;

        BookReviewApp.start();
    });
});
