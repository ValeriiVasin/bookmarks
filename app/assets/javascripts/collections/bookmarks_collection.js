App.collections.bookmarks = Backbone.Collection.extend({
  url: '/bookmarks',
  model: App.models.bookmark,
  initialize: function () {
    _.bindAll(this, 'domainStats', 'getFilteredModels');
  },
  comparator: function (model) {
    return model.get('created_at');
  },
  domainStats: function () {
    var stat = {},
        domain;
    this.each(function (model) {
      if (domain = model.getDomain()) {
        if (stat[domain]) {
          stat[domain] += 1;
        } else {
          stat[domain] = 1;
        }
      }
    });
    return stat;
  },
  getFilteredModels: function (filter) {
    if (filter.length === 0) {
      return this.models;
    } else {
      return this.filter(function (model) {
        return filter.indexOf(model.getDomain()) !== -1;
      });
    }
  }
});