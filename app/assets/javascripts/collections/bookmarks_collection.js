App.collections.bookmarks = Backbone.Collection.extend({
  url: '/bookmarks',
  model: App.models.bookmark,
  initialize: function () {
    _.bindAll(this, 'setEditableModelId', 'saveEditableModel', 'getEditableModel', 'destroyEditableModel');
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
  }
});