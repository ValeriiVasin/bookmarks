App.views.bookmark = Backbone.View.extend({
  events: {
    "click [data-type='edit']"    : 'edit',
    "click [data-type='share']"   : 'share'
  },
  tagName: 'li',
  initialize: function () {
    this.template = App.templates.get('bookmark');
    _.bindAll(this, 'render', 'remove', 'edit', 'share');
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
  share: function () {
    App.publish('modal:share', this.model.get('id'));
    return false;
  },
  remove: function () {
    this.$el.remove();
  }
});