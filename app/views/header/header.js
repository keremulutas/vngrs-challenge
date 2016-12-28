define([
    "marionette",
    "utils",
    "text!views/header/header.html",
],
function(
    Marionette,
    Utils,
    HeaderTemplate
) {
    var HeaderView = Marionette.View.extend({
        logNamespace: "HeaderView",
        template: HeaderTemplate,
        regions: {},
        initialize: function(options) {},
        onRender: function() {
            Utils.msg.log(this.logNamespace, "Rendered.");
        },
    });

    return HeaderView;
});
