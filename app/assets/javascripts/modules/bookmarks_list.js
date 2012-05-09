App.createModule('boorkmarks-list', function () {
  var collection,
      view,
      create,
      bookmarkID,
      saveBookmarkId,
      update,
      destroy,
      share;

  saveBookmarkId = function (modelJSON) {
    bookmarkID = modelJSON.id;
  };

  create = function (fields) {
    if (!fields.url.match(/^https?:\/\//)) {
      fields.url = "http://" + fields.url;
    }
    collection.create(fields);
    App.router.navigate('archive', {trigger: true});
  };

  update = function (fields) {
    var model;
    if (!fields.url.match(/^https?:\/\//)) {
      fields.url = "http://" + fields.url;
    }
    model = collection.get(bookmarkID);
    if (model) {
      model.set(fields);
    }
  };

  destroy = function () {
    var model = collection.get(bookmarkID);
    if (model) {
      model.destroy();
    }
  };

  share = function (data) {
    if (data && data.url && data.email) {
      $.ajax({
        url: data.url,
        type: "POST",
        data: {email: data.email},
        error: function () {
          console.log("Sharing failed.");
          console.log(arguments);
        }
      });
    } else {
      throw new Error("Sharing has been failed. <data> object should contain url and email fields.");
    }
  };

  return {
    init: function () {
      collection = new App.collections.bookmarks();
      view = new App.views.bookmarks_collection({
        collection: collection,
        el: document.getElementById('links')
      });
      App.subscribe('bookmark:create', create);
      App.subscribe('modal:edit', saveBookmarkId);
      App.subscribe('bookmark:update', update);
      App.subscribe('bookmark:destroy', destroy);
      App.subscribe('filter:update', view.applyFilter);
      App.subscribe('bookmark:share', share);
    },
    destroy: function () {
      App.unsubscribe('bookmark:share', share);
      App.unsubscribe('bookmark:create', create);
      App.unsubscribe('modal:edit', saveBookmarkId);
      App.unsubscribe('bookmark:update', update);
      App.unsubscribe('bookmark:destroy', destroy);
      App.unsubscribe('filter:update', collection.applyFilter);
    }
  };
});