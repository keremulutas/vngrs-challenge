define([
    "marionette",
    "handlebars",
    "views/root",
    "utils",
], function(
    Marionette,
    Handlebars,
    RootView,
    Utils
) {
    var appInstance = null;

    var BookReviewApp = Marionette.Application.extend({
        channelName: "BookReview",
        region: "body",
        radioRequests: {
            "session:getLocale": function(key, param) {
                return appInstance.session.getLocale(key, param);
            },
        },
        radioEvents: {
            "session:logout": function() {
                this.session.logout();
            },
        },
        initialize: function(options) {
            Utils.msg.log("App", "Initialized.");
        },
        onBeforeStart: function(options) {
            Marionette.Renderer.render = function(template, data){
                return Handlebars.compile(template)(data);
            };
        },
        onStart: function(options) {
            this.showView(new RootView({
                appInstance: appInstance,
            }));

            Backbone.history.start();
        },
    });

    return (function() {
        appInstance = appInstance || new BookReviewApp();

        return appInstance;
    })();
});
