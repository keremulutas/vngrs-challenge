define([
    "bootstrap",
    "marionette",
    "utils",
    "text!templates/root.html",
    "views/header"
],
function(
    Bootstrap,
    Marionette,
    Utils,
    RootTemplate,
    HeaderView
) {
    var RootView = Marionette.View.extend({
        template: RootTemplate,
        regions: {
            header: "#header",
            content: "#content",
        },
        initialize: function(options) {
            this.appInstance = options.appInstance;
        },
        onRender: function() {
            this.$el.attr("id", "wrapper");
            this.showChildView("header", new HeaderView());
            // this.showChildView("sidebar", new SidebarView());
            // this.showChildView("feed", new ActivityFeedView());
        },
    });

    return RootView;
});
