define([
    "marionette",
    "utils",
    "text!templates/root.html",
],
function(
    Marionette,
    Utils,
    RootTemplate
) {
    var RootView = Marionette.View.extend({
        template: RootTemplate,
        regions: {
            header: "#corvo_header",
            sidebar: "#corvo_sidebar",
            content: "#corvo_content",
            feed: "#corvo_feed",
        },
        initialize: function(options) {
        },
        onRender: function() {
            // this.showChildView("header", new HeaderView());
            // this.showChildView("sidebar", new SidebarView());
            // this.showChildView("feed", new ActivityFeedView());
        },
    });

    return RootView;
});
