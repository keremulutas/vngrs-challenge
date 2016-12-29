define([
    "jquery",
    "app",
    "backbone",
    "marionette",
    "utils",
],
function(
    $,
    App,
    Backbone,
    Marionette,
    Utils
) {
    var routerInstance = null;

    var RouterController = Marionette.Object.extend({
        home: function() {},
        defaultRoute: function(path) {
            Utils.msg.trace("[Router] No handler defined for this path: [", path, "]. Returning home.");
            Backbone.history.navigate("#", {
                trigger: true,
            });
        },
    });

    var MainRouter = Marionette.AppRouter.extend({
        controller: new RouterController(),

        appRoutes: {
            "": "home",
            "*path": "defaultRoute",
        },
    });

    return (function() {
        routerInstance = routerInstance || new MainRouter();

        return routerInstance;
    })();
});
