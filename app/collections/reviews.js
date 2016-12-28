define([
    "backbone",
    "models/review",
],
function(
    Backbone,
    ReviewModel
) {
    var ReviewsCollection = Backbone.Collection.extend({
        model: ReviewModel,
        url: "http://vngrs-challenge.herokuapp.com/api/reviews",
        parse: function(response) {
            // this.count = response.meta.count;

            return response.data;
        },
    });

    return ReviewsCollection;
});
