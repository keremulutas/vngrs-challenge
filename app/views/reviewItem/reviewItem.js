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
        events: {
            "click .actionButtons a": function(e) {
                e.preventDefault();

                var data = $(e.currentTarget).data();
                var self = this;
                this.model.save(data, {
                    type: "POST",
                    wait: true,
                    success: function(model, response, options) {
                        var attrName = data.type + "_count";
                        self.model.set(attrName, self.model.get(attrName) + 1);
                        self.render();
                        self.model.collection.sort();
                    },
                    error: function(model, response, options) {
                        Utils.log.error(this.logNamespace, "An error occurred while taking action. Data:", data, "Model:", self.model);
                    },
                });
            },
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
