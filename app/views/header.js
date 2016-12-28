define([
    "marionette",
    "utils",
    "text!templates/header.html",
],
function(
    Marionette,
    Utils,
    HeaderTemplate
) {
    var HeaderView = Marionette.View.extend({
        logNamespace: "HeaderView",
        template: HeaderTemplate,
        regions: {
            header: "#corvo_header",
            sidebar: "#corvo_sidebar",
            content: "#corvo_content",
            feed: "#corvo_feed",
        },
        initialize: function(options) {
        },
        onRender: function() {
            Utils.msg.log(this.logNamespace, "Rendered.");
        },
    });

    return HeaderView;
});
