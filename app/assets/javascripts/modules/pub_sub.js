(function ($) {
  var PubSub = {};
  App.subscribe = function (type, fn) {
    PubSub[type] = PubSub[type] || $.Callbacks();
    PubSub[type].add(fn);
  };

  App.publish = function (type, data) {
    if (arguments.length > 2) {
      throw new Error("Arguments amount should be less or equal than 2");
    }
    if (PubSub[type]) {
      PubSub[type].fire(data);
    }
  };

  App.unsubscribe = function (type, fn) {
    if (PubSub[type]) {
      PubSub[type].remove(fn);
    }
  };
}(jQuery));