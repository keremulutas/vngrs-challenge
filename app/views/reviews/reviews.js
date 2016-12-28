define([
    "marionette",
    "utils",
    "text!views/reviews/reviews.html",
    "collections/reviews",
    "views/reviewsList/reviewsList"
],
function(
    Marionette,
    Utils,
    ReviewsTemplate,
    ReviewsCollection,
    ReviewsListView
) {
    var ReviewsView = Marionette.View.extend({
        logNamespace: "ReviewsView",
        template: ReviewsTemplate,
        templateContext: function() {
            var byType = _.groupBy(this.collection.models, function(mdl) {
                return mdl.get("user").type;
            });

            return {
                collection: this.collection,
                byType: byType,
            };
        },
        regions: {
            "items": "#reviewItems",
        },
        initialize: function(options) {
            var self = this;
            this.collection = new ReviewsCollection();
            this.collection.on("update", this.render, this);
            this.collection.fetch({
                success: function() {
                    Utils.msg.trace(self.logNamespace, self.collection);
                },
            });
        },
        onRender: function() {
            this.showChildView("items", new ReviewsListView({
                collection: this.collection,
            }));
            Utils.msg.log(this.logNamespace, "Rendered.");
        },
    });

    return ReviewsView;
});
