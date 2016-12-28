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
        onRender: function() {
            Utils.msg.log(this.logNamespace, "Rendered.");
        },
    });

    return ReviewsListView;
});
