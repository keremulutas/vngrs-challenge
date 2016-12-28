define([
    "marionette",
    "utils",
    "text!views/reviewItem/reviewItem.html",
],
function(
    Marionette,
    Utils,
    ReviewItemTemplate
) {
    var ReviewItemView = Marionette.View.extend({
        logNamespace: "ReviewItemView",
        template: ReviewItemTemplate,
        regions: {},
        templateContext: function() {
            return {
                model: this.model,
            };
        },
        initialize: function(options) {
            this.model = options.model;
        },
        onRender: function() {
            // Utils.msg.log(this.logNamespace, "Rendered. Model:", this.model);
        },
    });

    return ReviewItemView;
});
