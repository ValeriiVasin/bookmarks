App.views.bookmark = Backbone.View.extend({
  tagName: 'li',
  initialize: function () {
    this.template = App.templates.get('bookmark');
    _.bindAll(this, 'render');
  },
  render: function () {
    var element = this.template(this.model.toJSON());
    this.$el.html(element);
    return this;
  }
});