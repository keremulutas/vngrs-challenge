define([
    "backbone",
],
function(
    Backbone
) {
    var ReviewModel = Backbone.Model.extend({
        initialize: function(options) {
            this.id = options.id;
        },
        url: function() {
            return "http://vngrs-challenge.herokuapp.com/api/reviews/" + this.id + "/vote";
        },
    });

    return ReviewModel;
});
