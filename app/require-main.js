require.config({
    paths: {
        jquery: "vendor/jquery/dist/jquery.min",
        bootstrap: "vendor/bootstrap/dist/js/bootstrap.min",
        underscore: "vendor/lodash/dist/lodash.min",
        backbone: "vendor/backbone/backbone-min",
        "backbone.radio": "vendor/backbone.radio/build/backbone.radio.min",
        marionette: "vendor/backbone.marionette/lib/backbone.marionette.min",
        text: "vendor/requirejs-text/text",
        handlebars: "vendor/handlebars/handlebars.amd.min",
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
