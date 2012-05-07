App.models.bookmark = Backbone.Model.extend({
  initialize: function () {
    _.bindAll(this, 'editFields');
  },
  editFields: function () {
    var json = this.toJSON();
    return {
      url: json.url,
      title: json.title,
      description: json.description
    };
  }
});