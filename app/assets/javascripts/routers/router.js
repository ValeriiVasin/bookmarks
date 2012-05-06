(function ($) {
  var menu, activateMenuItem;

  menu = function (name) {
    $('.content').hide();
    $('#'+name).show();
  };

  activateMenuItem = function (position) {
    this.menu = this.menu || $('#menu');
    this.menu.children().removeClass('active').eq(position).addClass('active');
  };

  App.Router = Backbone.Router.extend({
    routes: {
      'about':    "about",
      'contacts': "contacts",
      'archive':  "archive",
      'new':      "addBookmark",
      '*path':    "archive"
    },
    about: function () {
      activateMenuItem(2);
      menu('about');
    },
    contacts: function () {
      activateMenuItem(3);
      menu('contacts');
    },
    archive: function () {
      activateMenuItem(0);
      menu('archive');
    },
    addBookmark: function () {
      activateMenuItem(1);
      console.log('add new bookmark will be here');
    }
  });
}(jQuery));