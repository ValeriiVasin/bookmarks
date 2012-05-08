App.collections.bookmarks = Backbone.Collection.extend({
  url: '/bookmarks',
  model: App.models.bookmark,
  initialize: function () {
    _.bindAll(this, 'setEditableModelId', 'saveEditableModel', 'getEditableModel', 'destroyEditableModel', 'domainsStat');
  },
  setEditableModelId: function (modelJSON) {
    this.editableModelId = modelJSON.id;
  },
  getEditableModel: function () {
    var id = this.editableModelId;
    return this.find(function (model) {
      return model.get('id') === id;
    });
  },
  saveEditableModel: function (fields) {
    var model = this.getEditableModel();
    if (model) {
      model.save(fields);
    }
  },
  destroyEditableModel: function () {
    var model = this.getEditableModel();
    if (model) {
      model.destroy();
    }
  },
  domainsStat: function () {
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
  }
});