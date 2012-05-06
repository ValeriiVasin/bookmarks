App.createModule('boorkmarks-list', function () {
  return {
    init: function () {
      new App.views.bookmarks_collection();
    },
    destroy: function () {}
  }
});