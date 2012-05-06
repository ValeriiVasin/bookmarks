App.collections.bookmarks = Backbone.Collection.extend({
  url: '/bookmarks',
  model: App.models.bookmark
});