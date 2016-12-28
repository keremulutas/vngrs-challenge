define([
    "bootstrap",
    "marionette",
    "utils",
    "text!views/root/root.html",
    "views/header/header",
    "views/reviews/reviews",
],
function(
    Bootstrap,
    Marionette,
    Utils,
    RootTemplate,
    HeaderView,
    ReviewsView
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
            this.showChildView("content", new ReviewsView());
        },
    });

    return RootView;
});
