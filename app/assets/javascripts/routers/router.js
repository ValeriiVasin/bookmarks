(function ($) {
  var menu, activateMenuItem;

  menu = function (name) {
    $('.content').hide();
    $(document.getElementById(name)).show();
  };

  activateMenuItem = function (position) {
    $(document.getElementById('menu')).children().removeClass('active').eq(position).addClass('active');
  };

  App.Router = Backbone.Router.extend({
    routes: {
      'about':    "about",
      'contacts': "contacts",
      'archive':  "archive",
      'new':      "createBookmark",
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
    createBookmark: function () {
      activateMenuItem(1);
      App.publish('modal:new');
    }
  });
}(jQuery));