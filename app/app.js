define([
    "marionette",
    "handlebars",
    "views/root/root",
    "utils",
], function(
    Marionette,
    Handlebars,
    RootView,
    Utils
) {
    var appInstance = null;

    var BookReviewApp = Marionette.Application.extend({
        logNamespace: "App",
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
            Utils.msg.log(this.logNamespace, "Initialized.");
        },
        onBeforeStart: function(options) {
            // we are setting Handlebars as the default template renderer here.
            Marionette.Renderer.render = function(template, data) {
                return Handlebars.compile(template)(data);
            };

            $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
                jqXHR.setRequestHeader(
                    "X-client_id",
                    "53489c26c4a9db05975549eaedb68a1eb7e7cb4fffcca9148c11ecb8d77e061f"
                );
            });

            Handlebars.registerHelper('select', function(value, options) {
                var $el = $('<select />').html( options.fn(this) );
                $el.find('[value="' + value + '"]').attr({'selected':'selected'});
                return $el.html();
            });
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
