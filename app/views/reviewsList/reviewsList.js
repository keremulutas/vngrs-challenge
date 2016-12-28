define([
    "marionette",
    "utils",
    "views/reviewItem/reviewItem",
],
function(
    Marionette,
    Utils,
    ReviewItemView
) {
    var ReviewsListView = Marionette.CollectionView.extend({
        logNamespace: "ReviewsListView",
        childView: ReviewItemView,
        initialize: function(options) {
            this.userTypeFilter = options.userTypeFilter;
        },
        onRender: function() {
            Utils.msg.log(this.logNamespace, "Rendered.");
        },
        filter: function(mdl) {
            if(this.userTypeFilter === "") return true;
            return mdl.get("user").type === this.userTypeFilter;
        },
    });

    return ReviewsListView;
});
