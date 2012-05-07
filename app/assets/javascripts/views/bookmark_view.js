App.views.bookmark = Backbone.View.extend({
  events: {
    "click [data-type='edit']"    : 'edit'
  },
  tagName: 'li',
  initialize: function () {
    this.template = App.templates.get('bookmark');
    _.bindAll(this, 'render', 'remove', 'edit');
    this.model.on('change', this.render);
    this.model.on('destroy', this.remove);
  },
  render: function () {
    var element = this.template(this.model.toJSON());
    this.$el.html(element);
    return this;
  },
  edit: function () {
    App.publish('modal:edit', this.model.toJSON());
    return false;
  },
  remove: function () {
    this.$el.remove();
  }
});