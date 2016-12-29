define([
    "marionette",
    "lodash",
    "utils",
    "text!views/reviews/reviews.html",
    "collections/reviews",
    "views/reviewsList/reviewsList"
],
function(
    Marionette,
    lodash,
    Utils,
    ReviewsTemplate,
    ReviewsCollection,
    ReviewsListView
) {
    var ReviewsView = Marionette.View.extend({
        logNamespace: "ReviewsView",
        template: ReviewsTemplate,
        comparatorFuncs: {
            "mostHelpful": function(mdl) {
                // below line orders the collection by helpful count
                return -(mdl.get("helpful_count"));
                // below line orders the collection by helpful count - total count ratio
                // return -(mdl.get("helpful_count") / (mdl.get("helpful_count") + mdl.get("not_helpful_count")));
                // below line orders the collection by having most helpful count and least not helpful count
                // return -((mdl.get("helpful_count") + (mdl.get("helpful_count") / (mdl.get("helpful_count") + mdl.get("not_helpful_count")))));
            },
            "highestRating": function(mdl) {
                return -mdl.get("rating");
            },
            "newestFirst": function(mdl) {
                return -(
                    +(new Date(mdl.get("date")))
                );
            },
        },
        templateContext: function() {
            var countsByType = lodash.mapValues(
                lodash.groupBy(this.collection.models, function(mdl) { return mdl.get("user").type; }),
                function(arr) { return arr.length; }
            );
            return {
                collection: this.collection,
                countsByType: countsByType,
                sortBy: this.sortBy,
            };
        },
        regions: {
            "items": "#reviewItems",
        },
        events: {
            "change #sortBy": "sortByChanged",
            "click .flag": "flagClicked",
        },
        flagClicked: function(e) {
            this.userTypeFilter = $(e.currentTarget).data("filter");
            this.render();
        },
        sortByChanged: function(e) {
            this.sortBy = $(e.target).val();
            this.$el.find(".titleVariable").html(e.target.selectedOptions[0].innerText);
            this.collection.comparator = this.comparatorFuncs[this.sortBy];
            this.collection.sort();
        },
        initialize: function(options) {
            this.sortBy = "mostHelpful";
            this.userTypeFilter = "";
            this.collection = new ReviewsCollection();
            this.collection.comparator = this.comparatorFuncs[this.sortBy];
            this.collection.on("update", this.render, this);
            var self = this;
            this.collection.fetch({
                success: function() {
                    Utils.msg.log(self.logNamespace, self.collection);
                },
            });
        },
        onRender: function() {
            this.showChildView("items", new ReviewsListView({
                collection: this.collection,
                reorderOnSort: true,
                userTypeFilter: this.userTypeFilter,
            }));
            Utils.msg.log(this.logNamespace, "Rendered.");
        },
    });

    return ReviewsView;
});
