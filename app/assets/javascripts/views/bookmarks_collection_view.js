App.views.bookmarks_collection = Backbone.View.extend({
  initialize: function () {
    _.bindAll(this, 'addOne', 'addAll', 'updateFilters', 'applyFilter', 'add');
    this.appliedFilter = [];
    this.collection.on('reset', this.addAll);
    this.collection.on('add',   this.add);
    this.collection.on('all', this.updateFilters);
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
    App.publish('filter:reset', this.collection.domainStats());
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