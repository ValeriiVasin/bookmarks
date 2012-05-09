App.createModule('boorkmarks-list', function () {
  var share;

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
      new App.views.bookmarks_collection();
      App.subscribe('bookmark:share', share);
    },
    destroy: function () {
      App.unsubscribe('bookmark:share', share);
    }
  };
});