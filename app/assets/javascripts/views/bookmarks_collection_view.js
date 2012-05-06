App.views.bookmarks_collection = Backbone.View.extend({
  el: '#links',
  collection: new App.collections.bookmarks,
  initialize: function () {
    this.$el.empty();
    _.bindAll(this, 'addOne', 'addAll');
    this.collection.on('reset', this.addAll);
    this.collection.fetch();
  },
  addOne: function (model) {
    view = new App.views.bookmark({model: model});
    this.$el.append(view.render().el);
  },
  addAll: function () {
    this.collection.each(this.addOne);
  }
});