App.collections.bookmarks = Backbone.Collection.extend({
  url: '/bookmarks',
  model: App.models.bookmark,
  initialize: function () {
    _.bindAll(this, 'setEditableModel', 'saveEditableModel');
    App.subscribe('modal:edit', this.setEditableModel);
    App.subscribe('bookmark:update', this.saveEditableModel);
  },
  setEditableModel: function (modelJSON) {
    this.editableModelId = modelJSON.id;
  },
  saveEditableModel: function (fields) {
    var id = this.editableModelId, model;
    model = this.find(function (model) {
      return model.get('id') === id;
    });
    if (model) {
      model.save(fields);
    }
  }
});