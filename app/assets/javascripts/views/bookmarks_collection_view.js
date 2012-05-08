App.views.bookmarks_collection = Backbone.View.extend({
  el: '#links',
  collection: new App.collections.bookmarks(),
  initialize: function () {
    _.bindAll(this, 'addOne', 'addAll', 'updateFilters', 'applyFilter', 'add');
    this.appliedFilter = [];
    this.collection.on('reset', this.addAll);
    this.collection.on('add',   this.add);
    this.collection.on('all', this.updateFilters);
    App.subscribe('bookmark:create', $.proxy(this.collection.create, this.collection));
    App.subscribe('modal:edit', this.collection.setEditableModelId);
    App.subscribe('bookmark:update', this.collection.saveEditableModel);
    App.subscribe('bookmark:destroy', this.collection.destroyEditableModel);
    App.subscribe('filter:update', this.applyFilter);
    this.collection.fetch();
  },
  add: function (model) {
    this.appliedFilter.length > 0 ? this.resetFilter() : this.addOne(model);
  },
  addOne: function (model) {
    view = new App.views.bookmark({model: model});
    this.$el.prepend(view.render().el);
  },
  addAll: function () {
    this.$el.empty();
    this.collection.each(this.addOne);
  },
  updateFilters: function () {
    App.publish('filter:reset', this.collection.domainsStat());
  },
  applyFilter: function (filter) {
    this.appliedFilter = filter;
    this.$el.empty();
    _.each(this.collection.getFilteredModels(filter), this.addOne);
  },
  resetFilter: function () {
    this.appliedFilter = [];
    this.addAll();
  }
});